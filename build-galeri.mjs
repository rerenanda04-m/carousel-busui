// Membuat halaman galeri (output/index.html) berisi semua hasil ekspor,
// supaya gampang disimpan dari HP: tekan lama gambar → Simpan, atau unduh ZIP.
import { readFile, readdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(dir, "output");
const ctx = {}; vm.createContext(ctx);
vm.runInContext((await readFile(path.join(dir, "content.js"), "utf8")) + ";this.CAROUSELS=CAROUSELS;this.CONFIG=CONFIG;", ctx);
const esc = s => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;");

const sets = [];
for (const c of [...ctx.CAROUSELS].reverse()) {          // carousel terbaru di atas
  if (!existsSync(path.join(out, c.id))) continue;
  const files = (await readdir(path.join(out, c.id))).filter(f => /\.(png|mp4)$/.test(f)).sort();
  sets.push(`
  <section>
    <div class="head"><h2>${esc(c.judul)}</h2>${c.format ? `<span>${esc(c.format)}</span>` : ""}
      ${existsSync(path.join(out, c.id + ".zip")) ? `<a class="zip" href="${c.id}.zip" download>Unduh semua (ZIP)</a>` : ""}</div>
    <div class="grid">${files.map(f => {
      const src = `${c.id}/${f}`;
      const media = f.endsWith(".mp4")
        ? `<video src="${src}" muted loop playsinline autoplay controls></video>`
        : `<img src="${src}" loading="lazy" alt="${f}">`;
      return `<figure>${media}<figcaption>${f} · <a href="${src}" download>unduh</a></figcaption></figure>`;
    }).join("")}</div>
  </section>`);
}

await writeFile(path.join(out, "index.html"), `<!DOCTYPE html><html lang="id"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>Galeri carousel ${esc(ctx.CONFIG.handle)}</title>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Quicksand:wght@500;700&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#F9DCEA;color:#5B2A6E;font-family:Quicksand,system-ui,sans-serif;padding:20px 14px 60px}
h1{font-family:"Josefin Sans";font-size:26px;margin:4px 4px 2px}
.top p{margin:0 4px 18px;font-size:14px;opacity:.8}.top a{color:#C2408F;font-weight:700}
section{background:#FFF7EF;border-radius:20px;padding:14px;margin-bottom:22px}
.head{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:12px}
h2{font-family:"Josefin Sans";font-size:18px;margin:0;flex:1 1 100%}
.head span{background:#FFD45C;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:4px 10px;border-radius:99px}
.zip{background:#C2408F;color:#fff;text-decoration:none;font-weight:700;font-size:14px;padding:8px 16px;border-radius:99px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}
figure{margin:0}img,video{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:12px;display:block;background:#eee}
figcaption{font-size:12px;margin-top:4px}figcaption a{color:#C2408F;font-weight:700}
</style></head><body>
<div class="top"><h1>Galeri carousel</h1>
<p>Tekan lama gambar → Simpan, atau unduh ZIP per carousel. Video (.mp4) bisa dicampur dengan gambar dalam satu post IG.
<br><a href="../pratinjau.html">Lihat pratinjau semua slide →</a></p></div>
${sets.join("") || "<p>Belum ada hasil ekspor.</p>"}
</body></html>`);
console.log("✓ output/index.html");
