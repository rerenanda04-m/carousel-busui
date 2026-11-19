# Panduan: bikin carousel dari HP / web pakai Claude Code

Alurnya: **kamu chat di Claude Code → Claude menulis slide → GitHub otomatis membuat PNG/MP4 → kamu simpan dari halaman galeri di HP → upload ke IG.**
Tidak perlu laptop, tidak perlu terminal.

---

## A. Persiapan (sekali saja, ±15 menit)

> Lebih nyaman dilakukan dari laptop/browser, tapi bisa juga dari HP.

1. **Buat akun GitHub** di github.com (gratis).
2. **Buat repository baru**: tombol **+** → *New repository*
   - Nama: `carousel-busui`
   - Pilih **Public** (halaman galeri gratis hanya untuk repo publik; foto yang diunggah ke repo ikut terlihat publik, jadi unggah foto yang memang siap tayang).
   - Klik *Create repository*.
3. **Masukkan file proyek** — pilih salah satu:
   - **Paling gampang:** sambungkan GitHub ke Claude, lalu bilang ke Claude di chat: *"repo carousel-busui sudah dibuat, tolong upload kodenya."* Claude yang mengunggah semuanya.
   - **Manual (laptop):** ekstrak ZIP, buka repo di github.com → *uploading an existing file* → seret **semua isi** folder `carousel-busui` (termasuk folder `.github` dan `.claude`) → *Commit changes*.
4. **Nyalakan halaman galeri**: repo → **Settings** → **Pages** → bagian *Source* pilih **GitHub Actions**.
5. **Izinkan galeri diperbarui dari branch mana pun**: **Settings** → **Environments** → **github-pages** → *Deployment branches and tags* → pilih **No restriction** → simpan.
   (Ini perlu karena Claude Code di web sering bekerja di branch sendiri.)
6. **Sambungkan Claude Code**: buka **claude.ai/code** di browser HP/laptop (atau menu *Code* di aplikasi Claude), hubungkan akun GitHub, lalu pilih repo `carousel-busui`.

Link galeri kamu nanti: `https://NAMA-GITHUB-KAMU.github.io/carousel-busui/` — simpan di bookmark / layar utama HP.

---

## B. Setiap mau bikin carousel

1. Buka **claude.ai/code** → pilih repo `carousel-busui`.
2. Ketik, misalnya:
   ```
   /carousel posisi menyusui untuk mama baru
   ```
3. Claude akan menanyakan:
   - **Bentuk carousel**: tulisan saja · tulisan + foto · ada B-roll video · bergerak/animasi · campuran
   - Tujuan (save / komen / share / follow), fase Mama, dan panjang carousel
   - Pilihan 3 hook → pilih yang paling kamu suka
4. Claude menulis slidenya dan mengirim (push) ke GitHub.
5. Tunggu **±3–5 menit** (carousel bergerak/video bisa lebih lama), lalu buka **link galeri**.
6. Di galeri: tekan lama gambar → *Simpan*, atau ketuk **Unduh semua (ZIP)**. Video `.mp4` tinggal disimpan juga.
7. Upload ke IG sebagai carousel. Gambar & video boleh dicampur dalam satu post.

Contoh permintaan lain (tidak harus pakai `/carousel`):
- "Di carousel #9, slide 3 judulnya ganti jadi …"
- "Carousel #2 dibuat bergerak ya"
- "Tambah slide polling di akhir carousel #7"

---

## C. Menambah foto atau video B-roll dari HP

1. Buka repo di **github.com** (browser HP) → masuk folder **`img`** (foto) atau **`video`** (klip B-roll).
2. **Add file** → **Upload files** → pilih dari galeri HP → **Commit changes**.
   - Nama file sebaiknya tanpa spasi, misalnya `pumping-pagi.jpg`.
   - Video: pendek (≤ 15 detik) dan **maksimal 25 MB** per file.
3. Di Claude Code, bilang: *"Aku sudah upload img/pumping-pagi.jpg, pakai untuk hook carousel #9."*

---

## D. Kalau ada masalah

| Masalah | Solusi |
| --- | --- |
| Galeri belum berubah | Tunggu beberapa menit lalu refresh. Cek tab **Actions** di repo: tanda ✓ hijau = selesai, ✗ merah = gagal. |
| Tanda ✗ merah di Actions | Bilang ke Claude Code: *"Workflow render gagal, tolong cek dan perbaiki."* |
| Slide ada kotak bergaris "Taruh foto di sini" | Nama file salah atau foto belum diunggah. Cek nama file di folder `img/`. |
| Teks kepanjangan / tumpang tindih | Bilang ke Claude: *"Slide 4 carousel #9 teksnya kepanjangan, ringkas ya."* |
