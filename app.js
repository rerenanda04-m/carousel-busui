/* =========================================================
   MESIN CAROUSEL — mengubah isi content.js jadi slide.
   Biasanya tidak perlu diedit, kecuali mau menambah
   jenis slide atau dekorasi baru.
   ========================================================= */

const C = { plum: "#5B2A6E", berry: "#C2408F", kuning: "#FFD45C", pink: "#F9DCEA", krem: "#FFF7EF" };

/* ---------- ikon & dekorasi (SVG) ---------- */
const ICON = {
  check: c => `<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`,
  x: c => `<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="3.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
  save: c => `<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.2" stroke-linejoin="round"><path d="M6 3.5h12v17l-6-4.2-6 4.2z"/></svg>`,
  komen: c => `<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.2" stroke-linejoin="round"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.3 7.6L3.5 20.5l1.4-4.6A8.5 8.5 0 1 1 20.5 11.5z"/></svg>`,
  share: c => `<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.2" stroke-linejoin="round"><path d="M21 3.5L10 14M21 3.5l-6.5 17-4.5-6.5-6.5-4.5z"/></svg>`,
  follow: c => `<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round"><circle cx="9.5" cy="8" r="4"/><path d="M2.5 20.5c.8-3.8 3.6-6 7-6s6.2 2.2 7 6M19 7.5v6M16 10.5h6"/></svg>`,
  bowl: c => `<svg viewBox="0 0 64 64" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round"><path d="M8 30h48c0 13-11 22-24 22S8 43 8 30z"/><path d="M24 22c-2-4 2-6 0-10M32 22c-2-4 2-6 0-10M40 22c-2-4 2-6 0-10"/></svg>`,
  egg: c => `<svg viewBox="0 0 64 64" fill="none" stroke="${c}" stroke-width="3.5"><path d="M32 6c10 0 18 16 18 28a18 18 0 0 1-36 0C14 22 22 6 32 6z"/><circle cx="32" cy="36" r="8" fill="${c}"/></svg>`,
  cup: c => `<svg viewBox="0 0 64 64" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round"><path d="M14 22h36l-4 32H18z"/><path d="M12 22h40M26 22c0-6 4-10 10-10"/><circle cx="40" cy="12" r="4"/></svg>`,
  arrow: c => `<svg viewBox="0 0 64 24" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h56M48 3l10 9-10 9"/></svg>`,
  camera: c => `<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.8" stroke-linejoin="round"><path d="M4 7.5h3.2L9 5h6l1.8 2.5H20a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.6"/></svg>`,
  heart: c => `<svg viewBox="0 0 24 24" fill="${c}"><path d="M12 20.5S3 15 3 8.8A4.8 4.8 0 0 1 12 6.3a4.8 4.8 0 0 1 9 2.5C21 15 12 20.5 12 20.5z"/></svg>`,
};

const DOODLE = {
  sparkle: c => `<svg viewBox="0 0 40 40"><path d="M20 0c2 12 8 18 20 20-12 2-18 8-20 20-2-12-8-18-20-20C12 18 18 12 20 0z" fill="${c}"/></svg>`,
  heart: c => `<svg viewBox="0 0 40 36"><path d="M20 35S2 23.5 2 11.5A9.5 9.5 0 0 1 20 7a9.5 9.5 0 0 1 18 4.5C38 23.5 20 35 20 35z" fill="${c}"/></svg>`,
  drop: c => `<svg viewBox="0 0 30 40"><path d="M15 1C15 1 2 17 2 26a13 13 0 0 0 26 0C28 17 15 1 15 1z" fill="${c}"/></svg>`,
  squiggle: c => `<svg viewBox="0 0 200 40" fill="none"><path d="M4 22c16-22 32 22 48 0s32 22 48 0 32 22 48 0 32 22 48 0" stroke="${c}" stroke-width="7" stroke-linecap="round"/></svg>`,
  ring: c => `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="44" stroke="${c}" stroke-width="5" stroke-dasharray="4 14" stroke-linecap="round"/></svg>`,
};

/* ---------- pembantu ---------- */
const esc = s => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const fmt = s => esc(s).replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/\n/g, "<br>");   // *kata* → aksen
const pad = n => String(n).padStart(2, "0");

