import placeholderData from "@/assets/placeholder-data.jpg";
import placeholderGis from "@/assets/placeholder-gis.jpg";
import placeholderWeb from "@/assets/placeholder-web.jpg";

export const profile = {
  name: "Ariska Febrilianti",
  tagline: "Data Analyst | Turning Raw Data into Business Decisions",
  subTagline:
    "Dilengkapi skillset Frontend Web Developer sebagai nilai tambah dalam membangun dashboard & visualisasi data interaktif.",
  location: "Jakarta, Indonesia",
  email: "arskfbr@gmail.com",
  linkedin: "https://linkedin.com/in/ariskafebrilianti",
  linkedinLabel: "linkedin.com/in/ariskafebrilianti",
  github: "https://github.com/ariskafebrilianti",
  githubLabel: "github.com/ariskafebrilianti",
  whatsapp: "https://wa.me/6281234567890",
};

export const about =
  "Data Analyst dengan pengalaman langsung mengaudit dan mengolah data komersial skala besar di lebih dari 10 unit bisnis, mendeteksi anomali finansial, serta mengoptimalkan biaya operasional logistik hingga 15%–40% melalui analisis vendor dan riset rate berbasis data. Terbiasa bekerja dengan SQL (CTE, Window Functions, Aggregation), Python (Pandas, Seaborn), dan Excel tingkat lanjut (Power Query, Pivot Table, Advanced Formula) untuk membersihkan, memvalidasi, dan memvisualisasikan data menjadi insight yang actionable. Memegang sertifikasi kompetensi Analis Data dari BNSP (8 unit kompetensi). Dilengkapi kemampuan Frontend Web Development (React.js, TypeScript, Tailwind CSS) dan WebGIS (Leaflet.js) yang memberi nilai tambah dalam membangun dashboard interaktif dan visualisasi data berbasis web. Pendekatan kerja berorientasi pada hasil terukur dan efisiensi bisnis.";

