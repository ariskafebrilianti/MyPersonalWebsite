// --- 1. Import Gambar Ecommerce (3) ---
import ecommerce1 from "@/assets/ecommerce-1.jpg";
import ecommerce2 from "@/assets/ecommerce-2.jpg";
import ecommerce3 from "@/assets/ecommerce-3.jpg";

// --- 2. Import Gambar Salaries (2) ---
import salaries1 from "@/assets/salaries-1.jpg";
import salaries2 from "@/assets/salaries-2.jpg";

// --- 3. Import Gambar TWP90 (3) ---
import twp90_1 from "@/assets/twp90-1.jpg";
import twp90_2 from "@/assets/twp90-2.jpg";
import twp90_3 from "@/assets/twp90-3.jpg";

// --- 4. Import Gambar WebGIS Rice (3) ---
import webgis1 from "@/assets/webgis-1.jpg";
import webgis2 from "@/assets/webgis-2.jpg";
import webgis3 from "@/assets/webgis-3.jpg";

// --- 5. Import Gambar Kanban (3) ---
import kanban1 from "@/assets/kanban-1.jpg";
import kanban2 from "@/assets/kanban-2.jpg";
import kanban3 from "@/assets/kanban-3.jpg";

// --- 6. Import Gambar REST API (2) ---
import restApi1 from "@/assets/rest-api-1.jpg";
import restApi2 from "@/assets/rest-api-2.jpg";

// --- 7. Import Gambar RMU Profile (3) ---
import rmu1 from "@/assets/rmu-1.jpg";
import rmu2 from "@/assets/rmu-2.jpg";
import rmu3 from "@/assets/rmu-3.jpg";

export type Lang = "en" | "id";

export const profile = {
  name: "Ariska Febrilianti",
  location: "Jakarta, Indonesia",
  email: "arskfbr@gmail.com",
  linkedin: "https://linkedin.com/in/ariskafebrilianti",
  linkedinLabel: "linkedin.com/in/ariskafebrilianti",
  github: "https://github.com/ariskafebrilianti",
  githubLabel: "github.com/ariskafebrilianti",
  whatsapp: "https://wa.me/6281215841637",
};

/** Swap these with real screenshots – order defines carousel order. */
export const projectImages: Record<string, string[]> = {
  ecommerce: [ecommerce1, ecommerce2, ecommerce3],
  salaries: [salaries1, salaries2],
  twp90: [twp90_1, twp90_2, twp90_3],
  "webgis-rice": [webgis1, webgis2, webgis3],
  kanban: [kanban1, kanban2, kanban3],
  "rest-api": [restApi1, restApi2],
  "rmu-profile": [rmu1, rmu2, rmu3],
};

export type ProjectCategory = "data" | "frontend";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  stackLine: string;
  overview: string;
  problem: string;
  methodology: string[];
  objectives?: string[];
  result: string;
  stack: string[];
  demoUrl?: string;
  driveUrl?: string;
};

export type Dictionary = {
  nav: { home: string; about: string; education: string; experience: string; portfolio: string; contact: string };
  langLabel: string;
  hero: {
    heading: string;
    tagline: string;
    subTagline: string;
    ctaPortfolio: string;
    ctaContact: string;
    photoAlt: string;
  };
  labels: {
    categoryData: string;
    categoryFrontend: string;
    overview: string;
    problem: string;
    methodology: string;
    objectives: string;
    result: string;
    stack: string;
    viewDetail: string;
    hideDetail: string;
    slide: string;
    viewDemo: string;
  viewDrive: string;
    
  };
  about: { eyebrow: string; heading: string; text: string; stats: { value: string; label: string }[] };
  skills: { eyebrow: string; heading: string; description: string; groups: { title: string; items: string[] }[] };
  education: {
    eyebrow: string;
    heading: string;
    items: { degree: string; school: string; period: string; note?: string }[];
  };
  experience: {
    eyebrow: string;
    heading: string;
    items: { role: string; company: string; period: string; points: string[] }[];
  };
  portfolio: { eyebrow: string; heading: string; description: string; projects: Project[] };
  certifications: { eyebrow: string; heading: string; items: { title: string; detail: string }[] };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
    cta: string;
    mailSubject: string;
    mailBody: string;
    formNote: string;
    name: string;
    namePlaceholder: string;
    email: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    toast: string;
    toastDetail: string;
    whatsapp: string;
  };
  footer: { role: string };
};

