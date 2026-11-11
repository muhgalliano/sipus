# PRODUCT REQUIREMENTS DOCUMENT (PRD)

# SIPUS --- SISTEM INFORMASI PERPUSTAKAAN

**Versi:** 1.1\
**Status:** Revisi untuk implementasi prototype\
**Platform:** Web Desktop, Tablet, dan Mobile\
**Teknologi:** HTML5 dan CSS3\
**Jenis Produk:** Responsive Web Application Prototype\
**Konteks Pengembangan:** Proyek akademik mahasiswa Teknik Informatika\
**Disusun Oleh (Kelompok):**\
1. Faisal Akbar (202443501334)\
2. Arya Indra Saputra (202443501340)\
3. Shendy Faiz Saputra (202443501352)\
4. Muhammad Ilham (202443501354)\
5. Muhammad Nazril Padillah (202443501357)\
6. Abdul Havis (202443501412)\
7. Sulton Syarief (202443502249)

------------------------------------------------------------------------

## Riwayat Revisi

  -----------------------------------------------------------------------
  Versi                               Keterangan
  ----------------------------------- -----------------------------------
  1.0                                 Dokumen kebutuhan awal SIPUS

  1.1                                 Penyempurnaan arahan UI/UX,
                                      konsistensi desain, struktur
                                      implementasi, dan kriteria evaluasi
                                      visual
  -----------------------------------------------------------------------

## 1. Ringkasan Produk

SIPUS (Sistem Informasi Perpustakaan) merupakan prototype aplikasi
berbasis web yang dirancang untuk menggambarkan pengelolaan operasional
perpustakaan secara terstruktur.

Aplikasi menyediakan antarmuka untuk melihat katalog dan detail buku,
serta menggambarkan pengelolaan data anggota, peminjaman, pengembalian,
dan laporan perpustakaan.

SIPUS dikembangkan sebagai prototype front-end menggunakan HTML5 dan
CSS3. Oleh karena itu, data yang ditampilkan merupakan data contoh dan
elemen interaktif yang membutuhkan pemrosesan data hanya disajikan
sebagai simulasi visual.

Aplikasi harus memiliki tampilan yang modern, minimalis, profesional,
mudah dipahami, dan responsif. Desain tidak ditujukan untuk menyerupai
template dashboard generik, melainkan sebuah sistem informasi
perpustakaan kampus yang dirancang dengan pertimbangan kebutuhan
pengguna.

## 2. Latar Belakang

Pengelolaan perpustakaan membutuhkan penyajian informasi yang jelas
mengenai koleksi buku, anggota, serta transaksi peminjaman dan
pengembalian. Informasi yang tersusun dengan baik dapat membantu petugas
memahami kondisi operasional perpustakaan.

SIPUS dirancang sebagai prototype antarmuka untuk menggambarkan
bagaimana informasi dan proses tersebut dapat disajikan melalui satu
aplikasi web. Proyek ini juga menjadi sarana penerapan kemampuan
perancangan antarmuka menggunakan HTML5 dan CSS3.

## 3. Tujuan Produk

1.  Menyediakan rancangan halaman beranda dan katalog buku yang mudah
    dipahami.
2.  Mempermudah pengguna melihat informasi koleksi dan detail buku.
3.  Menyediakan rancangan dashboard administrasi perpustakaan.
4.  Menyediakan tampilan pengelolaan data buku dan anggota.
5.  Menggambarkan alur peminjaman dan pengembalian melalui antarmuka.
6.  Menampilkan ringkasan statistik dan laporan perpustakaan.
7.  Menyediakan tampilan profil dan riwayat peminjaman anggota.
8.  Menerapkan desain responsif untuk desktop, tablet, dan mobile.
9.  Menghasilkan struktur HTML dan CSS yang rapi, konsisten, dan mudah
    dipelajari.

## 4. Target Pengguna

### 4.1 Admin

Membutuhkan akses visual ke dashboard, data buku, data anggota,
transaksi, dan laporan perpustakaan.

### 4.2 Petugas Perpustakaan

