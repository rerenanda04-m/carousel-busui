/* =========================================================
   ISI CAROUSEL — edit teks di file ini saja.
   ---------------------------------------------------------
   Tips menulis:
   - Bungkus 1 kata kunci dengan *bintang* → jadi tulisan
     sambung warna terakota (font Dancing Script).
   - Pakai \n untuk pindah baris.
   - Jenis slide (type) yang tersedia — lihat contoh
     lengkapnya di carousel "#6 Katalog":
       hook, foto-penuh, foto-kartu, intro, validasi, poin,
       mitos, checklist, peringatan, tabel, banding, chat,
       langkah, kutipan, angka, polling, resep, cerita, cta
   - FOTO: simpan file di folder img/, lalu tulis
       foto: "img/namafile.jpg"
     Kalau file belum ada, slide menampilkan kotak
     "Taruh foto di sini". posisiFoto: "center top" dst.
     untuk mengatur bagian foto yang terlihat.
   - stiker: "teks" → stiker kuning miring di pojok kanan atas.
   - FORMAT carousel (isi di level carousel, di samping judul):
       format: "teks"     → slide desain teks, hasil PNG
       format: "foto"     → teks + foto dari folder img/, hasil PNG
       format: "broll"    → ada slide video (folder video/), hasil MP4
       format: "gerak"    → teks & hiasan bergerak, hasil MP4
       format: "campuran" → bebas dicampur per slide
     gerak: true  → semua slide di carousel itu dianimasikan
                    (bisa juga per slide: gerak: true / false)
     video: "video/klip.mp4" → B-roll sebagai latar (dipakai di
                    hook, foto-penuh, foto-kartu, poin, banding)
     durasi: 6    → lama slide bergerak/video dalam detik
   ========================================================= */

const CONFIG = {
  nama: "dr. Reni",
  handle: "@dr.reni",              // username IG (dipakai di tombol Follow)
  label: "Konselor Menyusui",      // tampil di footer: @dr.reni || Konselor Menyusui
  tagline: "Dokter & Konselor Menyusui",
  inisial: "R",                    // huruf di lingkaran avatar
  fotoProfil: "",                  // isi "img/profil.jpg" untuk pakai foto
};