/* Foto: kalau file belum ada / salah nama, otomatis muncul kotak "taruh foto di sini" */
function emptyPhoto(src, jenis = "foto") {
  return `<div class="ph-empty">${ICON.camera(C.berry)}<div>Taruh ${jenis} di sini</div>${src ? `<small>${esc(src)}</small>` : ""}</div>`;
}
function foto(src, pos) {
  if (!src) return emptyPhoto("");
  const style = pos ? ` style="object-position:${esc(pos)}"` : "";
  return `<img class="ph" src="${esc(src)}"${style} alt="" onerror="this.outerHTML=emptyPhoto('${esc(src)}')">`;
}
/* B-roll: video sebagai latar. Kalau slide punya video, video yang dipakai; kalau tidak, foto. */
function media(o) {
  if (!o.video) return foto(o.foto, o.posisiFoto);
  const style = o.posisiFoto ? ` style="object-position:${esc(o.posisiFoto)}"` : "";
  return `<video class="ph" src="${esc(o.video)}"${style} muted loop playsinline autoplay preload="auto"
    onerror="this.outerHTML=emptyPhoto('${esc(o.video)}','video')"></video>`;
}
const hasMedia = o => o.foto !== undefined || o.video !== undefined;

const DARK = ["hook", "foto-penuh", "kutipan", "polling", "cta"];   // slide berlatar gelap

const PALET = {
  hook: [C.kuning, C.pink], polling: [C.kuning, C.pink], checklist: [C.berry, C.krem],
  default: [C.berry, C.kuning],
};
const SPOTS = [
  [["sparkle", "top:90px;left:90px;width:70px"], ["squiggle", "top:110px;right:100px;width:230px"]],
  [["heart", "top:96px;right:110px;width:80px;transform:rotate(12deg)"], ["sparkle", "top:190px;right:230px;width:40px"]],
  [["drop", "top:90px;left:96px;width:54px"], ["ring", "top:60px;left:150px;width:150px"]],
  [["squiggle", "top:100px;left:90px;width:200px;transform:rotate(-6deg)"], ["sparkle", "top:86px;right:120px;width:56px"]],
];
const NO_DECOR = ["cta", "foto-penuh", "chat", "resep", "cerita", "banding", "kutipan"];

function decor(type, i) {
  if (NO_DECOR.includes(type)) return "";
  const [c1, c2] = PALET[type] || PALET.default;
  return SPOTS[i % SPOTS.length]
    .map(([k, css], j) => `<div class="doodle" style="${css}">${DOODLE[k](j ? c2 : c1)}</div>`).join("");
}

function avatar() {
  return CONFIG.fotoProfil
    ? `<div class="ava"><img src="${esc(CONFIG.fotoProfil)}" alt="" onerror="this.outerHTML='${esc(CONFIG.inisial)}'"></div>`
    : `<div class="ava">${esc(CONFIG.inisial)}</div>`;
}

function foot(s, i, n) {
  const light = DARK.includes(s.type);
  const col = light ? C.krem : C.plum;
  const right = i === 0 ? `<div class="swipe">geser ${ICON.arrow(col)}</div>` : `<div class="count">${pad(i + 1)}/${pad(n)}</div>`;
  return `<div class="foot ${light ? "light" : ""}"><div class="who">${avatar()}<span>${esc(CONFIG.handle)}${CONFIG.label ? ` <b class="sep">||</b> ${esc(CONFIG.label)}` : ""}</span></div>${right}</div>`;
}

