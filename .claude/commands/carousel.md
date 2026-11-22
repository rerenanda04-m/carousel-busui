---
description: Buat carousel IG baru — tanya bentuk (teks, foto, B-roll, gerak) lalu tulis slidenya
argument-hint: "[topik carousel]"
---

Pemilik ingin membuat carousel Instagram baru. Topik: **$ARGUMENTS**

Ikuti langkah ini. Balas dalam bahasa Indonesia yang singkat (ia membaca dari HP).

## 1. Tanyakan pilihan (sekali jalan)
Kalau topik kosong, tanyakan topiknya dulu.
Lalu kirim **satu pesan** berisi pertanyaan bernomor di bawah (pilihannya lebih dari 4, jadi jangan pakai AskUserQuestion). Ia cukup membalas misalnya "3, A, B, C, B". Kalau topiknya jelas cocok dengan satu tipe, tandai tipe itu sebagai saran.

1. **Tipe konten** (pola carousel yang lagi viral)
   1. Vlog / photo dump: cerita keseharian lewat foto (butuh foto)
   2. Step-by-step: satu topik dipecah jadi langkah jelas, seperti panduan mini
   3. Kompilasi: kumpulan ide/jawaban/daftar yang langsung bisa dipakai
   4. Video carousel: hook kuat lalu klip video di dalam carousel (butuh video)
   5. Opini pribadi: pendapat, kebiasaan, atau cerita pengalaman dr. Reni
   6. Repurpose reels: ubah reels/Geng Busui yang sudah ramai jadi carousel
2. **Bentuk tampilan**
   - A. Tulisan saja (PNG, paling cepat)
   - B. Tulisan + foto (PNG, butuh foto di `img/`)
   - C. Ada B-roll video (MP4, butuh klip di `video/`)
   - D. Bergerak/animasi (MP4)
   - E. Campuran
3. **Tujuan utama**: A. Disimpan · B. Dikomentari · C. Dibagikan · D. Follower baru
4. **Untuk Mama di fase**: A. Hamil · B. 0–6 minggu · C. Kembali kerja/pumping · D. MPASI/menyapih · E. Umum
5. **Tema desain**: A. Berry (default, rapi & cerah) · B. Scrapbook (kertas sobek, tulisan tangan, ala konten viral)

Panjang carousel ditentukan dari tipe (biasanya 6–10 slide).

### Resep tiap tipe konten
| Tipe | Susunan slide yang disarankan | Catatan |
| --- | --- | --- |
| Vlog | `foto-penuh` (hook) → 3–5 `kolase`/`foto-kartu` berlabel jam/aktivitas → `cerita` → `cta` | Bentuk B/C. Teks singkat, foto yang bercerita. |
| Step-by-step | `hook` → `validasi` → `langkah` atau `poin` per langkah → `checklist` → `cta` (save) | Judul bergaya "Cara … dalam N langkah". |
| Kompilasi | `hook` "N … yang bisa langsung dipakai" → beberapa butir per slide (`chat`, `checklist`, `tabel`, `poin`) → `peringatan` bila perlu → `cta` dengan `kataKunci` | Paling kuat untuk save & share. Contoh: carousel `11-jawaban-asi-kurang`. |
| Video carousel | `foto-penuh`/`hook` dengan `video` → selingi 2–4 slide `video` dengan slide teks → `cta` | Bentuk C. Klip ≤ 15 detik. |
| Opini | `hook` berupa pernyataan berani tapi aman secara medis → `cerita`/`kutipan` → `poin` alasan → `polling` → `cta` (komen) | Pakai suara pribadi dr. Reni ("aku"). |
| Repurpose | Minta judul/naskah/poin reels-nya (atau link) → pecah jadi `mitos`/`poin`/`langkah` → hook menyebut reelsnya ("Lanjutan Geng Busui Ep. …") | Utamakan reels dengan view tertinggi. |

Gaya viral yang bisa dipakai di semua tipe: `==stabilo==` untuk frasa penting, `((lingkari))` untuk satu kata di hook, `stiker` di hook, dan `cta` dengan `kataKunci` (Komen "…" → dikirimi sesuatu lewat DM).

## 2. Siapkan bahan
- Bentuk B/C/E: cek isi `img/` dan `video/`. Sebutkan file yang tersedia. Kalau belum ada, beri tahu cara upload singkat (github.com → repo → folder `img/` atau `video/` → Add file → Upload files) dan tawarkan lanjut dengan kotak placeholder dulu.
- Tawarkan **3 pilihan hook** (judul slide pertama) yang berbeda gaya: pertanyaan, mitos/fakta, angka/daftar. Minta ia memilih (atau "terserah"), lalu lanjut.

## 3. Tulis carousel
- Tambahkan carousel baru di **akhir** `CAROUSELS` di `content.js` dengan `id` bernomor urut berikutnya (lihat id terakhir), `judul`, `format` (`teks`/`foto`/`broll`/`gerak`/`campuran`), dan `tipe` (`vlog`/`step-by-step`/`kompilasi`/`video`/`opini`/`repurpose`).
- Ikuti resep tipe konten di atas.
- Tema B → `tema: "scrapbook"` di level carousel. Untuk hook scrapbook, boleh pakai `{{KATA}}` (huruf potongan koran) untuk 1–2 kata saja.
- **Wajib tulis caption** di carousel itu: `caption` (hook 1 kalimat + emoji secukupnya, 1–2 kalimat isi, ajakan save/share, pertanyaan pancingan komen; pakai `\n\n` antar paragraf) dan `hashtag` (5–8 hashtag, campur umum & spesifik topik). Caption ini tampil di galeri dengan tombol salin.
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
Ringkas balasan akhir: judul carousel, tipe, bentuk & tema, jumlah slide, link galeri, dan caption lengkap (juga tampil di galeri).
Kalau memakai `kataKunci`, ingatkan pemilik: ia harus benar-benar mengirim yang dijanjikan ke DM setiap orang yang berkomentar (manual atau pakai alat auto-DM).
