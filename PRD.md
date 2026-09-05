# Product Requirements Document (PRD)
# Website Portofolio Pribadi Adam Hidayat (Creative Portfolio Redesign)

---

## 1. Executive Summary

### 1.1 Problem Statement
Portofolio web Adam Hidayat sebelumnya (`damz-projects.vercel.app`) memiliki konten teknis dan kredensial yang kaya (4+ tahun pengalaman DBA di perbankan, 6 sertifikasi Oracle, tech notes), namun disajikan dengan struktur layout konvensional berbasis teks panjang yang kurang menonjolkan visual storytelling, pengalaman interaktif modern, dan diferensiasi personal brand yang kuat di mata rekruter, hiring manager industri perbankan/fintech, maupun komunitas teknologi.

### 1.2 Proposed Solution
Membangun ulang website portofolio menggunakan inspirasi desain editorial minimalis **Webild — "Creative Portfolio"** dengan mempertahankan seluruh konten profesional asli milik Adam. Fitur signature utama adalah **Floating Pill Header Nav**, **Hero Visual dengan Stacked/Tilted Cards**, dan **Scroll-Linked Transition (Hero → Selected Work/Projects)** menggunakan Framer Motion, dilengkapi galeri sertifikasi (lightbox), showcase pencapaian kunci, serta direktori artikel Tech Notes & Life.

### 1.3 Success Criteria
1. **Lighthouse Score**: Nilai ≥ 90 untuk Performance, Accessibility, Best Practices, dan SEO.
2. **Engagement & Interaction**: Transisi scroll-linked Hero ke Selected Work berjalan mulus (60 FPS) di desktop dan memiliki fallback adaptif/tanpa lag di mobile.
3. **Conversion / Action**: Keterlihatan CTA utama ("Download CV" dan "Contact") meningkat dengan klik langsung ke dokumen CV PDF (`/CV/Adam_Hidayat_DBA_CV.pdf`) atau form kontak.
4. **Content Continuity**: 100% konten blog (Tech Notes dan Life) serta arsitektur slug (`/tech/[slug]`, `/life/[slug]`) tetap utuh tanpa broken links.
5. **Full Responsiveness**: 100% layout dan animasi adaptif di viewport Mobile (360px+), Tablet (768px+), dan Desktop (1024px, 1440px+).

---

## 2. User Experience & Functionality

### 2.1 User Personas

1. **Tech Recruiter / Talent Acquisition (Perbankan / FinTech)**
   - *Tujuan*: Memverifikasi kualifikasi, pengalaman DBA, sertifikasi resmi Oracle, dan mengunduh CV dalam waktu < 60 detik.
   - *Pain Point*: Bosan dengan resume teks standar yang monoton; butuh ringkasan visual yang terstruktur, kredibel, dan cepat diakses.

2. **Hiring Manager / Head of Infrastructure / Lead DBA**
   - *Tujuan*: Menguji kedalaman teknis kandidat (deep-dive query tuning, arsitektur RAC, disaster recovery Data Guard, penanganan insiden produksi).
   - *Pain Point*: Klaim resume sering kali sulit diverifikasi tanpa studi kasus nyata atau technical writing.

3. **Komunitas Database Administrator & Pembaca Blog**
   - *Tujuan*: Mencari script SQL/Oracle siap pakai, tips troubleshooting database perbankan, dan membaca cerita kehidupan personal (hiking, refleksi).

---

### 2.2 User Stories & Acceptance Criteria

#### Story 1: Floating Pill Navigation
*Sebagai pengunjung, saya ingin menu navigasi yang ringkas, modern, dan selalu mudah dijangkau di bagian atas tanpa menutupi konten.*
- **AC 1.1**: Floating pill navigation tampil melayang (*fixed*) di bagian atas tengah layar, menampilkan avatar, nama "Adam Hidayat", dan tombol `+` menu.
- **AC 1.2**: Mengklik tombol `+` membuka modal/card navigasi elegan (Work, About, Certifications, Blog, Contact) dengan ikon panah keluar (`↗`) dan tombol aksi kontak.
- **AC 1.3**: Menu dapat ditutup menggunakan tombol close (`×`), tombol `Esc`, atau klik di luar modal (backdrop click).
- **AC 1.4**: Responsif dan tetap proporsional pada layar ponsel.

#### Story 2: Hero Section & CTA
*Sebagai rekruter, saya ingin langsung mengetahui siapa Adam, keahlian utamanya, status ketersediaan kerjanya, dan dapat segera mengunduh CV.*
- **AC 2.1**: Terdapat badge status ketersediaan dengan indikator dot hijau: *"Open to opportunities"*.
- **AC 2.2**: Headline kuat: *"Hi, I'm Adam Hidayat — Database Administrator."*
- **AC 2.3**: Deskripsi ringkas 4+ tahun pengalaman di Oracle, SQL Server, MySQL, PostgreSQL di industri perbankan.
- **AC 2.4**: Tombol CTA utama *"Download CV"* langsung men-download / membuka `/CV/Adam_Hidayat_DBA_CV.pdf`.
- **AC 2.5**: Tombol CTA sekunder mengarah ke section kontak atau form email.
- **AC 2.6**: Stat counter: `4+ Years DBA`, `6 Oracle Certs`, `Banking Industry`.