Membutuhkan tampilan informasi buku dan anggota serta halaman peminjaman
dan pengembalian.

### 4.3 Anggota

Membutuhkan akses visual ke katalog, detail buku, profil, dan riwayat
peminjaman.

### 4.4 Pengunjung

Membutuhkan informasi umum perpustakaan serta akses untuk melihat
katalog dan detail buku.

> Pembagian target pengguna di atas merupakan gambaran kebutuhan dan
> navigasi. Prototype ini tidak menerapkan autentikasi maupun pembatasan
> hak akses yang sebenarnya.

## 5. Ruang Lingkup Produk

### 5.1 Fitur yang Termasuk

-   Halaman beranda.
-   Katalog buku.
-   Detail buku.
-   Halaman login sebagai mockup.
-   Dashboard administrasi.
-   Tampilan pengelolaan buku.
-   Tampilan data anggota.
-   Tampilan peminjaman.
-   Tampilan pengembalian.
-   Halaman laporan.
-   Profil anggota.
-   Riwayat peminjaman yang ditampilkan pada halaman profil anggota.
-   Navigasi antarhalaman menggunakan tautan HTML.
-   Responsive design.

### 5.2 Fitur yang Tidak Termasuk

-   Backend dan API.
-   Database.
-   Autentikasi dan otorisasi sungguhan.
-   CRUD yang benar-benar menyimpan, mengubah, atau menghapus data.
-   Pencarian dan filter dinamis.
-   Transaksi peminjaman dan pengembalian sungguhan.
-   Pembaruan stok buku otomatis.
-   Pengiriman notifikasi.
-   Perhitungan denda otomatis.
-   Pembuatan laporan dari data aktual.
-   Validasi form menggunakan JavaScript.

### 5.3 Ketentuan Simulasi

Semua data yang ditampilkan merupakan data dummy yang konsisten dan
realistis. Tombol, form, filter, pencarian, dan kontrol lain yang
memerlukan pemrosesan hanya menjadi representasi visual. Tautan navigasi
antarhalaman tetap harus mengarah ke file HTML yang tersedia.

## 6. Functional Requirements

### FR-001 --- Beranda (`index.html`)

Halaman beranda menampilkan:

-   Logo dan nama SIPUS.
-   Navigasi utama.
-   Hero section yang menjelaskan fungsi perpustakaan.
-   Kolom pencarian sebagai mockup visual.
-   Bagian buku populer.
-   Bagian buku terbaru.
-   Statistik perpustakaan.
-   Informasi singkat mengenai perpustakaan.
-   Footer berisi informasi pendukung.

### FR-002 --- Katalog Buku (`katalog.html`)

Halaman katalog menampilkan:

-   Sampul buku.
-   Judul buku.
-   Nama penulis.
-   Kategori.
-   Tahun terbit.
-   Status ketersediaan.
-   Tautan menuju detail buku.
-   Tampilan filter kategori sebagai mockup.
-   Kolom pencarian sebagai mockup.

### FR-003 --- Detail Buku (`detail-buku.html`)

Halaman detail buku menampilkan:

-   Sampul buku.
-   Judul.
-   Penulis.
-   Penerbit.
-   Tahun terbit.
-   ISBN.
-   Kategori.
-   Deskripsi buku.
-   Jumlah stok.
-   Status ketersediaan.
-   Tombol peminjaman sebagai elemen visual.

### FR-004 --- Login (`login.html`)

Halaman login menampilkan:

-   Input email atau username.
-   Input password.
-   Tombol login.
-   Opsi ingat saya.
-   Tautan kembali ke beranda.

Seluruh elemen hanya berupa mockup dan tidak melakukan autentikasi.

### FR-005 --- Dashboard Admin (`dashboard.html`)

Dashboard menampilkan:

-   Sidebar navigasi.
-   Header dashboard.
-   Ringkasan jumlah koleksi buku.
-   Ringkasan jumlah anggota.
-   Ringkasan jumlah peminjaman.
-   Ringkasan jumlah pengembalian.
-   Statistik perpustakaan dalam bentuk visual statis berbasis HTML/CSS.
-   Tabel transaksi terbaru.

