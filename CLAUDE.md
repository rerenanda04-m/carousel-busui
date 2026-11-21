# Proyek: carousel Instagram dr. Reni (Konselor Menyusui)

Pemilik proyek adalah dokter umum & konselor menyusui. Ia bekerja dari **HP atau Claude Code versi web**, bukan programmer.
- Selalu balas dalam **bahasa Indonesia** yang santai, singkat, dan mudah dibaca di layar HP.
- **Jangan pernah** menyuruhnya menjalankan perintah terminal. Semua perintah kamu jalankan sendiri.
- Jangan tampilkan potongan kode panjang di chat kecuali ia minta. Ceritakan hasilnya, bukan prosesnya.

## Struktur
| File | Isi |
| --- | --- |
| `content.js` | `CONFIG` (handle, label, foto profil) + `CAROUSELS` (semua teks slide). **Hampir semua pekerjaan di sini.** |
| `app.js` | Template tiap jenis slide (`T`), ikon, animasi, render |
| `styles.css` | Palet, font, gaya tiap jenis slide, animasi (`.slide.gerak`) |
| `img/`, `video/` | Foto & klip B-roll yang diunggah pemilik |
| `export.mjs` | Ekspor: slide diam → PNG, slide bergerak/video → MP4 (butuh ffmpeg) |
| `build-galeri.mjs` | Membuat `output/index.html` (galeri hasil) |
| `.github/workflows/render.yml` | Setiap push: ekspor otomatis & terbit ke GitHub Pages |

Daftar jenis slide, field-nya, dan contohnya: lihat komentar di atas `content.js`, carousel `06-katalog`, `08-contoh-gerak-broll`, dan `README.md`.

## Gaya brand (jangan diubah tanpa diminta)
- Palet Berry Busui: plum `#5B2A6E`, berry `#C2408F`, kuning `#FFD45C`, pink `#F9DCEA`, krem `#FFF7EF`.
- Font: Josefin Sans (judul), Dancing Script (kata kunci `*kata*`), Quicksand (isi).
- Ukuran 1080×1350. Footer: `@reni_prativi || Konselor Menyusui`.

## Aturan menulis isi slide
- Sapa audiens "Mama". Nada hangat, happy, edukatif, tidak menakut-nakuti, tidak menghakimi.
- Judul ≤ 8 kata, isi ≤ 25 kata per slide. Satu ide per slide. Satu kata kunci per judul diberi `*bintang*`.
- Struktur default: hook → validasi → isi → ringkasan/checklist → CTA (satu ajakan utama + follow).
- **Akurasi medis wajib.** Jangan klaim makanan/jamu/suplemen "ajaib" penambah ASI. Kalau menyebut angka klinis (frekuensi menyusu, penyimpanan ASIP, dll.), pakai rujukan umum (WHO/IDAI/Kemenkes/ABM) dan sebutkan ke pemilik angka mana yang perlu ia cek.
- Sertakan slide `peringatan` (kapan ke tenaga kesehatan) bila topiknya menyangkut gejala.

## Tipe konten viral
Enam pola yang sedang ramai: vlog/photo dump, step-by-step, kompilasi, video carousel, opini pribadi, repurpose reels. Resep susunan slidenya ada di `.claude/commands/carousel.md`.
Gaya visual pendukung: `==stabilo==`, `((lingkari))`, `stiker`, jenis slide `kolase`, dan `cta` dengan `kataKunci` (Komen "…"). Janji di `kataKunci` harus sesuatu yang benar-benar bisa dikirim pemilik lewat DM.

## Alur membuat carousel baru
Gunakan perintah `/carousel` (lihat `.claude/commands/carousel.md`). Selalu **tanyakan bentuk carousel dulu** sebelum menulis.

## Setelah mengedit
1. Cek sintaks: `node -e "require('vm').runInNewContext(require('fs').readFileSync('content.js','utf8'))"`.
2. Kalau bisa, coba `npm install && npx playwright install chromium && node export.mjs <id>` lalu **lihat PNG-nya** untuk memastikan teks tidak kepanjangan/tumpang tindih. Kalau instalasi gagal (jaringan dibatasi), lewati, karena GitHub Actions akan mengekspor.
3. Commit dengan pesan bahasa Indonesia yang jelas, lalu **push** (ke `main` kalau diizinkan; kalau tidak, ke branch sesi — workflow tetap berjalan untuk semua branch).
4. Beri tahu pemilik: hasil siap ±3–5 menit lagi di galeri. Link galeri: `https://<owner>.github.io/<repo>/` — ambil `<owner>/<repo>` dari `git remote get-url origin`.
5. Tutup dengan saran caption singkat (2–4 kalimat + pertanyaan pancingan komen) dan 5–8 hashtag relevan.

## Foto & video
- Pemilik mengunggah file lewat GitHub (folder `img/` atau `video/`). Kalau ia bilang sudah upload, jalankan `git pull` lalu cek nama filenya.
- Kalau file belum ada, tetap boleh dibuat: slide menampilkan kotak "Taruh foto/video di sini".
- Video B-roll: MP4/MOV pendek (≤ 15 detik, ≤ 25 MB). Atur `durasi` bila perlu. Slide video tidak bisa diunduh lewat tombol PNG di pratinjau; hasilnya MP4 dari ekspor.