#### Story 3: Scroll-Linked Card Transition (Hero → Selected Work)
*Sebagai pengunjung, saya ingin merasakan transisi visual yang seamless dan memukau saat scroll dari Hero ke Selected Work.*
- **AC 3.1**: Di Hero section, 3 kartu foto/showcase ditampilkan bertumpuk dan miring (stacked & tilted) di sisi kanan desktop.
- **AC 3.2**: Saat user melakukan scroll ke bawah, kartu-kartu tersebut tertahan (*pinned*), perlahan berotasi ke sudut 0°, dan merenggang secara proporsional.
- **AC 3.3**: Kartu "mendarat" sempurna menjadi grid 3-kolom pada section *"Projects That Speak for Themselves"* (Key Achievements).
- **AC 3.4**: Heading section muncul secara halus (*fade-in & slide-up*) di balik/bawah kartu yang sedang bertransisi.
- **AC 3.5**: Mematuhi `prefers-reduced-motion` untuk aksesibilitas (fallback langsung ke grid statis tanpa animasi transform berat jika sistem meminta reduce motion).
- **AC 3.6**: Tidak ada layout thrashing / drop FPS yang signifikan di perangkat mobile.

#### Story 4: Key Achievements Showcase
*Sebagai hiring manager, saya ingin melihat ringkasan pencapaian konkret Adam di database perbankan.*
- **AC 4.1**: 3 pencapaian utama ditampilkan dalam kartu grid:
  1. *Production Database Upgrade* (Oracle 12c ke 19c patch 19.27).
  2. *Performance Optimization* (Optimasi bottleneck batch query > 99%).
  3. *International Training* (Pelatihan DBA intensif di Kantor Pusat IBK, Korea Selatan).
- **AC 4.2**: Setiap kartu memiliki tag kategori, visual representatif, judul, dan ringkasan dampak bisnis/teknis.

#### Story 5: About Section (Editorial Quote + Portrait)
*Sebagai pengunjung, saya ingin membaca latar belakang dan filosofi kerja Adam dengan format editorial yang elegan.*
- **AC 5.1**: Split-layout: Sisi kiri berupa Quote Card dengan ikon kutipan `”`, ringkasan filosofi profesional, dan nama.
- **AC 5.2**: Sisi kanan berupa foto potret profesional Adam dengan pill link sosial (LinkedIn, GitHub, Instagram, Email).
- **AC 5.3**: Tombol menuju halaman `/about` lengkap untuk membaca biografi panjang.

#### Story 6: Certifications Showcase & Lightbox Preview
*Sebagai rekruter, saya ingin memverifikasi keaslian sertifikasi Oracle Adam beserta dokumen resminya.*
- **AC 6.1**: Daftar 6 sertifikasi Oracle ditampilkan dalam kartu rapi dengan preview gambar sertifikat.
- **AC 6.2**: Mengklik kartu sertifikat membuka Lightbox Modal beresolusi tinggi sehingga teks sertifikat dapat dibaca jelas.
- **AC 6.3**: Lightbox mendukung tombol navigasi next/prev, zoom, dan close (`Esc`).

#### Story 7: Tech Notes & Life (Blog Showcase & Navigation)
*Sebagai sesama engineer atau pembaca, saya ingin menjelajahi catatan teknis dan cerita personal.*
- **AC 7.1**: Card navigasi 2 pilar konten: **Tech Notes** (Engineering) dan **Life** (Personal/Hiking/Travel).
- **AC 7.2**: Menampilkan 3-4 artikel terbaru dengan tag, tanggal, dan estimasi waktu baca.
- **AC 7.3**: Fitur pencarian dan filter tag yang responsif di halaman listing `/tech` dan `/life`.

#### Story 8: Contact Form & Social Connect
*Sebagai calon klien atau rekruter, saya ingin dapat menghubungi Adam melalui formulir web atau email langsung.*
- **AC 8.1**: Formulir kontak interaktif (Nama, Email, Pesan) dengan validasi form.
- **AC 8.2**: Link langsung ke email `adamhdyt11@gmail.com` dan profil sosial.

---

### 2.3 Non-Goals (Out of Scope)
- **Bukan CMS Backend Baru**: Tidak membangun sistem database CMS custom baru dari nol; tetap menggunakan Markdown/MDX parser lokal (`content/tech/*.mdx` & `content/life/*.mdx`) yang terbukti cepat dan stabil.
- **Bukan Web Builder Proprietary**: Tidak menggunakan builder tertutup Webild/Wix; diimplementasikan 100% menggunakan native Next.js 16 (App Router), Tailwind CSS v4, dan Framer Motion.
- **Bukan Penulisan Artikel Baru**: Fokus pada restrukturisasi UI/UX dan presentasi konten; artikel blog menggunakan konten yang sudah ada.

---

## 3. Design System & Visual Specification