### FR-006 --- Pengelolaan Buku (`buku.html`)

Halaman buku menampilkan:

-   Judul halaman dan deskripsi singkat.
-   Tabel daftar buku.
-   Kode buku.
-   Judul.
-   Penulis.
-   Kategori.
-   Stok.
-   Status.
-   Tombol tambah buku.
-   Tombol edit.
-   Tombol hapus.

Tombol tambah, edit, dan hapus hanya berupa elemen antarmuka tanpa
proses penyimpanan data.

### FR-007 --- Data Anggota (`anggota.html`)

Halaman anggota menampilkan:

-   Nomor anggota.
-   Nama anggota.
-   Email.
-   Nomor telepon.
-   Alamat.
-   Tanggal pendaftaran.
-   Status anggota.
-   Tombol tambah, edit, dan hapus sebagai mockup.

### FR-008 --- Peminjaman (`peminjaman.html`)

Halaman peminjaman menampilkan:

-   Nomor transaksi.
-   Nama anggota.
-   Judul buku.
-   Tanggal peminjaman.
-   Tanggal jatuh tempo.
-   Status peminjaman.
-   Form peminjaman sebagai representasi visual bila diperlukan oleh
    layout.

### FR-009 --- Pengembalian (`pengembalian.html`)

Halaman pengembalian menampilkan:

-   Nomor transaksi.
-   Nama anggota.
-   Judul buku.
-   Tanggal peminjaman.
-   Tanggal pengembalian.
-   Status pengembalian.
-   Informasi denda sebagai data contoh.

### FR-010 --- Laporan (`laporan.html`)

Halaman laporan menampilkan:

-   Statistik jumlah buku.
-   Statistik jumlah anggota.
-   Jumlah transaksi peminjaman.
-   Jumlah pengembalian.
-   Tabel laporan transaksi.
-   Filter periode sebagai mockup.
-   Tombol cetak sebagai elemen visual.

### FR-011 --- Profil Anggota (`profil.html`)

Halaman profil anggota menampilkan:

-   Foto atau avatar profil.
-   Nomor anggota.
-   Nama lengkap.
-   Email.
-   Nomor telepon.
-   Alamat.
-   Buku yang sedang dipinjam.
-   Tanggal jatuh tempo.
-   Riwayat peminjaman.

## 7. Non-Functional Requirements

### NFR-001 --- Responsivitas

Tampilan harus menyesuaikan ukuran layar: - Desktop: 1024px ke atas. -
Tablet: 768px--1023px. - Mobile: di bawah 768px.

### NFR-002 --- Konsistensi Desain

Seluruh halaman harus menggunakan sistem warna, tipografi, jarak,
tombol, form, tabel, dan komponen yang konsisten. Konsistensi tidak
berarti semua halaman harus memiliki komposisi layout yang sama.

### NFR-003 --- Kemudahan Penggunaan

Navigasi harus mudah dipahami. Judul halaman, label, status, dan
informasi utama harus memiliki hierarki visual yang jelas.

### NFR-004 --- Kompatibilitas

Tampilan harus mendukung browser modern seperti Google Chrome, Microsoft
Edge, dan Mozilla Firefox.

### NFR-005 --- Struktur Kode

HTML dan CSS harus terstruktur, menggunakan penamaan class yang mudah
dipahami, dan menghindari pengulangan aturan CSS yang tidak diperlukan.

### NFR-006 --- Aksesibilitas Dasar

Gunakan elemen HTML semantik, label form yang jelas, teks alternatif
untuk gambar informatif, kontras teks yang memadai, dan indikator fokus
keyboard yang terlihat.

### NFR-007 --- Performa

Gunakan aset gambar yang ukurannya wajar dan hindari dependensi atau
library yang tidak diperlukan.

## 8. Sitemap Aplikasi

### 8.1 Halaman Publik

-   Beranda.
-   Katalog Buku.
-   Detail Buku.
-   Login.

### 8.2 Halaman Anggota

-   Profil Anggota.
-   Riwayat Peminjaman (ditampilkan sebagai bagian dari halaman Profil
    Anggota).

