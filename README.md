# Ariska's Data Canvas

Buatkan saya sebuah personal portfolio website dengan tema luxury simple, nuansa warna pink, cream, dan putih (soft blush pink sebagai aksen, cream/ivory sebagai latar utama, putih untuk ruang negatif/whitespace, tipografi elegan seperti serif untuk judul dan sans-serif clean untuk body text). Gaya desain: minimalis, banyak white space, elegan, tidak ramai, dengan sentuhan editorial/majalah premium.

STRUKTUR HALAMAN:

Hero Section
Nama: Ariska Febrilianti
Tagline: "Data Analyst | Turning Raw Data into Business Decisions"
Sub-tagline kecil: Frontend Web Developer skillset sebagai nilai tambah
Lokasi: Jakarta, Indonesia
Tombol CTA: "Lihat Portofolio" & "Hubungi Saya"
Kontak: Email (arskfbr@gmail.com), LinkedIn (linkedin.com/in/ariskafebrilianti), GitHub (github.com/ariskafebrilianti)
About / Summary Section
Gunakan ringkasan berikut (tanpa menyebut gelar/IPK, fokus ke skill & pengalaman nyata):

"Data Analyst dengan pengalaman langsung mengaudit dan mengolah data komersial skala besar di lebih dari 10 unit bisnis, mendeteksi anomali finansial, serta mengoptimalkan biaya operasional logistik hingga 15%–40% melalui analisis vendor dan riset rate berbasis data. Terbiasa bekerja dengan SQL (CTE, Window Functions, Aggregation), Python (Pandas, Seaborn), dan Excel tingkat lanjut (Power Query, Pivot Table, Advanced Formula) untuk membersihkan, memvalidasi, dan memvisualisasikan data menjadi insight yang actionable. Memegang sertifikasi kompetensi Analis Data dari BNSP (8 unit kompetensi). Dilengkapi kemampuan Frontend Web Development (React.js, TypeScript, Tailwind CSS) dan WebGIS (Leaflet.js) yang memberi nilai tambah dalam membangun dashboard interaktif dan visualisasi data berbasis web. Pendekatan kerja berorientasi pada hasil terukur dan efisiensi bisnis."

Skills Section (tampilkan sebagai grid/badge icon dengan aksen pink-cream)
Data Analytics & BI: Data Cleansing, Data Profiling, Cohort & Retention Analysis, Predictive Forecasting, KPI Tracking
Database & Query: SQL (PostgreSQL/MySQL, CTE, Window Functions, JOIN)
Programming:  JavaScript (ES6+), TypeScript
Visualisasi & Tools: Excel Advanced, Power BI, 
Frontend Development: React.js, Vite, HTML5, CSS3, Tailwind CSS
Geospatial: WebGIS, Leaflet.js, OpenStreetMap API, QGIS
Lainnya: Git/GitHub, Figma, Google Workspace, Microsoft 365
Education Section (ringkas, tanpa menonjolkan IPK)
S1 Agroteknologi — Universitas Jenderal Soedirman (UNSOED), Purwokerto (2023–2025)
D3 Perencanaan Sumberdaya Lahan — UNSOED (2020–2023), fokus SIG/GIS & analisis spasial
Work Experience Section (timeline vertikal, elegan)
PT Trans Retail Indonesia (CT Corp) — Project Development Canvassing Fresh Intern (Nov 2025 – Mei 2026): audit data komersial 10+ unit bisnis (akurasi 99%), analisis 88 vendor aktif yang memangkas biaya logistik 12%–40%, standardisasi struktur data, kelola dashboard 15+ mitra eksternal.
RMU Teaching Industry UNSOED — Operations Support & WebGIS Developer (Agu 2022 – Apr 2023): bangun platform WebGIS interaktif (efisiensi rantai pasok +30%), database inventaris (anomali stok -15%), simulasi procurement (-12% biaya).
GAMAIS UNSOED — Sekretaris Umum & Staf Birokestari (2021–2023): arsitektur pengarsipan digital, koordinasi 5 departemen, MoM.
Portfolio / Projects Section — PALING PENTING
Baik, ini versi lengkap dan detail untuk bagian Portfolio/Projects yang bisa langsung menggantikan bagian sebelumnya di prompt-mu. Setiap proyek saya breakdown selengkap mungkin agar recruiter langsung paham proses berpikir dan dampak bisnismu — bukan cuma daftar tools.

PORTFOLIO / PROJECTS SECTION (Detail Lengkap per Proyek)

Instruksi umum untuk setiap card proyek: gunakan layout 2 kolom — kolom kiri berisi carousel/slider gambar (3–6 screenshot, bisa di-swipe, ada dot indicator & tombol next/prev, auto-slide opsional setiap 4 detik), kolom kanan berisi narasi lengkap dengan sub-heading kecil (Overview, Problem, Methodology, Tech Stack, Result). Beri jarak antar proyek yang lega (banyak whitespace) agar terasa premium, bukan padat seperti CV biasa.