const CAROUSELS = [
  /* ---------------------------------------------------- #1 */
  {
    id: "01-kenalan-fase",
    judul: "#1 Kenalan: Mama di fase mana?",
    format: "teks",
    slides: [
      { type: "hook",
        kicker: "Absen dulu, Ma",
        title: "Mama sekarang di fase *menyusui* yang mana?",
        sub: "Pilih nomornya, tulis di komen" },
      { type: "intro",
        title: "Halo, aku *dr. Reni*",
        body: "Dokter umum & konselor menyusui. Di sini kita belajar menyusui yang tenang, happy, dan tanpa drama." },
      { type: "poin", num: "1", label: "Fase",
        title: "Lagi *hamil*",
        body: "Deg-degan mau menyusui, bingung harus siap-siap apa." },
      { type: "poin", num: "2", label: "Fase",
        title: "Baru *melahirkan*",
        body: "Begadang tiap malam dan sering ragu: ASI-ku cukup nggak, ya?" },
      { type: "poin", num: "3", label: "Fase",
        title: "Kembali *kerja*",
        body: "Sibuk pumping, mikirin stok ASIP dan jadwal perah di kantor." },
      { type: "poin", num: "4", label: "Fase",
        title: "Sudah *MPASI*",
        body: "Menyusui sambil MPASI, mulai kepikiran soal menyapih." },
      { type: "validasi",
        title: "Tiap fase punya tantangan *beda*",
        body: "Dan semuanya bakal aku bahas pelan-pelan di sini." },
      { type: "cta",
        title: "Tulis *angka* fasemu di komen",
        body: "Konten berikutnya aku buat sesuai fase yang paling banyak dipilih.",
        actions: ["komen", "follow"] },
    ],
  },

  /* ---------------------------------------------------- #2 */
  {
    id: "02-tanda-cukup-asi",
    judul: "#2 5 tanda bayi cukup ASI",
    format: "teks",
    slides: [
      { type: "hook",
        kicker: "Simpan dulu ya, Ma",
        title: "Takut ASI kurang? Cek *5 tanda* ini dulu",
        sub: "sebelum panik" },
      { type: "validasi",
        title: "Wajar kok *ragu*",
        body: "Kita memang nggak bisa lihat berapa ml ASI yang masuk ke perut bayi." },
      { type: "poin", num: "1", label: "Tanda",
        title: "Popok *basah*",
        body: "Minimal 6 popok basah sehari setelah hari ke-5, urinenya jernih atau kuning muda." },
      { type: "poin", num: "2", label: "Tanda",
        title: "BAB *rutin*",
        body: "Warnanya berubah jadi kuning di minggu pertama." },
      { type: "poin", num: "3", label: "Tanda",
        title: "Berat *naik*",
        body: "Kembali ke berat lahir sekitar usia 10–14 hari, lalu terus naik." },
      { type: "poin", num: "4", label: "Tanda",
        title: "Sering *menyusu*",
        body: "8–12 kali per 24 jam, terdengar atau terlihat menelan." },
      { type: "poin", num: "5", label: "Tanda",
        title: "Bayi *puas*",
        body: "Setelah menyusu bayi tampak tenang, payudara terasa lebih lembek." },
      { type: "checklist",
        title: "Ringkasnya, *cek ini*",
        items: ["6+ popok basah per hari", "BAB kuning & rutin", "Berat badan naik",
                "Menyusu 8–12x sehari", "Bayi tampak puas"] },
      { type: "peringatan",
        title: "Kapan ke *tenaga kesehatan*?",
        items: ["Popok basah sedikit", "Bayi lemas atau makin kuning", "Berat badan tidak naik"] },
      { type: "cta",
        title: "*Save* & kirim ke teman yang baru lahiran",
        body: "Biar dia nggak panik sendirian jam 2 pagi.",
        actions: ["save", "share"] },
    ],
  },

  /* ---------------------------------------------------- #3 */
  {
    id: "03-mitos-fakta",
    judul: "#3 Mitos vs fakta dari mertua",
    format: "teks",
    slides: [
      { type: "hook",
        kicker: "Mitos vs fakta",
        title: "“Payudara kecil, ASI-nya *sedikit*”",
        sub: "Beneran? Yuk cek faktanya" },
      { type: "mitos",
        mitos: "Payudara kecil = ASI sedikit",
        fakta: "Produksi ASI ditentukan seberapa sering payudara dikosongkan, bukan ukurannya." },
      { type: "mitos",
        mitos: "ASI encer = tidak bergizi",
        fakta: "ASI awal memang lebih encer, ASI akhir lebih kental. Dua-duanya penting." },
      { type: "mitos",
        mitos: "Mama flu harus berhenti menyusui",
        fakta: "Tetap menyusui. Antibodi dari ASI justru ikut melindungi bayi." },
      { type: "mitos",
        mitos: "Harus minum susu sapi supaya ASI banyak",
        fakta: "Kuncinya makan bergizi seimbang, cukup minum, dan sering menyusui." },
      { type: "mitos",
        mitos: "Bayi nangis = lapar karena ASI kurang",
        fakta: "Bayi menangis karena banyak hal. Cek dulu tanda cukup ASI." },
      { type: "checklist",
        title: "5 mitos yang *bisa dilepas*",
        cross: true,
        items: ["Ukuran payudara", "ASI encer", "Berhenti saat flu", "Wajib susu sapi", "Nangis = lapar"] },
      { type: "cta",
        title: "Mitos apa yang paling sering *Mama dengar*?",
        body: "Tulis di komen, nanti aku bahas di part 2.",
        actions: ["komen", "share"] },
    ],
  },

  /* ---------------------------------------------------- #4 */
  {
    id: "04-kembali-kerja",
    judul: "#4 Checklist busui kembali kerja",
    format: "teks",
    slides: [
      { type: "hook",
        kicker: "Busui kerja, merapat",
        title: "Simpan ini sebelum hari pertama *kembali kerja*",
        sub: "Checklist dari dokter" },
      { type: "validasi",
        title: "Kembali kerja ≠ *berhenti* menyusui",
        body: "Dengan persiapan yang pas, menyusui tetap bisa lanjut." },
      { type: "poin", num: "1", label: "Langkah",
        title: "Mulai *nabung* ASIP",
        body: "2–4 minggu sebelum masuk kerja, sedikit demi sedikit." },
      { type: "poin", num: "2", label: "Langkah",
        title: "Latih *pengasuh*",
        body: "Kenalkan media pemberian ASIP (cup feeder, sendok, atau dot) 1–2 minggu sebelumnya." },
      { type: "poin", num: "3", label: "Langkah",
        title: "Perah tiap *3 jam*",
        body: "Ikuti kira-kira jadwal menyusu bayi di rumah." },
      { type: "tabel",
        title: "Aturan *simpan* ASIP",
        rows: [["Suhu ruang", "≤ 4 jam"], ["Kulkas", "≤ 4 hari"], ["Freezer", "ideal ≤ 6 bulan"]] },
      { type: "poin", num: "4", label: "Langkah",
        title: "Tanya *ruang laktasi*",
        body: "Ke HRD, karena ini hak busui pekerja." },
      { type: "checklist",
        title: "Isi *tas pumping*",
        items: ["Pompa ASI", "Botol / kantong ASIP", "Cooler bag + ice gel", "Label tanggal", "Apron menyusui"] },
      { type: "cta",
        title: "*Save* & share ke teman kantor",
        body: "Yang sebentar lagi masuk kerja lagi.",
        actions: ["save", "share"] },
    ],
  },

  /* ---------------------------------------------------- #5 */
  {
    id: "05-camilan-busui",
    judul: "#5 3 camilan busui 10 menit",
    format: "teks",
    slides: [
      { type: "hook",
        kicker: "Dapur busui",
        title: "Busui lapar terus? 3 camilan *10 menit*",
        sub: "ala dokter" },
      { type: "validasi",
        title: "Lapar itu *normal*",
        body: "Tubuh butuh energi ekstra untuk memproduksi ASI." },
      { type: "poin", num: "1", label: "Camilan", icon: "bowl",
        title: "Overnight *oat*",
        body: "Oat + pisang + kurma. Siapkan malam, tinggal ambil pagi." },
      { type: "poin", num: "2", label: "Camilan", icon: "egg",
        title: "Telur & *alpukat*",
        body: "Telur rebus + roti gandum + alpukat. Kenyang lama." },
      { type: "poin", num: "3", label: "Camilan", icon: "cup",
        title: "Yogurt *buah*",
        body: "Yogurt + potongan buah + kacang. Segar dan praktis." },
      { type: "validasi",
        title: "Catatan *dokter*",
        body: "Tidak ada satu makanan ajaib penambah ASI. Yang penting gizi seimbang, cukup minum, dan sering menyusui." },
      { type: "cta",
        title: "Tim *manis* atau tim *asin*?",
        body: "Komen, nanti aku bikin resep versi kalian.",
        actions: ["komen", "save"] },
    ],
  },
  /* ---------------------------------------------------- #6 */
  /* KATALOG: satu contoh untuk tiap jenis slide baru.
     Pakai sebagai referensi saat minta Claude Code bikin carousel baru. */
  {
    id: "06-katalog",
    judul: "#6 Katalog jenis slide (contoh)",
    format: "campuran",
    slides: [
      { type: "foto-penuh", foto: "img/contoh-mama.jpg",
        kicker: "foto-penuh",
        title: "Hari pertama menyusui, *jujur* aku nangis",
        sub: "Cocok untuk hook yang personal" },
      { type: "hook", foto: "img/contoh-mama.jpg", stiker: "kata dokter",
        kicker: "hook + foto",
        title: "ASI belum keluar, *kasih sufor* aja?",
        sub: "Hook dengan foto bingkai lengkung" },
      { type: "foto-kartu", foto: "img/contoh-bayi.jpg", caption: "si Kecil, 3 hari",
        title: "Di balik *foto* ini…",
        body: "Kartu polaroid untuk cerita personal atau behind the scene." },
      { type: "banding",
        title: "Ekspektasi vs *realita*",
        kiri:  { label: "Ekspektasi", foto: "img/ekspektasi.jpg", teks: "Menyusui itu damai, kayak di iklan." },
        kanan: { label: "Realita", foto: "img/realita.jpg", teks: "Begadang, rambut acak-acakan, tapi tetap meleleh." } },
      { type: "chat", judul: "Pertanyaan dari Mama", subjudul: "via DM",
        pesan: [
          { dari: "mama", teks: "Dok, ASI-ku cuma keluar sedikit pas dipompa. Berarti kurang ya?" },
          { dari: "dokter", teks: "Belum tentu, Ma. Hasil pompa *bukan* ukuran produksi ASI." },
          { dari: "dokter", teks: "Bayi biasanya lebih efektif mengosongkan payudara daripada pompa." },
        ] },
      { type: "langkah",
        title: "Pelekatan yang *benar*",
        steps: [
          { judul: "Perut ketemu perut", teks: "Badan bayi menghadap Mama." },
          { judul: "Hidung ke puting", teks: "Tunggu mulut terbuka lebar." },
          { judul: "Dagu menempel", teks: "Bibir bawah terlipat keluar." },
          { judul: "Tidak sakit", teks: "Kalau nyeri, lepas & ulang." },
        ] },
      { type: "kutipan", foto: "img/testimoni.jpg",
        teks: "Setelah konsultasi, aku jadi *lebih tenang* dan percaya diri menyusui.",
        nama: "Mama Aisyah", info: "Busui, anak pertama" },
      { type: "angka",
        angka: "8–12x",
        title: "Frekuensi menyusu *normal* bayi baru lahir per 24 jam",
        body: "Jadi kalau si Kecil sering minta nyusu, itu wajar." },
      { type: "polling",
        title: "Mama tim *yang mana*?",
        a: { teks: "Tim menyusui langsung" },
        b: { teks: "Tim pumping" },
        hint: "Jawab A atau B di komen ya!" },
      { type: "resep", foto: "img/resep-oat.jpg",
        title: "Overnight *oat* busui",
        meta: "5 menit · 1 porsi",
        bahan: ["4 sdm oat", "150 ml susu", "1 pisang", "2 kurma cincang", "Madu secukupnya"],
        cara: ["Campur oat & susu di wadah", "Tambah pisang & kurma", "Simpan di kulkas semalaman", "Siap disantap pagi hari"] },
      { type: "cerita", tanggal: "Catatan, 19 Nov",
        teks: "Tadi ada Mama yang cerita, dia merasa *gagal* karena ASI-nya belum banyak di hari kedua.\nPadahal di hari-hari awal, kolostrum memang keluar sedikit, dan itu sudah cukup untuk lambung bayi yang masih kecil." },
      { type: "cta",
        title: "Pilih *jenis slide* favoritmu",
        body: "Lalu minta Claude Code membuat carousel baru dengan jenis itu.",
        actions: ["save", "komen", "follow"] },
    ],
  },

  /* ---------------------------------------------------- #7 */
  {
    id: "07-ekspektasi-realita",
    judul: "#7 Ekspektasi vs realita mengASIhi (pakai foto)",
    format: "foto",
    slides: [
      { type: "foto-penuh", foto: "img/realita.jpg", posisiFoto: "center top",
        kicker: "Ekspektasi vs realita",
        title: "MengASIhi itu *nggak selalu* seindah iklan",
        sub: "Dan itu nggak apa-apa" },
      { type: "banding",
        title: "Soal *tidur*",
        kiri:  { label: "Ekspektasi", teks: "Bayi tidur 4 jam, Mama ikut istirahat." },
        kanan: { label: "Realita", teks: "Bangun tiap 2 jam. Normal untuk bayi baru lahir." } },
      { type: "banding",
        title: "Soal *ASI*",
        kiri:  { label: "Ekspektasi", teks: "Hari pertama ASI langsung deras." },
        kanan: { label: "Realita", teks: "Kolostrum keluar sedikit, dan itu sudah cukup." } },
      { type: "banding",
        title: "Soal *rasa*",
        kiri:  { label: "Ekspektasi", teks: "Menyusui pasti terasa alami." },
        kanan: { label: "Realita", teks: "Butuh belajar, untuk Mama dan bayi." } },
      { type: "validasi",
        title: "Kalau realitamu *berantakan*",
        body: "Bukan berarti kamu gagal. Kamu sedang belajar, dan bayimu juga." },
      { type: "cta",
        title: "Realita mana yang paling *relate*?",
        body: "Ceritain di komen, Ma. Kita saling menguatkan.",
        actions: ["komen", "share"] },
    ],
  },
  /* ---------------------------------------------------- #8 */
  /* Contoh format B-ROLL + GERAK. Slide bergerak diekspor jadi MP4. */
  {
    id: "08-contoh-gerak-broll",
    judul: "#8 Contoh B-roll & animasi",
    format: "campuran",
    gerak: true,
    slides: [
      { type: "foto-penuh", video: "video/contoh-broll.mp4", durasi: 6,
        kicker: "B-roll",
        title: "Pagi busui itu *begini*",
        sub: "Video jadi latar, teks muncul bergerak" },
      { type: "poin", num: "1", label: "Animasi",
        title: "Teks *muncul* pelan",
        body: "Judul, kartu, dan hiasan bergerak halus. Hasilnya MP4 per slide." },
      { type: "chat", judul: "Pertanyaan dari Mama", subjudul: "via DM",
        pesan: [
          { dari: "mama", teks: "Dok, boleh nggak carousel ada videonya?" },
          { dari: "dokter", teks: "Boleh! Instagram menerima *foto & video* dalam satu carousel." },
        ] },
      { type: "checklist", gerak: false,
        title: "Slide ini *diam*",
        items: ["gerak: false", "Hasilnya PNG biasa", "Bisa dicampur"] },
      { type: "cta",
        title: "Coba format *favoritmu*",
        body: "Teks, foto, B-roll, atau gerak.",
        actions: ["save", "komen", "follow"] },
    ],
  },

  /* ---------------------------------------------------- #9 */
  {
    id: "09-perlekatan-menyusui",
    judul: "#9 Menyusui harus sakit? (perlekatan)",
    format: "teks",
    slides: [
      { type: "hook",
        kicker: "Mitos vs fakta",
        title: "“Menyusui itu *harus* sakit”",
        sub: "Beneran, Ma? Yuk cek faktanya" },
      { type: "mitos",
        mitos: "Puting lecet & nyeri itu wajar, tahan saja",
        fakta: "Rasa tidak nyaman sesaat di awal bisa terjadi. Nyeri terus-menerus atau lecet biasanya tanda pelekatan perlu dibenahi." },
      { type: "langkah",
        title: "Pelekatan yang *pas*",
        steps: [
          { judul: "Perut ketemu perut", teks: "Badan bayi lurus, menghadap Mama." },
          { judul: "Hidung ke puting", teks: "Tunggu mulut terbuka lebar." },
          { judul: "Dekatkan bayi", teks: "Bayi yang dibawa ke payudara, bukan sebaliknya." },
          { judul: "Masih sakit?", teks: "Lepas pelan dengan jari kelingking, ulangi." },
        ] },
      { type: "checklist",
        title: "Tanda pelekatan *sudah pas*",
        items: ["Mulut terbuka lebar", "Bibir bawah terlipat keluar", "Dagu menempel payudara",
                "Areola atas lebih banyak terlihat", "Pipi bulat, terdengar menelan"] },
      { type: "peringatan",
        title: "Kapan cari *bantuan*?",
        items: ["Tetap nyeri meski sudah dibenahi", "Puting lecet atau berdarah",
                "Payudara merah, bengkak, demam", "Bayi jarang pipis, berat tak naik"],
        note: "Periksa ke dokter, bidan, atau konselor menyusui." },
      { type: "cta",
        title: "*Save* & kirim ke Mama baru",
        body: "Pernah merasa menyusui itu sakit? Cerita di komen, lalu follow untuk tips berikutnya.",
        actions: ["save", "share", "follow"] },
    ],
  },
];