### 8.3 Halaman Administrasi

-   Dashboard.
-   Data Buku.
-   Data Anggota.
-   Peminjaman.
-   Pengembalian.
-   Laporan.

## 9. User Flow

### 9.1 Pengunjung

Beranda → Katalog Buku → Detail Buku → Login.

### 9.2 Anggota

Login (mockup) → Profil Anggota → Melihat buku yang sedang dipinjam dan
riwayat peminjaman.

### 9.3 Petugas

Dashboard → Data Buku → Data Anggota → Peminjaman → Pengembalian.

### 9.4 Admin

Dashboard → Pengelolaan Data → Laporan.

> User flow menggambarkan urutan halaman, bukan proses autentikasi atau
> transaksi yang benar-benar berjalan.

## 10. Spesifikasi Desain UI/UX

### 10.1 Konsep Visual

Gunakan konsep **Modern Academic Library**: antarmuka sistem informasi
perpustakaan kampus yang bersih, teratur, fungsional, dan profesional.

Arah visual menggabungkan karakter: - Website katalog buku yang nyaman
untuk dijelajahi. - Admin panel yang fokus pada keterbacaan data. -
Sistem informasi kampus yang sederhana dan konsisten.

Desain harus terasa dirancang sesuai kebutuhan SIPUS, bukan sekadar
menyalin template dashboard generik atau membuat landing page promosi.

### 10.2 Prinsip Desain

1.  **Fungsional terlebih dahulu:** elemen visual harus membantu
    pengguna memahami informasi atau tindakan.
2.  **Sederhana:** hindari dekorasi yang tidak memiliki tujuan.
3.  **Konsisten:** gunakan aturan visual yang sama untuk komponen
    sejenis.
4.  **Memiliki hierarki:** informasi utama harus lebih mudah ditemukan
    daripada informasi pendukung.
5.  **Proporsional:** gunakan whitespace dan ukuran komponen secara
    seimbang.
6.  **Natural:** hindari pola layout, ikon, dan card yang berulang
    secara berlebihan.
7.  **Responsif:** konten tetap terbaca dan dapat digunakan pada
    berbagai ukuran layar.

### 10.3 Color Palette

  Nama              Hex Color   Penggunaan
  ----------------- ----------- ---------------------------------------
  Primary Navy      `#173B67`   Navigasi utama, sidebar, tombol utama
  Secondary Blue    `#2563EB`   Tautan dan aksen seperlunya
  Light Blue        `#E8F1FA`   Latar aksen dan elemen pendukung
  Page Background   `#F5F7FA`   Latar halaman administrasi
  White             `#FFFFFF`   Permukaan konten dan form
  Main Text         `#243247`   Teks utama
  Secondary Text    `#64748B`   Teks sekunder
  Border            `#E2E8F0`   Garis pemisah dan batas komponen
  Success           `#16A34A`   Status tersedia atau selesai
  Warning           `#D97706`   Status menunggu atau peringatan
  Danger            `#DC2626`   Status terlambat atau bermasalah

Gunakan warna status secara konsisten dan secukupnya. Jangan menggunakan
semua warna aksen pada satu halaman tanpa kebutuhan.

### 10.4 Tipografi

-   Gunakan font sans-serif yang mudah dibaca.
-   Utamakan system font agar tampilan tetap baik tanpa ketergantungan
    font eksternal.
-   Ukuran dan ketebalan heading, subheading, body text, label, serta
    caption harus memiliki hierarki yang konsisten.
-   Hindari penggunaan terlalu banyak variasi ukuran dan ketebalan font.

### 10.5 Layout dan Spacing

-   Gunakan CSS Grid dan Flexbox sesuai kebutuhan layout.
-   Halaman publik menggunakan navbar yang sederhana dan area konten
    yang nyaman dibaca.
-   Halaman administrasi menggunakan sidebar dan header konten.
-   Terapkan lebar konten yang terkontrol agar teks dan tabel tidak
    melebar tanpa batas.
