// =========================================================
// EKSPOR CAROUSEL
//   Slide diam      → PNG 1080x1350
//   Slide bergerak  → MP4 1080x1350 (30 fps), butuh ffmpeg
//
//   node export.mjs                     → semua carousel
//   node export.mjs 08-contoh-gerak-broll → satu carousel saja
//
// Hasil: output/<id-carousel>/slide-01.png / slide-02.mp4 ...
// =========================================================
import { chromium } from "playwright";
import { mkdir, rm, readdir } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const FPS = 30;
const dir = path.dirname(fileURLToPath(import.meta.url));
const only = process.argv[2];
const url = pathToFileURL(path.join(dir, "index.html")).href + "?export=1" + (only ? `&only=${only}` : "");

const punyaFfmpeg = (() => { try { execFileSync("ffmpeg", ["-version"], { stdio: "ignore" }); return true; } catch { return false; } })();
if (!punyaFfmpeg) console.warn("⚠ ffmpeg tidak ditemukan: slide bergerak akan disimpan sebagai PNG (frame terakhir).");

// Chrome asli (bisa memutar MP4/H.264); kalau tidak ada, pakai Chromium bawaan Playwright.
let browser;
try { browser = await chromium.launch({ channel: "chrome" }); }
catch { browser = await chromium.launch(); console.warn("ℹ Memakai Chromium bawaan. Kalau video B-roll tidak muncul, ubah video ke .webm."); }

const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);

// Bekukan semua animasi & video pada detik ke-t untuk satu slide
async function seek(slide, t) {
  await slide.evaluate(async (el, t) => {
    for (const a of el.getAnimations({ subtree: true })) { a.pause(); a.currentTime = t * 1000; }
    await Promise.all([...el.querySelectorAll("video")].map(v => new Promise(res => {
      v.pause();
      const go = () => {
        const target = v.duration ? t % v.duration : 0;
        if (Math.abs(v.currentTime - target) < 0.001) return res();
        const done = () => { v.removeEventListener("seeked", done); res(); };
        v.addEventListener("seeked", done); v.currentTime = target; setTimeout(res, 3000);
      };
      if (v.readyState >= 1) go();
      else { v.addEventListener("loadedmetadata", go, { once: true }); setTimeout(res, 5000); }
    })));
  }, t);
}

async function lamaSlide(slide) {
  return slide.evaluate(async el => {
    let d = Number(el.dataset.durasi) || 0;
    if (!d) {   // ikuti panjang video, maksimal 15 detik
      const v = el.querySelector("video");
      if (v) { if (v.readyState < 1) await new Promise(r => { v.addEventListener("loadedmetadata", r, { once: true }); setTimeout(r, 5000); });
               d = Math.min(v.duration || 6, 15); }
    }
    return d || 5;
  });
}

for (const set of await page.$$(".set")) {
  const id = await set.getAttribute("data-id");
  const outDir = path.join(dir, "output", id);
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });
  const slides = await set.$$(".slide");

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const nama = `slide-${String(i + 1).padStart(2, "0")}`;
    const bergerak = (await slide.getAttribute("data-durasi")) !== null;

    if (!bergerak || !punyaFfmpeg) {
      if (bergerak) await seek(slide, 99);        // tanpa ffmpeg: ambil keadaan akhir
      await slide.screenshot({ path: path.join(outDir, nama + ".png") });
      console.log("✓", `${id}/${nama}.png`);
      continue;
    }

    const durasi = await lamaSlide(slide);
    const tmp = path.join(outDir, "_frames_" + nama);
    await mkdir(tmp, { recursive: true });
    const total = Math.round(durasi * FPS);
    for (let f = 0; f < total; f++) {
      await seek(slide, f / FPS);
      await slide.screenshot({ path: path.join(tmp, `f${String(f).padStart(5, "0")}.png`) });
      if (f % FPS === 0) process.stdout.write(`\r… ${id}/${nama}.mp4  ${Math.round((f / total) * 100)}%   `);
    }
    execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-framerate", String(FPS), "-i", path.join(tmp, "f%05d.png"),
      "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-pix_fmt", "yuv420p", "-movflags", "+faststart",
      path.join(outDir, nama + ".mp4")]);
    await rm(tmp, { recursive: true, force: true });
    console.log(`\r✓ ${id}/${nama}.mp4 (${durasi} dtk)            `);
  }
}
await browser.close();
console.log("\nSelesai. Hasil ada di folder output/");