2. E-Commerce Sales & Customer Analytics (SQL, Python, Excel Dashboard)

Overview: Analisis end-to-end data transaksi e-commerce ritel internasional dengan total gross sales lebih dari £10 juta, untuk memahami tren transaksi, segmentasi pelanggan, dan efisiensi produk.

Problem & Purpose: Dataset transaksi mentah memiliki banyak anomali — kuantitas minus (retur), missing values pada CustomerID, dan struktur kolom yang belum siap dianalisis. Tujuannya menghasilkan insight strategis untuk pengambilan keputusan bisnis, khususnya menjelang peak season.

Methodology & Fitur:

Data cleaning: menangani nilai kuantitas minus/retur, imputasi missing values pada CustomerID, pemisahan kolom transaksi

Cohort Retention Analysis menggunakan Python (Pandas & Seaborn) untuk memetakan retensi pelanggan selama 12 bulan dalam bentuk heatmap

Dashboard Excel interaktif: tren penjualan bulanan, top 5 produk best seller, kontribusi revenue per wilayah

Result & Business Recommendation: Mengidentifikasi sub-kategori "Tables" sebagai kontributor kerugian terbesar (-$17.725), pasar UK menyumbang lebih dari 85% revenue, dan memberikan rekomendasi alokasi safety stock untuk produk best seller ("World War 2 Gliders") menjelang peak season.

Tech Stack: SQL, Python (Pandas, Seaborn, Matplotlib), Microsoft Excel (Pivot Table, Power Query, Advanced Formulas)

3. Data Science Salaries & Compensation Analysis (SQL Analytics)

Overview: Analisis kueri SQL mendalam pada dataset gaji industri Data Science global untuk memetakan benchmark kompensasi.

Problem & Purpose: Memberikan wawasan kompensasi yang objektif dan berbasis data bagi profesional data maupun tim HR/rekrutmen, khususnya untuk perencanaan jenjang karier dan negosiasi gaji.

Methodology & Fitur:

Data quality check: memastikan integritas data dari NULL values di seluruh kolom variabel

Menghitung rata-rata gaji bulanan posisi Data Analyst berdasarkan experience level (Entry, Mid, Senior, Executive) dan jenis employment (Full-time, Part-time, Contract)

Geographic arbitrage analysis: mengidentifikasi negara dengan kompensasi tertinggi untuk posisi entry–mid level

Menggunakan Common Table Expressions (CTE) dan LEFT JOIN untuk mengukur lonjakan kenaikan gaji dari tingkat Mid ke Senior antar tahun

Result: Menyajikan pemetaan gaji yang jelas antar level pengalaman dan negara, membantu benchmarking kompensasi berbasis data aktual, bukan asumsi.

Tech Stack: SQL (PostgreSQL/MySQL), Data Aggregation, CTE, Data Cleansing

1. Macroeconomic Dynamics & MSME Credit Risk Assessment (TWP90 Analytics) (Excel + MySQL + Power BI)

Overview: Analisis pengaruh kondisi ekonomi makro (BI Rate & inflasi) terhadap tingkat risiko kredit macet (TWP90 — Tingkat Wanprestasi >90 hari) pada industri Fintech P2P Lending di Indonesia, menggunakan data resmi OJK periode Juli 2024–Maret 2026.

Problem & Purpose: Industri P2P Lending menjadi sumber pendanaan penting bagi UMKM, namun kualitas kreditnya sangat rentan terhadap fluktuasi makroekonomi. Proyek ini bertujuan mengukur sejauh mana korelasi tersebut, sekaligus memetakan risiko kredit secara geografis (per provinsi) untuk mitigasi risiko.

Methodology & Fitur (End-to-End Data Pipeline):

Data Extraction & Preprocessing (Excel/Power Query): cleaning data mentah laporan OJK, penanganan missing values, unpivoting struktur data antar-bulan, ekstraksi format tanggal YYYY-MM

Data Warehousing & Transformation (MySQL): membangun relational database, JOIN antar tabel makro-mikro, membuat Views, kalkulasi KPI metrics via query terstruktur

Data Visualization & Dashboarding (Power BI): pemodelan data Star Schema, kalkulasi DAX (YTD, MoM, threshold logic), perancangan Interactive Executive Dashboard

Business & Analytical Objectives:

Mengukur stabilitas kredit nasional lewat tren TWP90 & TKB90

Evaluasi dampak suku bunga & inflasi terhadap fluktuasi rasio TWP90

Analisis penyerapan pendanaan sektor produktif (UMKM) vs konsumtif

Regional risk mapping — mengidentifikasi provinsi dengan risiko kredit tertinggi

Tech Stack: Microsoft Excel/Power Query, MySQL, Power BI (DAX, Star Schema)

4. WebGIS Rice Distribution & Supply Chain Mapping System