-   Gunakan jarak antarbagian secara konsisten.
-   Hindari menumpuk terlalu banyak panel atau card dalam satu halaman.
-   Tidak semua informasi harus ditempatkan dalam card; gunakan section,
    list, tabel, atau pemisah sesuai jenis informasinya.

### 10.6 Komponen UI

Komponen yang perlu memiliki gaya konsisten: - Navbar publik. - Sidebar
administrasi. - Header halaman. - Breadcrumb bila diperlukan. - Tombol
utama dan sekunder. - Input dan label form. - Search field. - Book
card. - Data table. - Badge status. - Panel statistik. - Pagination
visual bila diperlukan. - Footer.

Komponen harus memiliki ukuran, jarak, border, radius, dan state visual
yang konsisten. Gunakan ikon sederhana dengan satu gaya visual. Jangan
menggunakan emoji sebagai ikon utama navigasi.

### 10.7 Gaya Halaman Publik

-   Beranda memiliki pengenalan SIPUS yang singkat dan area katalog
    unggulan.
-   Katalog mengutamakan keterbacaan informasi buku dan kemudahan
    pemindaian visual.
-   Detail buku memiliki susunan informasi yang jelas, dengan sampul dan
    metadata sebagai fokus.
-   Login menggunakan layout sederhana tanpa dekorasi berlebihan.

### 10.8 Gaya Halaman Administrasi

-   Sidebar membantu pengguna mengenali lokasi halaman saat ini.
-   Header halaman menampilkan judul dan konteks halaman.
-   Ringkasan statistik hanya menonjolkan angka yang relevan.
-   Tabel mengutamakan keterbacaan kolom, jarak baris, dan status.
-   Tombol aksi tidak boleh lebih dominan daripada informasi utama.
-   Hindari penggunaan terlalu banyak card dengan shadow besar atau
    dekorasi yang tidak diperlukan.

### 10.9 Hal yang Harus Dihindari

-   Gradient berlebihan.
-   Shadow tebal pada hampir semua komponen.
-   Terlalu banyak card yang bentuk dan susunannya sama.
-   Warna aksen yang terlalu ramai.
-   Emoji sebagai pengganti ikon antarmuka.
-   Animasi dekoratif yang tidak diperlukan.
-   Teks promosi berlebihan seperti landing page startup.
-   Layout yang sama persis pada seluruh halaman.
-   Penggunaan elemen visual yang tidak memiliki fungsi jelas.

## 11. Responsive Design

### 11.1 Desktop (1024px ke atas)

-   Navbar horizontal pada halaman publik.
-   Sidebar dan area konten berdampingan pada halaman administrasi.
-   Katalog menggunakan sekitar 3--4 kolom sesuai ruang yang tersedia.
-   Tabel menampilkan informasi secara lengkap.
-   Konten memiliki lebar dan jarak yang proporsional.

### 11.2 Tablet (768px--1023px)

-   Layout menyesuaikan lebar layar.
-   Katalog menggunakan sekitar 2--3 kolom.
-   Sidebar dapat dibuat lebih ringkas.
-   Jarak dan ukuran komponen disesuaikan agar tidak sesak.

### 11.3 Mobile (di bawah 768px)

-   Navigasi dibuat ringkas dan tetap dapat diakses.
-   Katalog menggunakan 1--2 kolom sesuai lebar layar.
-   Form menggunakan satu kolom.
-   Panel statistik disusun ulang agar mudah dibaca.
-   Tabel harus memiliki strategi responsif yang jelas, misalnya
    pembungkus dengan `overflow-x: auto` hanya pada area tabel atau
    penyederhanaan tampilan kolom.
-   Tidak boleh terjadi horizontal overflow pada keseluruhan halaman.
-   Tombol dan tautan memiliki area sentuh yang memadai.

## 12. Daftar Halaman dan File

  Halaman          Nama File
  ---------------- ---------------------
  Beranda          `index.html`
  Katalog          `katalog.html`
  Detail Buku      `detail-buku.html`
  Login            `login.html`
  Dashboard        `dashboard.html`
  Data Buku        `buku.html`
  Data Anggota     `anggota.html`
  Peminjaman       `peminjaman.html`
  Pengembalian     `pengembalian.html`
  Laporan          `laporan.html`
  Profil Anggota   `profil.html`