/* ---------- template tiap jenis slide ---------- */
const T = {
  hook: s => `
    <div class="blob" style="width:760px;height:760px;background:#CF5A9E;top:-240px;right:-260px"></div>
    <div class="blob" style="width:300px;height:300px;background:#A93479;top:300px;left:-120px"></div>
    ${hasMedia(s) ? `<div class="hook-foto">${media(s)}</div>` : ""}
    <div class="kicker">${esc(s.kicker)}</div>
    <h1 class="title">${fmt(s.title)}</h1>
    ${s.sub ? `<p class="sub">${fmt(s.sub)}</p>` : ""}`,

  "foto-penuh": s => `
    <div class="bg">${media(s)}</div><div class="shade"></div>
    <div class="txt">
      ${s.kicker ? `<div class="kicker">${esc(s.kicker)}</div>` : ""}
      <h1 class="title">${fmt(s.title)}</h1>
      ${s.sub ? `<p class="sub">${fmt(s.sub)}</p>` : ""}
    </div>`,

  "foto-kartu": s => `
    <div class="polaroid"><div class="tape"></div>
      <div class="pic">${media(s)}</div>
      ${s.caption ? `<div class="cap">${esc(s.caption)}</div>` : ""}
    </div>
    <h1 class="title">${fmt(s.title)}</h1>
    ${s.body ? `<p class="body">${fmt(s.body)}</p>` : ""}`,

  intro: s => `
    <div class="big-ava ${CONFIG.fotoProfil ? "has-foto" : ""}">${CONFIG.fotoProfil ? foto(CONFIG.fotoProfil) : esc(CONFIG.inisial)}</div>
    <h1 class="title">${fmt(s.title)}</h1>
    <p class="tag">${esc(CONFIG.tagline)}</p>
    <p class="body">${fmt(s.body)}</p>`,

  validasi: s => `
    <div class="quote">“</div>
    <h1 class="title">${fmt(s.title)}</h1>
    <p class="body">${fmt(s.body)}</p>`,

  poin: s => `
    ${hasMedia(s) ? `<div class="poin-foto">${media(s)}</div>` : `<div class="num">${esc(s.num)}</div>`}
    ${s.icon ? `<div class="icon">${ICON[s.icon](C.berry)}</div>` : ""}
    <div class="pill">${esc(s.label || "Poin")} ${pad(s.num)}</div>
    <h1 class="title">${fmt(s.title)}</h1>
    <div class="card"><p class="body">${fmt(s.body)}</p></div>`,

  mitos: (s, i) => `
    <h2 class="mf-head">Mitos atau fakta? <em>#${i}</em></h2>
    <div class="mf m"><div class="tag" style="color:${C.berry}">${ICON.x(C.berry)} Mitos</div><p class="txt">${fmt(s.mitos)}</p></div>
    <div class="mf f"><div class="tag">${ICON.check(C.kuning)} Fakta</div><p class="txt">${fmt(s.fakta)}</p></div>`,

  checklist: s => `
    <h1 class="title">${fmt(s.title)}</h1>
    <ul class="checks ${s.cross ? "cross" : ""}">
      ${s.items.map(t => `<li><span class="tick">${(s.cross ? ICON.x : ICON.check)(C.krem)}</span><span class="t">${fmt(t)}</span></li>`).join("")}
    </ul>`,

  peringatan: s => `
    <h1 class="title">${fmt(s.title)}</h1>
    <ul class="alerts">${s.items.map(t => `<li><span class="bang">!</span><span>${fmt(t)}</span></li>`).join("")}</ul>
    <p class="note">${fmt(s.note || "Jangan ragu periksa ke dokter, bidan, atau konselor menyusui.")}</p>`,

  tabel: s => `
    <h1 class="title">${fmt(s.title)}</h1>
    <div class="tbl">${s.rows.map(([a, b]) => `<div class="r"><span>${fmt(a)}</span><b>${fmt(b)}</b></div>`).join("")}</div>`,

  banding: s => {
    const col = c => `<div class="col ${hasMedia(c) ? "" : "no-pic"}">
        ${hasMedia(c) ? `<div class="pic">${media(c)}</div>` : ""}
        <div class="lbl">${esc(c.label)}</div><p>${fmt(c.teks)}</p></div>`;
    return `<h1 class="title">${fmt(s.title)}</h1><div class="duo">${col(s.kiri)}${col(s.kanan)}</div>`;
  },

  chat: s => `
    <div class="chat-top"><div class="dot">${ICON.komen(C.berry)}</div><div>${esc(s.judul || "Pertanyaan dari Mama")}<small>${esc(s.subjudul || "via DM")}</small></div></div>
    <div class="bubbles">${s.pesan.map(p => `<div class="bub ${p.dari === "dokter" ? "a" : "q"}">${fmt(p.teks)}</div>`).join("")}</div>`,

  langkah: s => `
    <h1 class="title">${fmt(s.title)}</h1>
    <ol class="steps">${s.steps.map((st, k) => `<li><span class="n">${k + 1}</span><div class="s"><b>${fmt(st.judul)}</b>${fmt(st.teks)}</div></li>`).join("")}</ol>`,

  kutipan: s => `
    <div class="q">“</div>
    <p class="says">${fmt(s.teks)}</p>
    <div class="by">${s.foto !== undefined ? `<div class="face">${foto(s.foto)}</div>` : ""}
      <div>${esc(s.nama)}<small>${esc(s.info || "")}</small></div></div>`,

  angka: s => `
    <div class="big">${esc(s.angka)}</div>
    <h1 class="title">${fmt(s.title)}</h1>
    ${s.body ? `<p class="body">${fmt(s.body)}</p>` : ""}
    ${s.sumber ? `<p class="src">Sumber: ${esc(s.sumber)}</p>` : ""}`,

  polling: s => {
    const opt = (o, k) => `<div class="opt">${o.foto !== undefined ? `<div class="pic">${foto(o.foto, o.posisiFoto)}</div>` : `<span class="k">${k}</span><br>`}${fmt(o.teks)}</div>`;
    return `<h1 class="title">${fmt(s.title)}</h1>
      <div class="opts">${opt(s.a, "A")}${opt(s.b, "B")}</div>
      <p class="hint">${fmt(s.hint || "Jawab A atau B di komen ya!")}</p>`;
  },

  resep: s => `
    <div class="top">${s.foto !== undefined ? `<div class="pic">${foto(s.foto, s.posisiFoto)}</div>` : ""}
      <div><h1 class="title">${fmt(s.title)}</h1>${s.meta ? `<p class="meta">${esc(s.meta)}</p>` : ""}</div></div>
    <div class="cols">
      <div><h3>Bahan</h3><ul>${s.bahan.map(b => `<li>${fmt(b)}</li>`).join("")}</ul></div>
      <div><h3>Cara</h3><ol>${s.cara.map(b => `<li><span>${fmt(b)}</span></li>`).join("")}</ol></div>
    </div>`,

  cerita: s => `
    <div class="margin"></div>
    ${s.tanggal ? `<div class="tgl">${esc(s.tanggal)}</div>` : ""}
    <p class="story">${fmt(s.teks)}</p>`,

  cta: s => `
    <div class="blob" style="width:520px;height:520px;background:#6A3580;top:-160px;left:-160px"></div>
    <h1 class="title">${fmt(s.title)}</h1>
    ${s.body ? `<p class="body">${fmt(s.body)}</p>` : ""}
    <div class="actions">${(s.actions || ["save", "komen", "share"]).map(a => `<div class="act"><div class="ic">${ICON[a](C.krem)}</div>${a}</div>`).join("")}</div>
    <div class="follow-pill">Follow ${esc(CONFIG.handle)}</div>`,
};