### 3.1 Layout & Breakpoints
- **Container Max-Width**: `1280px` (desktop), padding horizontal adaptif `16px` (mobile), `32px` (tablet), `48px` (desktop).
- **Grid Layout**:
  - Hero Cards: Stacked di mobile, Scroll-linked transforms di desktop (≥ 1024px).
  - Selected Work: 1 kolom di mobile, 2 kolom di tablet, 3 kolom di desktop.
  - About / Quote: Stacked vertikal di mobile, 2 kolom seimbang di desktop.
  - Certifications: 1 kolom di mobile, 2 kolom di tablet, 3 kolom di desktop.

### 3.2 Visual Atmosphere & Color Palette
- **Background**: Sleek modern dark mode (deep zinc `#09090b` / surface `#18181b` / border `#27272a`).
- **Typography**: Clean sans-serif editorial typography (Inter / Geist) dengan hierarki tegas:
  - Hero H1: `text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight`
  - Section Headings: `text-3xl sm:text-5xl font-bold tracking-tight`
  - Body: `text-muted-foreground text-base sm:text-lg leading-relaxed`
- **Pill Badges**: Rounded full borders dengan background semi-transparan (`bg-secondary/50 backdrop-blur-sm border-border`).

---

## 4. Technical Specifications

### 4.1 Technology Stack
- **Framework**: Next.js 16 (App Router) + React 19
- **Animation**: Framer Motion 12 (`useScroll`, `useTransform`, `motion.*`, `AnimatePresence`)
- **Styling**: Tailwind CSS v4 + Vanilla CSS utilities
- **Content Engine**: `next-mdx-remote` + `gray-matter` + Shiki syntax highlighting
- **Icons**: Lucide React
- **Validation**: Zod 4

### 4.2 Component Architecture Hierarchy
```
app/
├── (blog)/
│   ├── layout.tsx                # Base layout with Floating Pill Nav & Footer
│   ├── page.tsx                  # Home: Hero -> Scroll Transition -> Selected Work -> About -> Certs -> Blog -> Contact
│   ├── about/page.tsx            # Dedicated About Me page
│   ├── tech/page.tsx             # Tech Notes listing with search & tag filter
│   ├── tech/[slug]/page.tsx      # Tech Notes post detail
│   ├── life/page.tsx             # Life listing with search & tag filter
│   ├── life/[slug]/page.tsx      # Life post detail
│   ├── contact/page.tsx          # Contact page
│   └── privacy-policy/page.tsx   # Privacy policy
components/
├── navigation/
│   ├── floating-pill-nav.tsx     # Signature floating pill header + expandable modal
│   └── footer.tsx                # Clean editorial footer
├── home/
│   ├── hero-section.tsx          # Hero copy, badges, stat counters, CTA buttons
│   ├── scroll-showcase.tsx       # Signature scroll-linked stacked-cards to 3-col grid
│   ├── about-quote-section.tsx   # Editorial quote card + portrait photo with social pills
│   ├── certifications-grid.tsx   # Oracle certs grid + lightbox preview modal
│   ├── content-pillars.tsx       # Tech Notes & Life preview cards
│   └── quick-contact.tsx         # Direct contact CTA & email action
└── shared/
    ├── lightbox-modal.tsx        # High-res certificate viewer
    └── stat-counter.tsx          # Animated number counter
```

### 4.3 Scroll-Linked Animation Logic
```ts
// Blueprint: components/home/scroll-showcase.tsx
const containerRef = useRef<HTMLDivElement>(null)
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end end"]
})

// Card 1: Left card (starts tilted left, animates to column 1, rotation 0)
const card1X = useTransform(scrollYProgress, [0, 0.6], ["20%", "0%"])
const card1Y = useTransform(scrollYProgress, [0, 0.6], ["10%", "0%"])
const card1Rotate = useTransform(scrollYProgress, [0, 0.6], [-8, 0])

// Card 2: Center card (starts center front, animates to column 2)
const card2Scale = useTransform(scrollYProgress, [0, 0.6], [1.05, 1])
const card2Rotate = useTransform(scrollYProgress, [0, 0.6], [2, 0])

// Card 3: Right card (starts tilted right, animates to column 3)
const card3X = useTransform(scrollYProgress, [0, 0.6], ["-20%", "0%"])
const card3Rotate = useTransform(scrollYProgress, [0, 0.6], [10, 0])

// Heading opacity/scale
const headingOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1])
const headingY = useTransform(scrollYProgress, [0.3, 0.7], [40, 0])
```

---

## 5. Risks & Mitigation

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Scroll jank pada perangkat mobile saat animasi berjalan | Sedang / Tinggi | Gunakan CSS transform (`will-change: transform`), matikan sticky pin pada mobile `< 768px` dan gunakan layout vertikal natural. |
| Ukuran aset gambar sertifikat memperlambat LCP | Sedang | Optimasi format WebP/AVIF, lazy loading pada gambar non-hero, Next.js Image component dengan placeholder blur. |
| Broken links pada konten blog MDX existing | Tinggi | Pertahankan struktur direktori `content/tech/` dan `content/life/` serta route Next.js tanpa perubahan slug. |
| Aksesibilitas bagi pengguna sensitif motion | Rendah | Mengimplementasikan hook `useReducedMotion()` dari Framer Motion. |