## 13. Struktur Folder

Struktur folder yang diharapkan:

``` text
sipus/
├── PRD.md
├── index.html
├── katalog.html
├── detail-buku.html
├── login.html
├── dashboard.html
├── buku.html
├── anggota.html
├── peminjaman.html
├── pengembalian.html
├── laporan.html
├── profil.html
├── css/
│   └── style.css
└── assets/
    ├── images/
    │   ├── logo.png
    │   ├── hero-library.jpg
    │   └── books/
    └── icons/
```

Catatan: - Buat folder atau file aset hanya jika benar-benar
digunakan. - Jika gambar tertentu tidak tersedia, gunakan placeholder
visual yang rapi atau aset lokal yang sesuai. - Jangan menggunakan
tautan gambar eksternal yang tidak stabil. - Semua path gambar dan
stylesheet harus benar sesuai lokasi file.

## 14. Ketentuan Teknis

1.  Menggunakan HTML5.
2.  Menggunakan CSS3.
3.  Tidak menggunakan JavaScript.
4.  Tidak menggunakan Bootstrap.
5.  Tidak menggunakan Tailwind CSS.
6.  Tidak menggunakan framework atau library CSS lain.
7.  Tidak menggunakan backend.
8.  Tidak menggunakan database.
9.  CSS utama disimpan di `css/style.css`.
10. Seluruh halaman harus terhubung ke stylesheet utama dengan path yang
    benar.
11. Navigasi antarhalaman menggunakan anchor HTML.
12. Gunakan CSS Grid dan Flexbox.
13. Gunakan media queries untuk responsivitas.
14. Gunakan elemen HTML semantik seperti `header`, `nav`, `main`,
    `section`, `article`, `aside`, dan `footer` sesuai konteks.
15. Gunakan atribut `alt` yang sesuai untuk gambar.
16. Gunakan label yang terhubung dengan input pada form.
17. Jangan menambahkan JavaScript inline, file `.js`, atau atribut event
    JavaScript.
18. Jangan menambahkan dependensi yang bertentangan dengan batasan
    proyek.

## 15. Acceptance Criteria

Aplikasi dinyatakan memenuhi kebutuhan prototype apabila:

### 15.1 Kelengkapan Halaman

-   [ ] Seluruh 11 halaman berhasil dibuat.
-   [ ] Tidak ada file HTML kosong.
-   [ ] Setiap halaman memiliki konten sesuai functional requirements.

### 15.2 Navigasi dan Konten

-   [ ] Seluruh tautan navigasi internal mengarah ke file yang tersedia.
-   [ ] Beranda memiliki komponen yang ditentukan.
-   [ ] Katalog menampilkan informasi dan kartu buku.
-   [ ] Detail buku menampilkan metadata dan deskripsi.
-   [ ] Dashboard menampilkan statistik dan tabel transaksi.
-   [ ] Data buku dan anggota memiliki tampilan tabel.
-   [ ] Peminjaman dan pengembalian memiliki informasi transaksi.
-   [ ] Laporan memiliki statistik dan tabel.
-   [ ] Profil anggota memiliki informasi profil dan riwayat peminjaman.

### 15.3 Kualitas UI/UX

-   [ ] Mengikuti konsep Modern Academic Library.
-   [ ] Menggunakan palet warna yang ditentukan.
-   [ ] Tipografi dan spacing konsisten.
-   [ ] Halaman publik dan administrasi memiliki layout sesuai
    fungsinya.
-   [ ] Tidak menggunakan card dan shadow secara berlebihan.
-   [ ] Tidak menggunakan emoji sebagai ikon navigasi utama.
-   [ ] Tabel, form, tombol, dan status mudah dibaca.
-   [ ] Tidak ada elemen dekoratif yang mengganggu informasi utama.

### 15.4 Responsivitas dan Teknis