/* ---------- render ---------- */
function renderSlide(s, i, n, c = {}) {
  const tpl = T[s.type];
  if (!tpl) return `<div class="slide"><h1 class="title">Jenis slide "${esc(s.type)}" belum ada</h1></div>`;
  const noBridge = ["foto-penuh", "chat", "resep", "cerita", "langkah", "banding"].includes(s.type);
  const bridge = noBridge ? "" : (i > 0 ? `<div class="bridge l"></div>` : "") + (i < n - 1 ? `<div class="bridge r"></div>` : "");
  const sticker = s.stiker ? `<div class="sticker" style="top:100px;right:90px">${esc(s.stiker)}</div>` : "";
  const extra = s.type === "banding" && !hasMedia(s.kiri) && !hasMedia(s.kanan) ? " tanpa-foto" : "";
  const gerak = s.gerak ?? c.gerak ?? false;
  const bergerak = gerak || !!s.video;          // slide ini diekspor jadi MP4
  const durasi = s.durasi || (s.video ? 0 : 5); // 0 = ikuti panjang video (maks 15 dtk)
  const data = bergerak ? ` data-durasi="${durasi}"` : "";
  return `<div class="slide t-${s.type}${extra}${gerak ? " gerak" : ""}"${data}>${bridge}${decor(s.type, i)}${tpl(s, i)}${sticker}${foot(s, i, n)}</div>`;
}

function render() {
  const only = new URLSearchParams(location.search).get("only");
  document.getElementById("app").innerHTML = CAROUSELS.filter(c => !only || c.id === only).map(c => `
    <section class="set" data-id="${c.id}">
      <div class="set-head"><h2>${esc(c.judul)}</h2>
        ${c.format ? `<span class="fmt">${esc(c.format)}</span>` : ""}
        <button class="btn" data-dl="${c.id}">Download PNG</button>
        ${c.gerak || c.slides.some(s => s.gerak || s.video) ? `<button class="btn ghost" data-replay="${c.id}">Putar ulang animasi</button>` : ""}</div>
      <div class="row">${c.slides.map((s, i) => `<div class="frame">${renderSlide(s, i, c.slides.length, c)}</div>`).join("")}</div>
    </section>`).join("");
}

/* ---------- download PNG di browser ---------- */
async function downloadSet(id, btn) {
  if (!window.htmlToImage) { alert("Library download belum termuat. Cek internet, atau pakai export.mjs."); return; }
  btn.disabled = true;
  const slides = document.querySelectorAll(`.set[data-id="${id}"] .slide`);
  try {
    for (let i = 0; i < slides.length; i++) {
      btn.textContent = `Menyimpan ${i + 1}/${slides.length}…`;
      const url = await htmlToImage.toPng(slides[i], { width: 1080, height: 1350, pixelRatio: 1, style: { transform: "none" } });
      const a = document.createElement("a"); a.href = url; a.download = `${id}-slide-${pad(i + 1)}.png`; a.click();
      await new Promise(r => setTimeout(r, 350));
    }
  } catch (e) {
    alert("Gagal menyimpan (biasanya karena foto dibuka langsung dari file). Pakai export.mjs, lihat README.");
  }
  btn.textContent = "Download PNG"; btn.disabled = false;
}

if (new URLSearchParams(location.search).has("export")) document.body.classList.add("export");
render();
document.addEventListener("click", e => {
  const b = e.target.closest("[data-dl]"); if (b) downloadSet(b.dataset.dl, b);
  const r = e.target.closest("[data-replay]");
  if (r) document.querySelector(`.set[data-id="${r.dataset.replay}"]`).getAnimations({ subtree: true })
    .forEach(a => { a.cancel(); a.play(); });
});