export const skillGroups = [
  {
    title: "Data Analytics & BI",
    items: [
      "Data Cleansing",
      "Data Profiling",
      "Cohort & Retention Analysis",
      "Predictive Forecasting",
      "KPI Tracking",
    ],
  },
  {
    title: "Database & Query",
    items: ["SQL", "PostgreSQL", "MySQL", "CTE", "Window Functions", "JOIN"],
  },
  {
    title: "Programming",
    items: ["JavaScript (ES6+)", "TypeScript", "Python (Pandas, Seaborn)"],
  },
  {
    title: "Visualisasi & Tools",
    items: ["Excel Advanced", "Power BI", "Power Query", "Pivot Table"],
  },
  {
    title: "Frontend Development",
    items: ["React.js", "Vite", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Geospatial",
    items: ["WebGIS", "Leaflet.js", "OpenStreetMap API", "QGIS"],
  },
  {
    title: "Lainnya",
    items: ["Git/GitHub", "Figma", "Google Workspace", "Microsoft 365"],
  },
];

export const education = [
  {
    degree: "S1 Agroteknologi",
    school: "Universitas Jenderal Soedirman (UNSOED), Purwokerto",
    period: "2023 – 2025",
    note: "",
  },
  {
    degree: "D3 Perencanaan Sumberdaya Lahan",
    school: "Universitas Jenderal Soedirman (UNSOED), Purwokerto",
    period: "2020 – 2023",
    note: "Fokus SIG/GIS & analisis spasial",
  },
];

export const experience = [
  {
    role: "Project Development Canvassing Fresh — Intern",
    company: "PT Trans Retail Indonesia (CT Corp)",
    period: "Nov 2025 – Mei 2026",
    points: [
      "Audit data komersial pada 10+ unit bisnis dengan tingkat akurasi 99%.",
      "Analisis 88 vendor aktif yang memangkas biaya logistik 12%–40%.",
      "Standardisasi struktur data lintas unit bisnis.",
      "Kelola dashboard pemantauan untuk 15+ mitra eksternal.",
    ],
  },
  {
    role: "Operations Support & WebGIS Developer",
    company: "RMU Teaching Industry UNSOED",
    period: "Agu 2022 – Apr 2023",
    points: [
      "Membangun platform WebGIS interaktif (efisiensi rantai pasok +30%).",
      "Membangun database inventaris (anomali stok -15%).",
      "Simulasi procurement yang menekan biaya hingga -12%.",
    ],
  },
  {
    role: "Sekretaris Umum & Staf Birokestari",
    company: "GAMAIS UNSOED",
    period: "2021 – 2023",
    points: [
      "Merancang arsitektur pengarsipan digital organisasi.",
      "Koordinasi 5 departemen dan penyusunan Minutes of Meeting.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  category: "Data Analytics" | "Frontend/WebGIS";
  stackLine: string;
  images: { src: string; alt: string }[];
  overview: string;
  problem: string;
  methodology: string[];
  objectives?: string[];
  result: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "twp90",
    title: "Macroeconomic Dynamics & MSME Credit Risk Assessment (TWP90 Analytics)",
    category: "Data Analytics",
    stackLine: "Excel + MySQL + Power BI",
    images: [
      { src: placeholderData, alt: "Executive dashboard analisis risiko kredit TWP90" },
      { src: placeholderWeb, alt: "Struktur data warehouse dan pemodelan star schema" },
      { src: placeholderGis, alt: "Peta pemetaan risiko kredit per provinsi" },
    ],
    overview:
      "Analisis pengaruh kondisi ekonomi makro (BI Rate & inflasi) terhadap tingkat risiko kredit macet (TWP90 — Tingkat Wanprestasi >90 hari) pada industri Fintech P2P Lending di Indonesia, menggunakan data resmi OJK periode Juli 2024–Maret 2026.",
    problem:
      "Industri P2P Lending menjadi sumber pendanaan penting bagi UMKM, namun kualitas kreditnya sangat rentan terhadap fluktuasi makroekonomi. Proyek ini mengukur sejauh mana korelasi tersebut, sekaligus memetakan risiko kredit secara geografis (per provinsi) untuk mitigasi risiko.",
    methodology: [
      "Data Extraction & Preprocessing (Excel/Power Query): cleaning data mentah laporan OJK, penanganan missing values, unpivoting struktur data antar-bulan, ekstraksi format tanggal YYYY-MM.",
      "Data Warehousing & Transformation (MySQL): membangun relational database, JOIN antar tabel makro-mikro, membuat Views, kalkulasi KPI metrics via query terstruktur.",
      "Data Visualization & Dashboarding (Power BI): pemodelan data Star Schema, kalkulasi DAX (YTD, MoM, threshold logic), perancangan Interactive Executive Dashboard.",
    ],
    objectives: [
      "Mengukur stabilitas kredit nasional lewat tren TWP90 & TKB90.",
      "Evaluasi dampak suku bunga & inflasi terhadap fluktuasi rasio TWP90.",
      "Analisis penyerapan pendanaan sektor produktif (UMKM) vs konsumtif.",
      "Regional risk mapping — mengidentifikasi provinsi dengan risiko kredit tertinggi.",
    ],
    result:
      "Menghasilkan executive dashboard end-to-end yang menghubungkan indikator makroekonomi dengan kualitas kredit, serta peta risiko per provinsi sebagai dasar mitigasi risiko pendanaan UMKM.",
    stack: ["Microsoft Excel", "Power Query", "MySQL", "Power BI", "DAX", "Star Schema"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Sales & Customer Analytics",
    category: "Data Analytics",
    stackLine: "SQL, Python, Excel Dashboard",
    images: [
      { src: placeholderData, alt: "Dashboard Excel interaktif tren penjualan bulanan" },
      { src: placeholderWeb, alt: "Heatmap cohort retention 12 bulan dengan Python" },
      { src: placeholderGis, alt: "Kontribusi revenue per wilayah" },
    ],
    overview:
      "Analisis end-to-end data transaksi e-commerce ritel internasional dengan total gross sales lebih dari £10 juta, untuk memahami tren transaksi, segmentasi pelanggan, dan efisiensi produk.",
    problem:
      "Dataset transaksi mentah memiliki banyak anomali — kuantitas minus (retur), missing values pada CustomerID, dan struktur kolom yang belum siap dianalisis. Tujuannya menghasilkan insight strategis untuk pengambilan keputusan bisnis, khususnya menjelang peak season.",
    methodology: [
      "Data cleaning: menangani nilai kuantitas minus/retur, imputasi missing values pada CustomerID, pemisahan kolom transaksi.",
      "Cohort Retention Analysis menggunakan Python (Pandas & Seaborn) untuk memetakan retensi pelanggan selama 12 bulan dalam bentuk heatmap.",
      "Dashboard Excel interaktif: tren penjualan bulanan, top 5 produk best seller, kontribusi revenue per wilayah.",
    ],
    result:
      "Mengidentifikasi sub-kategori \u201cTables\u201d sebagai kontributor kerugian terbesar (-$17.725), pasar UK menyumbang lebih dari 85% revenue, serta rekomendasi alokasi safety stock untuk produk best seller (\u201cWorld War 2 Gliders\u201d) menjelang peak season.",
    stack: ["SQL", "Python (Pandas, Seaborn, Matplotlib)", "Excel Pivot Table", "Power Query"],
  },
  {
    id: "salaries",
    title: "Data Science Salaries & Compensation Analysis",
    category: "Data Analytics",
    stackLine: "SQL Analytics",
    images: [
      { src: placeholderData, alt: "Hasil kueri SQL benchmark kompensasi data science" },
      { src: placeholderWeb, alt: "Ringkasan gaji per experience level" },
    ],
    overview:
      "Analisis kueri SQL mendalam pada dataset gaji industri Data Science global untuk memetakan benchmark kompensasi.",
    problem:
      "Memberikan wawasan kompensasi yang objektif dan berbasis data bagi profesional data maupun tim HR/rekrutmen, khususnya untuk perencanaan jenjang karier dan negosiasi gaji.",
    methodology: [
      "Data quality check: memastikan integritas data dari NULL values di seluruh kolom variabel.",
      "Menghitung rata-rata gaji bulanan posisi Data Analyst berdasarkan experience level (Entry, Mid, Senior, Executive) dan jenis employment (Full-time, Part-time, Contract).",
      "Geographic arbitrage analysis: mengidentifikasi negara dengan kompensasi tertinggi untuk posisi entry–mid level.",
      "Menggunakan Common Table Expressions (CTE) dan LEFT JOIN untuk mengukur lonjakan kenaikan gaji dari tingkat Mid ke Senior antar tahun.",
    ],
    result:
      "Menyajikan pemetaan gaji yang jelas antar level pengalaman dan negara, membantu benchmarking kompensasi berbasis data aktual, bukan asumsi.",
    stack: ["SQL (PostgreSQL/MySQL)", "Data Aggregation", "CTE", "Data Cleansing"],
  },
  {
    id: "webgis-rice",
    title: "WebGIS Rice Distribution & Supply Chain Mapping System",
    category: "Frontend/WebGIS",
    stackLine: "JavaScript, Leaflet.js, QGIS",
    images: [
      { src: placeholderGis, alt: "Peta interaktif distribusi beras wilayah Banyumas" },
      { src: placeholderData, alt: "Analisis buffer radius 1 km titik konsumsi" },
      { src: placeholderWeb, alt: "Panel data supplier dan distributor" },
    ],
    overview:
      "Platform WebGIS interaktif untuk memetakan dan menganalisis rantai pasok serta distribusi beras RMU Teaching Industry UNSOED di wilayah Banyumas, mencakup 20+ konsumen, 5 distributor, dan 88 supplier.",
    problem:
      "Dibutuhkan alat visual berbasis data spasial untuk mendukung pengambilan keputusan distribusi yang lebih efisien dan berbasis lokasi, bukan estimasi manual.",
    methodology: [
      "Geospatial mapping titik konsumsi, pasar tradisional, dan ritel modern.",
      "Buffer & reach analysis dengan radius 1 km untuk mengukur potensi penetrasi pasar.",
      "Kalkulasi jarak & rute dari supplier ke pusat penggilingan untuk estimasi biaya pengiriman.",
    ],
    result:
      "Meningkatkan efisiensi analisis rantai pasok hingga 30%, akurasi pelacakan lokasi mencapai 90%, dan membantu efisiensi biaya logistik vendor hingga 12%.",
    stack: ["JavaScript", "Leaflet.js", "OpenStreetMap API", "QGIS"],
  },
  {
    id: "kanban",
    title: "Interactive Kanban Task Management Application",
    category: "Frontend/WebGIS",
    stackLine: "React.js, Vite, TypeScript",
    images: [
      { src: placeholderWeb, alt: "Board kanban dengan empat kolom status" },
      { src: placeholderData, alt: "Form penambahan tugas dengan deadline" },
    ],
    overview:
      "Aplikasi manajemen tugas (to-do list) interaktif berbasis Single Page Application (SPA) untuk membantu efisiensi alur kerja dan pelacakan progres proyek secara real-time.",
    problem:
      "Menyediakan tools sederhana namun fungsional untuk manajemen task pribadi/tim tanpa kompleksitas aplikasi enterprise.",
    methodology: [
      "Penambahan tugas lengkap dengan deadline dan deskripsi.",
      "Board status progres: Not Started, In Progress, Review/Waiting, Completed.",
      "Desain responsif dan antarmuka bersih.",
      "Pengujian unit komponen.",
    ],
    result:
      "Alur kerja yang lebih terlacak dengan antarmuka ringan, responsif, dan mudah dipakai lintas perangkat.",
    stack: ["React.js", "Vite", "TypeScript/JavaScript", "CSS Modules"],
  },
  {
    id: "rest-api",
    title: "Dynamic REST API Integration Apps (Get Pokemon & Get Pikachu)",
    category: "Frontend/WebGIS",
    stackLine: "JavaScript ES6+, REST API",
    images: [
      { src: placeholderWeb, alt: "Card karakter hasil render data API" },
      { src: placeholderData, alt: "Loading state saat pengambilan data asynchronous" },
    ],
    overview:
      "Serial aplikasi web frontend ringan yang dirancang untuk menguji integrasi REST API eksternal dan manipulasi DOM secara dinamis.",
    problem:
      "Melatih dan mendemonstrasikan kemampuan menghubungkan frontend dengan data eksternal secara asynchronous — skill dasar penting untuk integrasi dashboard data real-time di masa depan.",
    methodology: [
      "Pengambilan data asynchronous (Fetch API/AJAX) dari basis data publik.",
      "Render data dinamis dengan teknik array looping untuk card karakter.",
      "Feedback visual interaktif (loading state) saat aksi diklik.",
    ],
    result:
      "Integrasi API yang stabil dengan rendering dinamis dan feedback visual yang jelas bagi pengguna.",
    stack: ["JavaScript (ES6+)", "HTML5", "CSS3", "RESTful API Integration"],
  },
  {
    id: "rmu-profile",
    title: "RMU UNSOED Company Profile Website",
    category: "Frontend/WebGIS",
    stackLine: "HTML5, CSS3, JavaScript, Figma",
    images: [
      { src: placeholderWeb, alt: "Hero section website company profile RMU UNSOED" },
      { src: placeholderData, alt: "Galeri katalog produk" },
      { src: placeholderGis, alt: "Integrasi Google Maps lokasi toko" },
    ],
    overview:
      "Website profil perusahaan komersial yang responsif untuk memperkenalkan produk, operasional pascapanen, dan lokasi toko RMU Teaching Industry UNSOED.",
    problem:
      "Perusahaan membutuhkan kehadiran digital yang profesional untuk menjangkau pelanggan dan mitra bisnis secara lebih luas.",
    methodology: [
      "Hero section menarik dengan navigasi terstruktur (About, Products, Store, Contact).",
      "Galeri katalog produk terintegrasi dengan media sosial dan Google Maps lokasi toko.",
      "Tampilan cross-browser yang optimal di desktop maupun mobile.",
    ],
    result:
      "Kehadiran digital yang profesional dan responsif, memudahkan pelanggan menemukan produk serta lokasi toko.",
    stack: ["HTML5", "CSS3", "JavaScript", "Figma (UI/UX Prototyping)"],
  },
];

export const certifications = [
  {
    title: "Sertifikasi BNSP Analis Data",
    detail: "8 unit kompetensi",
  },
  {
    title: "Sertifikat Pemagangan KEMNAKER RI",
    detail: "Predikat Sangat Baik",
  },
  {
    title: "Frontend Developer Course",
    detail: "Progate",
  },
  {
    title: "AI for Work & Career Readiness",
    detail: "Google / Hacktiv8",
  },
  {
    title: "Data Analytics & Business Metrics Series",
    detail: "MySkill",
  },
  {
    title: "Excel Advanced Series",
    detail: "MySkill",
  },
];