export const content: Record<Lang, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      experience: "Experience",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    langLabel: "EN",
    hero: {
      heading: "Ariska Febrilianti",
      tagline: "Data Analyst | Turning Raw Data into Business Decisions",
      subTagline:
        "Complemented by a Frontend Web Development skillset — an added strength in building interactive dashboards and data visualizations.",
      ctaPortfolio: "View Portfolio",
      ctaContact: "Contact Me",
      photoAlt: "Portrait cutout of Ariska Febrilianti",
    },
    labels: {
      categoryData: "Data Analytics",
      categoryFrontend: "Frontend / WebGIS",
      overview: "Overview",
      problem: "Problem & Purpose",
      methodology: "Methodology & Features",
      objectives: "Business & Analytical Objectives",
      result: "Result",
      stack: "Tech Stack",
      viewDetail: "View Details",
      hideDetail: "Hide Details",
      slide: "Slide",
   viewDemo: "Live Demo / Web",
    viewDrive: "View Drive Files",
    },
    about: {
      eyebrow: "About",
      heading: "About Me",
      text: "Data Analyst with hands-on experience auditing and processing large-scale commercial data across 10+ business units, detecting financial anomalies, and optimizing logistics operating costs by 15%–40% through data-driven vendor analysis and rate research. Skilled in SQL (CTEs, Window Functions, Aggregations), Python (Pandas, Seaborn), and advanced Excel (Power Query, Pivot Tables, Advanced Formulas) to clean, validate, and transform data into actionable insights. Holds a Data Analyst competency certification from BNSP (8 competency units). Complemented by Frontend Web Development skills (React.js, TypeScript, Tailwind CSS) and WebGIS expertise (Leaflet.js), adding value in building interactive dashboards and web-based data visualizations. Results-driven approach focused on measurable outcomes and business efficiency.",
      stats: [
        { value: "10+", label: "Business units audited" },
        { value: "99%", label: "Commercial data accuracy" },
        { value: "12–40%", label: "Logistics cost efficiency" },
        { value: "8", label: "BNSP competency units" },
      ],
    },
    skills: {
      eyebrow: "Skills",
      heading: "Skills & Toolkit",
      description:
        "End-to-end data analysis capability combined with the skills to build web-based interfaces and visualizations.",
      groups: [
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
          title: "Database & Querying",
          items: ["SQL", "PostgreSQL", "MySQL", "CTEs", "Window Functions", "JOINs"],
        },
        {
          title: "Programming",
          items: ["JavaScript (ES6+)", "TypeScript"],
        },
        {
          title: "Visualization & Tools",
          items: ["Advanced Excel", "Power BI", "Power Query", "Pivot Tables"],
        },
        {
          title: "Frontend Development",
          items: ["React.js", "Vite", "HTML5", "CSS3", "Tailwind CSS"],
        },
        { title: "Geospatial", items: ["WebGIS", "Leaflet.js", "OpenStreetMap API", "QGIS"] },
        { title: "Other", items: ["Git/GitHub", "Figma", "Google Workspace", "Microsoft 365"] },
      ],
    },
    education: {
      eyebrow: "Education",
      heading: "Education",
      items: [
        {
          degree: "B.Sc. Agrotechnology",
          school: "Jenderal Soedirman University (UNSOED), Purwokerto",
          period: "2023 – 2025",
        },
        {
          degree: "D3 Land Resource Planning",
          school: "Jenderal Soedirman University (UNSOED), Purwokerto",
          period: "2020 – 2023",
          note: "Focus on GIS & spatial analysis",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      heading: "Work Experience",
      items: [
        {
          role: "Project Development Canvassing Fresh — Intern",
          company: "PT Trans Retail Indonesia (CT Corp)",
          period: "Nov 2025 – May 2026",
          points: [
            "Audited commercial data across 10+ business units with 99% accuracy.",
            "Analyzed 88 active vendors, cutting logistics costs by 12%–40%.",
            "Standardized data structures across business units.",
            "Managed a monitoring dashboard for 15+ external partners.",
          ],
        },
        {
          role: "Operations Support & WebGIS Developer",
          company: "RMU Teaching Industry UNSOED",
          period: "Aug 2022 – Apr 2023",
          points: [
            "Built an interactive WebGIS platform (+30% supply chain efficiency).",
            "Designed an inventory database (-15% stock anomalies).",
            "Formulated procurement simulations that cut costs by up to 12%.",
          ],
        },
        {
          role: "General Secretary & Bureaucracy Staff",
          company: "GAMAIS UNSOED",
          period: "2021 – 2023",
          points: [
            "Designed the organization's digital archiving architecture.",
            "Coordinated 5 departments and prepared Minutes of Meeting.",
          ],
        },
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      heading: "Portfolio",
      description:
        "Ordered from the projects most relevant to a Data Analyst role through to Frontend/WebGIS work. Click “View Details” to read the problem, methodology, and results.",
      projects: [
        {
          id: "ecommerce",
          title: "E-Commerce Sales & Customer Analytics",
          category: "data",
          stackLine: "SQL, Python, Excel Dashboard",
          driveUrl: "https://drive.google.com/drive/folders/1fyzFJmTJrM7OIlAQaeKUj87xGWwvVH8X?usp=drive_link",
          overview:
            "End-to-end analysis of international e-commerce retail transaction data totaling over £10M in gross sales, aimed at understanding transaction trends, customer segmentation, and product efficiency.",
          problem:
            "Raw transaction data contained numerous anomalies — negative quantities (returns), missing CustomerID values, and a column structure not yet ready for analysis. The goal was to generate strategic business insights, particularly ahead of peak season.",
          methodology: [
            "Data cleaning: handled negative quantities/returns, imputed missing CustomerID values, split transaction columns.",
            "Cohort Retention Analysis using Python (Pandas & Seaborn) to map 12-month customer retention as a heatmap.",
            "Interactive Excel dashboard: monthly sales trends, top 5 best-selling products, revenue contribution by region.",
          ],
          result:
            "Identified the “Tables” sub-category as the largest profit loss contributor (-$17,725), the UK market accounting for over 85% of revenue, and recommended safety stock allocation for the best-selling product (“World War 2 Gliders”) ahead of peak season.",
          stack: [
            "SQL",
            "Python (Pandas, Seaborn, Matplotlib)",
            "Excel Pivot Tables",
            "Power Query",
          ],
        },
        {
          id: "salaries",
          title: "Data Science Salaries & Compensation Analysis",
          category: "data",
          stackLine: "SQL Analytics",
          driveUrl: "https://drive.google.com/file/d/1Okp2Tsq96bxGZuj3uF--RgZjuiGVSfx2/view?usp=sharing",
          overview:
            "In-depth SQL query analysis on a global Data Science salary dataset to map compensation benchmarks.",
          problem:
            "Provide objective, data-driven compensation insights for data professionals and HR/recruitment teams, particularly for career planning and salary negotiation.",
          methodology: [
            "Data quality check: ensured data integrity by checking for NULL values across all variable columns.",
            "Calculated average monthly salary for Data Analyst positions by experience level (Entry, Mid, Senior, Executive) and employment type (Full-time, Part-time, Contract).",
            "Geographic arbitrage analysis: identified countries offering the highest compensation for entry–mid level positions.",
            "Used Common Table Expressions (CTEs) and LEFT JOIN to measure year-over-year salary jumps from Mid to Senior level.",
          ],
          result:
            "Delivered a clear salary mapping across experience levels and countries, supporting data-driven compensation benchmarking rather than assumption-based estimates.",
          stack: ["SQL (PostgreSQL/MySQL)", "Data Aggregation", "CTEs", "Data Cleansing"],
        },
        {
          id: "twp90",
          title: "Macroeconomic Dynamics & MSME Credit Risk Assessment (TWP90 Analytics)",
          category: "data",
          stackLine: "Excel + MySQL + Power BI",
          driveUrl: "https://drive.google.com/drive/folders/1eV_psvmHXOnPlDQzC9lhZ0Ygqu_xZckZ?usp=sharing",
          overview:
            "Analysis of how macroeconomic conditions (BI Rate & inflation) affect credit default risk (TWP90 — 90+ day default rate) in Indonesia's P2P Lending fintech industry, using official OJK data from July 2024–March 2026.",
          problem:
            "The P2P Lending industry is a critical funding source for MSMEs, yet its credit quality is highly sensitive to macroeconomic fluctuations. This project measured that correlation and mapped credit risk geographically (by province) for risk mitigation.",
          methodology: [
            "Data Extraction & Preprocessing (Excel/Power Query): cleaned raw OJK report data, handled missing values, unpivoted month-over-month structures, extracted YYYY-MM date formats.",
            "Data Warehousing & Transformation (MySQL): built a relational database, joined macro-micro tables, created Views, calculated KPI metrics via structured queries.",
            "Data Visualization & Dashboarding (Power BI): Star Schema data model, DAX calculations (YTD, MoM, threshold logic), interactive executive dashboard design.",
          ],
          objectives: [
            "Measure national credit stability through TWP90 & TKB90 trends.",
            "Evaluate the impact of interest rates & inflation on TWP90 fluctuations.",
            "Analyze funding absorption in productive (MSME) vs. consumptive sectors.",
            "Regional risk mapping — identify provinces with the highest credit risk.",
          ],
          result:
            "Produced an end-to-end executive dashboard linking macroeconomic indicators to credit quality, plus a province-level risk map as a basis for mitigating MSME funding risk.",
          stack: ["Microsoft Excel", "Power Query", "MySQL", "Power BI", "DAX", "Star Schema"],
        },
        {
          id: "webgis-rice",
          title: "WebGIS Rice Distribution & Supply Chain Mapping System",
          category: "frontend",
          stackLine: "JavaScript, Leaflet.js, QGIS",
          demoUrl: "https://ariskafebrilianti.github.io/webgis/",
          overview:
            "An interactive WebGIS platform mapping and analyzing the rice supply chain and distribution network of RMU Teaching Industry UNSOED in the Banyumas region, covering 20+ consumers, 5 distributors, and 88 suppliers.",
          problem:
            "A spatial-data-driven visual tool was needed to support more efficient, location-based distribution decisions rather than manual estimation.",
          methodology: [
            "Geospatial mapping of consumption points, traditional markets, and modern retail outlets.",
            "Buffer & reach analysis with a 1 km radius to measure market penetration potential.",
            "Distance & route calculation from suppliers to the milling center to estimate shipping costs.",
          ],
          result:
            "Improved supply chain analysis efficiency by up to 30%, achieved 90% location tracking accuracy, and helped reduce vendor logistics costs by up to 12%.",
          stack: ["JavaScript", "Leaflet.js", "OpenStreetMap API", "QGIS"],
        },
        {
          id: "kanban",
          title: "Interactive Kanban Task Management Application",
          category: "frontend",
          stackLine: "React.js, Vite, TypeScript",
          demoUrl: "https://ariskafebrilianti.github.io/Kanban-App/",
          overview:
            "An interactive task management (to-do list) application built as a Single Page Application (SPA) to support workflow efficiency and real-time project progress tracking.",
          problem:
            "Provide a simple yet functional tool for personal/team task management without the complexity of enterprise-grade applications.",
          methodology: [
            "Task creation with deadlines and descriptions.",
            "Progress status board: Not Started, In Progress, Review/Waiting, Completed.",
            "Responsive design and a clean interface.",
            "Component unit testing.",
          ],
          result:
            "A more traceable workflow with a lightweight, responsive interface that is easy to use across devices.",
          stack: ["React.js", "Vite", "TypeScript/JavaScript", "CSS Modules"],
        },
        {
          id: "rest-api",
          title: "Dynamic REST API Integration Apps (Get Pokemon & Get Pikachu)",
          category: "frontend",
          stackLine: "JavaScript ES6+, REST API",
          demoUrl: "https://ariskafebrilianti.github.io/getPokemon/",
          overview:
            "A series of lightweight frontend web applications designed to test external REST API integration and dynamic DOM manipulation.",
          problem:
            "Practice and demonstrate the ability to connect a frontend to external data asynchronously — a foundational skill for future real-time data dashboard integrations.",
          methodology: [
            "Asynchronous data fetching (Fetch API/AJAX) from public databases.",
            "Dynamic data rendering using array looping for character cards.",
            "Interactive visual feedback (loading state) on button actions.",
          ],
          result:
            "Stable API integration with dynamic rendering and clear visual feedback for users.",
          stack: ["JavaScript (ES6+)", "HTML5", "CSS3", "RESTful API Integration"],
        },
        {
          id: "rmu-profile",
          title: "RMU UNSOED Company Profile Website",
          category: "frontend",
          stackLine: "HTML5, CSS3, JavaScript, Figma",
          demoUrl: "https://ariskafebrilianti.github.io/TeachingIndustryUNSOED/",
          overview:
            "A responsive company profile website introducing products, post-harvest operations, and store locations for RMU Teaching Industry UNSOED.",
          problem:
            "The company needed a professional digital presence to reach a wider customer and business partner base.",
          methodology: [
            "Engaging hero section with structured navigation (About, Products, Store, Contact).",
            "Product catalog gallery integrated with social media and a Google Maps store location.",
            "Optimal cross-browser display on both desktop and mobile.",
          ],
          result:
            "A professional, responsive digital presence that makes it easy for customers to find products and store locations.",
          stack: ["HTML5", "CSS3", "JavaScript", "Figma (UI/UX Prototyping)"],
        },
      ],
    },
    certifications: {
      eyebrow: "Certifications",
      heading: "Certifications & Training",
      items: [
        { title: "BNSP Data Analyst Certification", detail: "8 competency units" },
        { title: "KEMNAKER RI Internship Certificate", detail: "Excellent rating" },
        { title: "Frontend Developer Course", detail: "Progate" },
        { title: "AI for Work & Career Readiness", detail: "Google / Hacktiv8" },
        { title: "Data Analytics & Business Metrics Series", detail: "MySkill" },
        { title: "Excel Advanced Series", detail: "MySkill" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's Connect",
      description:
        "Open to Data Analyst roles, analytics projects, and interactive dashboard development.",
      cta: "Let's Collaborate",
      mailSubject: "Let's Collaborate",
      mailBody: "Hi Ariska,",
      formNote: "Prefer a form? Send a message here instead.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Write your message…",
      send: "Send Message",
      sending: "Sending…",
      toast: "Thank you! Your message has been noted.",
      toastDetail: "I'll reply to your email shortly — or reach me directly at",
      whatsapp: "Chat via WhatsApp",
    },
    footer: { role: "Data Analyst · Jakarta, Indonesia" },
  },

  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      education: "Pendidikan",
      experience: "Pengalaman",
      portfolio: "Portofolio",
      contact: "Kontak",
    },
    langLabel: "IND",
    hero: {
      heading: "Ariska Febrilianti",
      tagline: "Data Analyst | Mengubah Data Mentah Menjadi Keputusan Bisnis",
      subTagline:
        "Dilengkapi skillset Frontend Web Developer sebagai nilai tambah dalam membangun dashboard & visualisasi data interaktif.",
      ctaPortfolio: "Lihat Portofolio",
      ctaContact: "Hubungi Saya",
      photoAlt: "Foto potret Ariska Febrilianti",
    },
    labels: {
      categoryData: "Data Analytics",
      categoryFrontend: "Frontend / WebGIS",
      overview: "Ringkasan",
      problem: "Problem & Tujuan",
      methodology: "Metodologi & Fitur",
      objectives: "Tujuan Bisnis & Analitis",
      result: "Hasil",
      stack: "Tech Stack",
      viewDetail: "Lihat Detail",
      hideDetail: "Sembunyikan Detail",
      slide: "Slide",
      viewDemo: "Lihat Demo / Web",
    viewDrive: "Lihat Berkas Drive",
    },
    about: {
      eyebrow: "Tentang",
      heading: "Tentang Saya",
      text: "Data Analyst dengan pengalaman langsung mengaudit dan mengolah data komersial skala besar di lebih dari 10 unit bisnis, mendeteksi anomali finansial, serta mengoptimalkan biaya operasional logistik hingga 15%–40% melalui analisis vendor dan riset rate berbasis data. Terbiasa bekerja dengan SQL (CTE, Window Functions, Aggregation), Python (Pandas, Seaborn), dan Excel tingkat lanjut (Power Query, Pivot Table, Advanced Formula) untuk membersihkan, memvalidasi, dan memvisualisasikan data menjadi insight yang actionable. Memegang sertifikasi kompetensi Analis Data dari BNSP (8 unit kompetensi). Dilengkapi kemampuan Frontend Web Development (React.js, TypeScript, Tailwind CSS) dan WebGIS (Leaflet.js) yang memberi nilai tambah dalam membangun dashboard interaktif dan visualisasi data berbasis web. Pendekatan kerja berorientasi pada hasil terukur dan efisiensi bisnis.",
      stats: [
        { value: "10+", label: "Unit bisnis diaudit" },
        { value: "99%", label: "Akurasi data komersial" },
        { value: "12–40%", label: "Efisiensi biaya logistik" },
        { value: "8", label: "Unit kompetensi BNSP" },
      ],
    },
    skills: {
      eyebrow: "Keahlian",
      heading: "Keahlian & Toolkit",
      description:
        "Kombinasi kemampuan analisis data end-to-end dengan keterampilan membangun antarmuka dan visualisasi berbasis web.",
      groups: [
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
          title: "Pemrograman",
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
        { title: "Geospasial", items: ["WebGIS", "Leaflet.js", "OpenStreetMap API", "QGIS"] },
        { title: "Lainnya", items: ["Git/GitHub", "Figma", "Google Workspace", "Microsoft 365"] },
      ],
    },
    education: {
      eyebrow: "Pendidikan",
      heading: "Pendidikan",
      items: [
        {
          degree: "S1 Agroteknologi",
          school: "Universitas Jenderal Soedirman (UNSOED), Purwokerto",
          period: "2023 – 2025",
        },
        {
          degree: "D3 Perencanaan Sumberdaya Lahan",
          school: "Universitas Jenderal Soedirman (UNSOED), Purwokerto",
          period: "2020 – 2023",
          note: "Fokus SIG/GIS & analisis spasial",
        },
      ],
    },
    experience: {
      eyebrow: "Pengalaman",
      heading: "Pengalaman Kerja",
      items: [
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
            "Menyusun simulasi procurement yang menekan biaya hingga 12%.",
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
      ],
    },
    portfolio: {
      eyebrow: "Portofolio",
      heading: "Portofolio",
      description:
        "Disusun dari proyek paling relevan untuk peran Data Analyst menuju proyek Frontend/WebGIS. Klik “Lihat Detail” untuk membaca problem, metodologi, dan hasilnya.",
      projects: [
        {
          id: "ecommerce",
          title: "E-Commerce Sales & Customer Analytics",
          category: "data",
          stackLine: "SQL, Python, Excel Dashboard",
          driveUrl: "https://drive.google.com/drive/folders/1fyzFJmTJrM7OIlAQaeKUj87xGWwvVH8X?usp=drive_link",
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
            "Mengidentifikasi sub-kategori “Tables” sebagai kontributor kerugian terbesar (-$17.725), pasar UK menyumbang lebih dari 85% revenue, serta rekomendasi alokasi safety stock untuk produk best seller (“World War 2 Gliders”) menjelang peak season.",
          stack: ["SQL", "Python (Pandas, Seaborn, Matplotlib)", "Excel Pivot Table", "Power Query"],
        },
        {
          id: "salaries",
          title: "Data Science Salaries & Compensation Analysis",
          category: "data",
          stackLine: "SQL Analytics",
          driveUrl: "https://drive.google.com/file/d/1Okp2Tsq96bxGZuj3uF--RgZjuiGVSfx2/view?usp=sharing",
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
          id: "twp90",
          title: "Macroeconomic Dynamics & MSME Credit Risk Assessment (TWP90 Analytics)",
          category: "data",
          stackLine: "Excel + MySQL + Power BI",
          driveUrl: "https://drive.google.com/drive/folders/1eV_psvmHXOnPlDQzC9lhZ0Ygqu_xZckZ?usp=sharing",
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
          id: "webgis-rice",
          title: "WebGIS Rice Distribution & Supply Chain Mapping System",
          category: "frontend",
          stackLine: "JavaScript, Leaflet.js, QGIS",
          demoUrl: "https://ariskafebrilianti.github.io/webgis/",
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
          category: "frontend",
          stackLine: "React.js, Vite, TypeScript",
          demoUrl: "https://ariskafebrilianti.github.io/Kanban-App/",
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
          category: "frontend",
          stackLine: "JavaScript ES6+, REST API",
          demoUrl: "https://ariskafebrilianti.github.io/getPokemon/",
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
          category: "frontend",
          stackLine: "HTML5, CSS3, JavaScript, Figma",
          demoUrl: "https://ariskafebrilianti.github.io/TeachingIndustryUNSOED/",
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
      ],
    },
    certifications: {
      eyebrow: "Sertifikasi",
      heading: "Sertifikasi & Pelatihan",
      items: [
        { title: "Sertifikasi BNSP Analis Data", detail: "8 unit kompetensi" },
        { title: "Sertifikat Pemagangan KEMNAKER RI", detail: "Predikat Sangat Baik" },
        { title: "Frontend Developer Course", detail: "Progate" },
        { title: "AI for Work & Career Readiness", detail: "Google / Hacktiv8" },
        { title: "Data Analytics & Business Metrics Series", detail: "MySkill" },
        { title: "Excel Advanced Series", detail: "MySkill" },
      ],
    },
    contact: {
      eyebrow: "Kontak",
      heading: "Mari Terhubung",
      description:
        "Terbuka untuk peran Data Analyst, proyek analitik, maupun pengembangan dashboard interaktif.",
      cta: "Mari Berkolaborasi",
      mailSubject: "Mari Berkolaborasi",
      mailBody: "Hai Ariska,",
      formNote: "Lebih suka lewat formulir? Kirim pesan di sini.",
      name: "Nama",
      namePlaceholder: "Nama Anda",
      email: "Email",
      message: "Pesan",
      messagePlaceholder: "Tulis pesan Anda…",
      send: "Kirim Pesan",
      sending: "Mengirim…",
      toast: "Terima kasih! Pesan Anda sudah tercatat.",
      toastDetail: "Saya akan membalas ke email Anda secepatnya — atau hubungi langsung di",
      whatsapp: "Chat via WhatsApp",
    },
    footer: { role: "Data Analyst · Jakarta, Indonesia" },
  },
};