Overview: Platform WebGIS interaktif untuk memetakan dan menganalisis rantai pasok serta distribusi beras RMU Teaching Industry UNSOED di wilayah Banyumas, mencakup 20+ konsumen, 5 distributor, dan 88 supplier.

Problem & Purpose: Dibutuhkan alat visual berbasis data spasial untuk mendukung pengambilan keputusan distribusi yang lebih efisien dan berbasis lokasi, bukan estimasi manual.

Methodology & Fitur:

Geospatial mapping titik konsumsi, pasar tradisional, dan ritel modern

Buffer & reach analysis dengan radius 1 km untuk mengukur potensi penetrasi pasar

Kalkulasi jarak & rute dari supplier ke pusat penggilingan untuk estimasi biaya pengiriman

Result: Meningkatkan efisiensi analisis rantai pasok hingga 30%, akurasi pelacakan lokasi mencapai 90%, dan membantu efisiensi biaya logistik vendor hingga 12%.

Tech Stack: JavaScript, Leaflet.js, OpenStreetMap API, QGIS

5. Interactive Kanban Task Management Application

Overview: Aplikasi manajemen tugas (to-do list) interaktif berbasis Single Page Application (SPA) untuk membantu efisiensi alur kerja dan pelacakan progres proyek secara real-time.

Problem & Purpose: Menyediakan tools sederhana namun fungsional untuk manajemen task pribadi/tim tanpa kompleksitas aplikasi enterprise.

Fitur Utama:

Penambahan tugas lengkap dengan deadline dan deskripsi

Board status progres: Not Started, In Progress, Review/Waiting, Completed

Desain responsif dan antarmuka bersih

Pengujian unit komponen

Tech Stack: React.js, Vite, TypeScript/JavaScript, CSS Modules

6. Dynamic REST API Integration Apps (Get Pokemon & Get Pikachu)

Overview: Serial aplikasi web frontend ringan yang dirancang untuk menguji integrasi REST API eksternal dan manipulasi DOM secara dinamis.

Problem & Purpose: Melatih dan mendemonstrasikan kemampuan menghubungkan frontend dengan data eksternal secara asynchronous — skill dasar penting untuk integrasi dashboard data real-time di masa depan.

Fitur Utama:

Pengambilan data asynchronous (Fetch API/AJAX) dari basis data publik

Render data dinamis dengan teknik array looping untuk card karakter

Feedback visual interaktif (loading state) saat aksi diklik

Tech Stack: JavaScript (ES6+), HTML5, CSS3, RESTful API Integration

7. RMU UNSOED Company Profile Website

Overview: Website profil perusahaan komersial yang responsif untuk memperkenalkan produk, operasional pascapanen, dan lokasi toko RMU Teaching Industry UNSOED.

Problem & Purpose: Perusahaan membutuhkan kehadiran digital yang profesional untuk menjangkau pelanggan dan mitra bisnis secara lebih luas.

Fitur Utama:

Hero section menarik dengan navigasi terstruktur (About, Products, Store, Contact)

Galeri katalog produk terintegrasi dengan media sosial dan Google Maps lokasi toko

Tampilan cross-browser yang optimal di desktop maupun mobile

Tech Stack: HTML5, CSS3, JavaScript, Figma (UI/UX Prototyping)

Instruksi tambahan untuk AI builder: Susun ketujuh proyek di atas secara berurutan dari yang paling relevan untuk role Data Analyst (proyek 1–3) ke proyek Frontend/WebGIS (proyek 4–7), dengan label kategori kecil di setiap card (misalnya badge "Data Analytics" atau "Frontend/WebGIS") agar recruiter bisa langsung menyaring sesuai kebutuhan mereka. Tambahkan juga tombol "Lihat Detail" per proyek jika platform mendukung expand/collapse, supaya tampilan awal tetap ringkas namun detail tetap tersedia saat diklik.
Certifications Section (grid badge)
Sertifikasi BNSP Analis Data (8 unit kompetensi)
Sertifikat Pemagangan KEMNAKER RI (Predikat Sangat Baik)
Frontend Developer Course — Progate
AI for Work & Career Readiness — Google/Hacktiv8
MySkill: Data Analytics & Business Metrics Series, Excel Advanced Series
Contact Section
Form kontak sederhana (nama, email, pesan)
Icon sosial media: LinkedIn, GitHub, Email, WhatsApp
Footer dengan copyright kecil bernuansa cream/pink

CATATAN DESAIN TAMBAHAN:

Gunakan rounded corners lembut, shadow tipis (soft luxury feel), transisi hover halus
Font judul: serif elegan (contoh: Playfair Display / Cormorant); font body: sans-serif clean (contoh: Poppins/Inter)
Warna aksen tombol: dusty pink / rose gold
Setiap section portfolio wajib punya area carousel gambar yang jelas dan mudah diganti dengan screenshot asli saya

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8d675369-6e14-434c-b422-68ffba711ecf).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
