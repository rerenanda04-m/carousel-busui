# Carousel IG — Konselor Menyusui

Carousel Instagram ukuran 1080×1350 (4:5) dengan palet **Berry Busui**:

| Warna | Hex | Dipakai untuk |
| --- | --- | --- |
| Plum tua | `#5B2A6E` | Teks isi, garis tepi, latar CTA |
| Berry | `#C2408F` | Judul, latar hook |
| Kuning cerah | `#FFD45C` | Aksen, stiker, kata kunci |
| Pink lembut | `#F9DCEA` | Latar slide edukasi |
| Krem | `#FFF7EF` | Kartu teks, latar foto |

Font: Josefin Sans (judul), Dancing Script (kata kunci), Quicksand (isi).
Footer: `@reni_prativi || Konselor Menyusui` (atur di `CONFIG` dalam `content.js`).

> **Mau pakai dari HP / web tanpa laptop?** Baca **`PANDUAN-HP.md`**. Setelah siap, cukup ketik `/carousel topik` di Claude Code.

## Bentuk carousel

| Bentuk | Isi di `content.js` | Hasil |
| --- | --- | --- |
| Tulisan saja | `format: "teks"` | PNG |
| Tulisan + foto | `format: "foto"` + `foto: "img/…"` | PNG |
| B-roll video | `format: "broll"` + `video: "video/…mp4"` | MP4 untuk slide video, PNG sisanya |
| Bergerak/animasi | `format: "gerak"` + `gerak: true` | MP4 |
| Campuran | `format: "campuran"`, atur `gerak` / `video` per slide | PNG + MP4 |

Contoh B-roll & animasi: carousel **#8**.

## Isi folder

| File | Fungsi |
| --- | --- |
| `index.html` | Buka di browser untuk melihat semua slide |
| `content.js` | **Semua teks & nama foto ada di sini.** File yang paling sering diedit |
| `img/` | Tempat menyimpan foto |
| `styles.css` | Warna, font, ukuran, gaya tiap jenis slide |
| `app.js` | Mesin yang mengubah teks jadi slide |
| `video/` | Tempat klip B-roll |
| `export.mjs` | Ekspor: slide diam → PNG, slide bergerak/video → MP4 (folder `output/`) |
| `build-galeri.mjs` | Membuat halaman galeri hasil ekspor |
| `CLAUDE.md`, `.claude/commands/carousel.md` | Instruksi untuk Claude Code & perintah `/carousel` |
| `.github/workflows/render.yml` | Ekspor otomatis + galeri online setiap ada perubahan |
| `PANDUAN-HP.md` | Langkah pakai dari HP / web |

## Jenis slide

Contoh lengkap semua jenis ada di carousel **#6 Katalog**.

| type | Cocok untuk | Bisa pakai foto? |
| --- | --- | --- |
| `hook` | Slide pertama, judul besar | Ya (bingkai lengkung) |
| `foto-penuh` | Hook personal, foto memenuhi slide | Ya (wajib) |
| `foto-kartu` | Cerita, behind the scene (polaroid) | Ya (wajib) |
| `intro` | Perkenalan diri | Ya (lewat `fotoProfil`) |
| `validasi` | "Wajar kok, Ma…" | — |
| `poin` | Satu poin per slide | Ya (menggantikan angka besar) |
| `mitos` | Mitos vs fakta | — |
| `checklist` | Ringkasan yang di-save | — |
| `peringatan` | Kapan harus ke tenaga kesehatan | — |
| `tabel` | Data singkat 2 kolom | — |
| `banding` | Ekspektasi vs realita, sebelum-sesudah, A vs B | Ya (tiap kolom) |
| `chat` | Tanya-jawab ala DM | — |
| `langkah` | Beberapa langkah dalam satu slide | — |
| `kutipan` | Testimoni / kutipan | Ya (foto wajah kecil) |
| `angka` | Satu angka/statistik besar | — |
| `polling` | "Tim A atau tim B?" pancing komen | Ya (tiap pilihan) |
| `resep` | Konten masak | Ya (foto bulat) |
| `cerita` | Curhat / storytelling ala diary | — |
| `cta` | Slide terakhir: save, komen, share, follow | — |

Tambahan untuk slide apa saja: `stiker: "kata dokter"` → stiker kuning miring di pojok kanan atas.

## Menambahkan foto

1. Simpan foto di folder `img/` (JPG/PNG, sebaiknya minimal 1080 px di sisi terpendek).
2. Di `content.js` tulis `foto: "img/namafile.jpg"` pada slide yang diinginkan.
3. Kalau bagian penting foto terpotong, tambahkan `posisiFoto: "center top"` (atau `"left center"`, `"30% 20%"`, dst.).
4. Kalau nama file salah atau foto belum ada, slide menampilkan kotak bergaris "Taruh foto di sini", jadi kamu tahu mana yang belum diisi.
5. Untuk foto profil di avatar, isi `fotoProfil: "img/profil.jpg"` di `CONFIG`.

## Menyimpan jadi PNG

- **Tanpa foto:** buka `index.html`, lalu klik **Download PNG**.
- **Dengan foto, video, atau animasi:** minta Claude Code menjalankan (atau otomatis lewat GitHub, lihat `PANDUAN-HP.md`):
  `npm install && npx playwright install chromium && node export.mjs` (MP4 butuh ffmpeg)
  Hasilnya ada di `output/`. Satu carousel saja: `node export.mjs 07-ekspektasi-realita`
  (Tombol download di browser kadang gagal membaca foto kalau `index.html` dibuka langsung dari file.)

## Contoh perintah untuk Claude Code

- "Ganti handle di CONFIG jadi @namaakunku dan pakai img/profil.jpg sebagai foto profil."
- "Buat carousel #8 tentang posisi menyusui, 8 slide: hook foto-penuh pakai img/posisi.jpg, lalu 4 slide poin, 1 langkah, 1 checklist, 1 cta."
- "Buat carousel tanya-jawab dari 3 pertanyaan DM ini: … pakai jenis slide chat."
- "Ubah carousel #5 jadi pakai jenis resep untuk tiap camilan, fotonya img/oat.jpg, img/telur.jpg, img/yogurt.jpg."
- "Di carousel #7, tambahkan foto img/ekspektasi.jpg dan img/realita.jpg ke slide banding pertama."
- "Tambah stiker 'kata dokter' di semua slide hook."
- "Buat jenis slide baru 'timeline usia bayi' (0–6 bulan) dengan gaya yang sama."
- "Ekspor carousel #2 jadi PNG, lalu tunjukkan hasilnya."

Tips: jalankan Claude Code di dalam folder ini. Setelah mengedit, minta ia menjalankan `export.mjs` dan melihat PNG-nya, supaya teks yang terlalu panjang atau tumpang tindih langsung ketahuan.
