---
description: Buat carousel IG baru — tanya bentuk (teks, foto, B-roll, gerak) lalu tulis slidenya
argument-hint: "[topik carousel]"
---

Pemilik ingin membuat carousel Instagram baru. Topik: **$ARGUMENTS**

Ikuti langkah ini. Balas dalam bahasa Indonesia yang singkat (ia membaca dari HP).

## 1. Tanyakan pilihan (sekali jalan)
Kalau topik kosong, tanyakan topiknya dulu.
Lalu tanyakan pertanyaan berikut **sekaligus**. Pakai tool AskUserQuestion kalau tersedia (pilihan bisa diketuk); kalau tidak ada, tulis sebagai daftar bernomor supaya ia cukup membalas misalnya "1B, 2A, 3C, 4B".

1. **Bentuk carousel**
   - A. Tulisan saja — slide desain teks, hasil PNG (paling cepat)
   - B. Tulisan + foto — butuh foto di folder `img/`, hasil PNG
   - C. Ada B-roll video — klip video jadi latar slide tertentu, hasil MP4
   - D. Bergerak/animasi — teks & hiasan muncul bergerak, hasil MP4
   - E. Campuran — misalnya hook B-roll, isi tulisan, CTA bergerak
2. **Tujuan utama**: A. Disimpan (save) · B. Dikomentari · C. Dibagikan (share) · D. Dapat follower baru
3. **Untuk Mama di fase**: A. Hamil · B. 0–6 minggu · C. Kembali kerja/pumping · D. MPASI/menyapih · E. Umum
4. **Panjang**: A. Pendek 5–6 slide · B. Sedang 7–8 · C. Lengkap 9–10

## 2. Siapkan bahan
- Bentuk B/C/E: cek isi `img/` dan `video/`. Sebutkan file yang tersedia. Kalau belum ada, beri tahu cara upload singkat (github.com → repo → folder `img/` atau `video/` → Add file → Upload files) dan tawarkan lanjut dengan kotak placeholder dulu.
- Tawarkan **3 pilihan hook** (judul slide pertama) yang berbeda gaya: pertanyaan, mitos/fakta, angka/daftar. Minta ia memilih (atau "terserah"), lalu lanjut.

## 3. Tulis carousel
- Tambahkan carousel baru di **akhir** `CAROUSELS` di `content.js` dengan `id` bernomor urut berikutnya (mis. `09-posisi-menyusui`), `judul`, `format` (`teks`/`foto`/`broll`/`gerak`/`campuran`).
- Pemetaan bentuk:
  - A → jenis slide teks saja (`hook`, `validasi`, `poin`, `mitos`, `checklist`, `langkah`, `chat`, `angka`, `polling`, `cta`, dll.).
  - B → sertakan `foto-penuh`/`hook` dengan `foto`, `foto-kartu`, `poin` dengan `foto`, `banding` dengan foto.
  - C → minimal hook memakai `video` (jenis `foto-penuh` atau `hook`); slide lain boleh teks.
  - D → `gerak: true` di level carousel.
  - E → campurkan sesuai pilihan; `gerak` bisa per slide.
- Variasikan jenis slide supaya tidak membosankan (jangan lebih dari 3 slide berturut-turut berjenis sama).
- Ikuti aturan menulis & akurasi medis di `CLAUDE.md`.

## 4. Selesaikan
Ikuti bagian "Setelah mengedit" di `CLAUDE.md` (cek, ekspor bila bisa, commit, push, kirim link galeri, caption + hashtag).
Ringkas balasan akhir: judul carousel, jumlah slide & bentuknya, link galeri, caption.