-   [ ] Tampilan desktop diperiksa.
-   [ ] Tampilan tablet diperiksa.
-   [ ] Tampilan mobile diperiksa.
-   [ ] Tidak terjadi horizontal overflow pada keseluruhan halaman.
-   [ ] Seluruh halaman menggunakan stylesheet utama.
-   [ ] Tidak ada path aset atau tautan internal yang rusak.
-   [ ] Tidak ada penggunaan JavaScript.
-   [ ] Tidak ada ketergantungan pada backend atau database.
-   [ ] Struktur HTML dan CSS mudah dibaca dan dipelihara.

## 16. Tahapan Implementasi

### Tahap 1 --- Pemeriksaan Project

Memeriksa folder kerja, file yang sudah ada, dan isi PRD sebelum
melakukan perubahan. Jangan membuat folder proyek baru jika folder
proyek sudah tersedia.

### Tahap 2 --- Project Setup

Membuat atau melengkapi struktur folder, file HTML, folder CSS, dan
folder aset.

### Tahap 3 --- Design System

Membuat variabel warna CSS, tipografi, spacing, tombol, form, tabel,
navbar, sidebar, dan komponen dasar lainnya.

### Tahap 4 --- Public Pages

Membuat beranda, katalog, detail buku, dan login.

### Tahap 5 --- Admin Pages

Membuat dashboard, pengelolaan buku, anggota, peminjaman, pengembalian,
dan laporan.

### Tahap 6 --- Member Pages

Membuat profil anggota beserta informasi buku yang sedang dipinjam dan
riwayat peminjaman.

### Tahap 7 --- Responsive Implementation

Menyesuaikan seluruh halaman untuk desktop, tablet, dan mobile.

### Tahap 8 --- Testing and Review

Memeriksa navigasi, konsistensi desain, responsivitas, path aset,
struktur HTML/CSS, dan seluruh acceptance criteria.

## 17. Risiko dan Batasan

Karena aplikasi hanya menggunakan HTML dan CSS, seluruh fitur yang
membutuhkan pemrosesan data bersifat simulasi tampilan.

Contohnya: - Login tidak melakukan autentikasi. - Pencarian tidak
memproses kata kunci. - Filter tidak mengubah data secara dinamis. -
Tombol CRUD tidak menyimpan perubahan. - Transaksi tidak memperbarui
stok. - Laporan menggunakan data contoh. - Denda tidak dihitung
otomatis. - Data profil dan riwayat tidak diambil dari database.

Pengembangan backend, database, autentikasi, dan fungsi dinamis dapat
menjadi tahap lanjutan di luar ruang lingkup prototype ini.

## 18. Instruksi Implementasi untuk AI Developer

Dokumen ini menjadi acuan utama implementasi SIPUS. Sebelum mengubah
atau membuat file, AI Developer harus:

1.  Membaca seluruh dokumen PRD.
2.  Memeriksa struktur folder dan file proyek yang sedang terbuka.
3.  Mengidentifikasi file yang sudah tersedia agar tidak membuat
    duplikasi.
4.  Mengikuti ruang lingkup dan batasan teknologi secara ketat.
5.  Mengikuti Design Guidelines pada Bagian 10.
6.  Mengimplementasikan halaman secara bertahap dengan satu stylesheet
    utama.
7.  Memastikan seluruh tautan internal dan path aset benar.
8.  Melakukan pemeriksaan visual dan teknis sebelum menyatakan pekerjaan
    selesai.
9.  Tidak menghapus atau menimpa file penting tanpa alasan yang jelas.
10. Melaporkan halaman yang selesai, pemeriksaan yang dilakukan, serta
    keterbatasan yang masih ada.

Jika terdapat informasi yang tidak dijelaskan dalam PRD, gunakan
keputusan desain yang paling sederhana dan konsisten dengan tujuan
SIPUS. Jangan menambahkan fitur baru yang mengubah ruang lingkup tanpa
persetujuan pengguna.

------------------------------------------------------------------------

**Nama Produk:** SIPUS\
**Dokumen:** Product Requirements Document\
**Versi:** 1.1\
**Jenis:** Responsive Web Application Prototype\
**Teknologi:** HTML5 dan CSS3
