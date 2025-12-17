# 📐 Bangun Ruang Prisma - Web Edukasi Sederhana

Proyek ini adalah halaman web statis yang bertujuan sebagai sumber belajar matematika sederhana mengenai materi **Bangun Ruang Prisma**. Web ini dirancang untuk memenuhi standar HTML semantik, tata letak estetis, dan konten yang kontekstual.

## 🎯 Tujuan Proyek
Memenuhi tugas pembuatan web pembelajaran dengan kriteria:
1. Struktur HTML rapi dan semantik.
2. Menggunakan CSS untuk tata letak.
3. Memuat minimal 5 elemen utama HTML (Link, List, Tabel, Form, Gambar).
4. Konten relevan dengan matematika (Prisma).
5. Dokumentasi kode (komentar) yang jelas.

## 📚 Cakupan Materi
Konten diambil dan dirangkum dari [Ruangguru Blog](https://www.ruangguru.com/blog/pengertian-sifat-dan-rumus-rumus-prisma), mencakup:
- **Pengertian Prisma**: Definisi dasar.
- **Macam-macam Prisma**: Ilustrasi visual.
- **Sifat-sifat Prisma**: Disajikan dalam bentuk Tabel (Rusuk, Sisi, Titik Sudut).
- **Rumus**: Luas permukaan dan Volume.
- **Kuis Mini**: Evaluasi pemahaman sederhana.

## 🛠️ Teknologi yang Digunakan
- **HTML5**: Struktur utama halaman (Semantic Tags: `<header>`, `<main>`, `<article>`, `<footer>`).
- **CSS3**: Styling layout, pewarnaan, dan tipografi dengan custom animations.
- **JavaScript (Vanilla)**: Validasi sederhana untuk form kuis mini.
- **Anime.js**: Library animasi modern untuk efek interaktif yang elegan.

## ✨ Fitur Animasi dengan Anime.js
Halaman ini dilengkapi dengan animasi modern menggunakan Anime.js v3.2.1:

### Animasi Halaman Utama
- **Welcome Section**: Masuk dengan efek elastic bounce dan parallax saat scroll
- **Heading Animations**: Slide-in dari kiri saat elemen masuk viewport
- **List Items**: Staggered animation dengan translateX
- **Table Rows**: Animasi fade-in berurutan dengan hover scale effect
- **3D Models**: Scale up dengan smooth transition

### Efek Interaktif
- **Hover Effects**: 
  - Content divs scale dan shadow berubah
  - Table rows scale 1.02x dengan smooth transition
  - 3D embeds zoom effect
- **Scroll Animations**: Elemen animate saat masuk viewport
- **Parallax**: Welcome section bergerak dengan kecepatan berbeda saat scroll
- **Focus States**: Interactive glow animation pada input dan buttons

### Fitur Tambahan
- Smooth page load dengan staggered animations
- Responsive animation adjustments untuk mobile
- Page visibility detection (pause/resume animations)
- Custom utilities classes untuk animasi manual

## 🚀 Cara Menjalankan
1. Clone atau download repository ini.
2. Buka file `index.html` menggunakan browser (Chrome/Edge/Firefox).
3. Untuk pengalaman coding, buka folder proyek menggunakan VS Code.

## 📖 Dokumentasi Animasi

### File-file yang Terlibat
- `index.html`: Link ke Anime.js CDN + struktur HTML
- `style.css`: Keyframe animations dan utility classes
- `index.js`: Logika anime.js dan kontroler animasi

### Cara Menggunakan Anime.js dalam Proyek
```javascript
// Basic syntax
anime({
  targets: '.element',
  duration: 1000,
  easing: 'easeOutQuad',
  opacity: 1,
  translateY: 0
});

// Staggered animation
anime({
  targets: 'li',
  delay: anime.stagger(100),
  opacity: 1,
  translateX: 0
});

// Timeline
const timeline = anime.timeline();
timeline
  .add({ targets: '.el1', duration: 1000 })
  .add({ targets: '.el2', duration: 1000 }, '-=500');
```

### Mengaktifkan Animasi Custom
Tambahkan class ke elemen HTML:
```html
<!-- Float effect -->
<div class="animate-float">Content</div>

<!-- Glow effect -->
<button class="animate-glow">Tombol</button>

<!-- Pulse effect -->
<span class="animate-pulse">Loading...</span>
```

### Konfigurasi Animasi
Edit parameter di `index.js`:
```javascript
// Ubah kecepatan animasi welcome
duration: 1000,  // milliseconds

// Ubah easing (ease functions)
easing: 'easeOutElastic(1, .6)',

// Ubah delay antar elemen
delay: anime.stagger(300)
```

## ✅ Checklist Fitur (Sesuai Rubrik)
- [x] Judul Halaman & Paragraf Penjelasan
- [x] Gambar Ilustrasi Prisma
- [x] Tabel Sifat-sifat Prisma
- [x] Tautan ke sumber belajar lain
- [x] Form Kuis Mini
- [x] Komentar penjelas pada kode

---
*Dibuat oleh: [Nama Anda]*