# 📋 Rencana Pengembangan Web: Bangun Ruang Prisma

To-do list ini disusun berdasarkan rubrik penilaian tugas pemrograman web dasar (HTML, CSS, JS).

## 🚀 Fase 1: Persiapan & Riset
- [x] **Setup Proyek**
    - [x] Buat folder proyek baru.
    - [x] Buat file kosong: `index.html`, `style.css`, `script.js`.
    - [x] Buat folder `assets/images`.
    - [x] Inisialisasi Git (`git init`).
- [x] **Pengumpulan Aset & Materi** (Sumber: Ruangguru)
    - [x] Cari & simpan gambar ilustrasi Prisma Segitiga.
    - [x] Cari & simpan gambar ilustrasi Prisma Segiempat/Kubus/Balok.
    - [x] Rangkum definisi prisma (parafrase agar unik).
    - [x] Catat rumus Volume & Luas Permukaan Prisma.
    - [x] Catat sifat-sifat prisma (jumlah sisi, rusuk, titik sudut) untuk data tabel.

## 🏗️ Fase 2: Struktur HTML (Bobot 25% + 25%)
*Target: Menggunakan tag semantik & memuat 5 elemen wajib (Link, List, Tabel, Form, Gambar).*

- [ ] **Kerangka Dasar**
    - [x] Buat struktur HTML5 (`<!DOCTYPE html>`, `html`, `head`, `body`).
    - [x] Tambahkan meta tags (viewport, charset).
    - [ ] Hubungkan file CSS (`<link>`) dan JS (`<script>`).
- [ ] **Header Section** (`<header>`)
    - [ ] Tambahkan Judul Utama (`<h1>`).
    - [ ] Tambahkan navigasi sederhana atau sub-judul.
- [ ] **Konten Materi** (`<main>`)
    - [ ] **Artikel Pembuka:** Paragraf penjelasan tentang apa itu Prisma (`<p>`).
    - [ ] **Elemen Gambar:** Masukkan ilustrasi prisma dengan atribut `alt` yang deskriptif.
    - [ ] **Elemen List:** Buat daftar "Jenis-jenis Prisma" menggunakan `<ul>` dan `<li>`.
    - [ ] **Elemen Tabel:** Buat tabel "Sifat-sifat Prisma" (`<table>`, `<thead>`, `<tbody>`) yang berisi data Jumlah Sisi/Rusuk.
    - [ ] **Rumus Matematika:** Tampilkan rumus Volume & Luas Permukaan (bisa gunakan tag `<code>` atau `<b>` untuk penekanan).
    - [ ] **Elemen Link:** Tambahkan tautan "Sumber Belajar" ke artikel Ruangguru (`<a href="..." target="_blank">`).
- [ ] **Fitur Interaktif** (`<section id="quiz">`)
    - [ ] **Elemen Form:** Buat form kuis sederhana (`<form>`).
    - [ ] Tambahkan Input Nama (`<input type="text">`).
    - [ ] Tambahkan Soal Pilihan Ganda (`<input type="radio">`).
    - [ ] Tambahkan Tombol Submit (`<button>`).
- [ ] **Footer Section** (`<footer>`)
    - [ ] Tambahkan copyright & nama pembuat.

## 🎨 Fase 3: Styling CSS (Bobot 20%)
*Target: Tata letak rapi, estetis, dan responsif dasar.*

- [ ] **Reset & Global Style**
    - [ ] Atur `box-sizing: border-box`.
    - [ ] Tentukan font family (misal: Poppins/Arial) dan warna background.
- [ ] **Layout Container**
    - [ ] Buat container utama agar konten berada di tengah (centered layout).
- [ ] **Styling Komponen**
    - [ ] Style untuk Tabel (Beri border, padding, dan warna header tabel).
    - [ ] Style untuk Gambar (Agar responsif/tidak melebar).
    - [ ] Style untuk Form (Mempercantik input field dan tombol).
    - [ ] Style untuk Navigasi/Link.

## ⚙️ Fase 4: JavaScript (Bonus/Interaktif)
*Target: Form dapat memberikan feedback sederhana.*

- [ ] Buat function untuk menangkap event `submit` pada form.
- [ ] Buat logika validasi jawaban kuis (If/Else).
- [ ] Tampilkan hasil (Alert atau manipulasi DOM untuk menampilkan nilai).

## ✅ Fase 5: Finalisasi & Quality Control (Bobot 10%)
*Target: Kerapian kode dan dokumentasi.*

- [ ] **Dokumentasi Kode (Penting!)**
    - [ ] Tambahkan komentar di HTML (penanda setiap section).
    - [ ] Tambahkan komentar di CSS (penjelasan styling).
    - [ ] Tambahkan komentar di JS (penjelasan logika).
- [ ] **Uji Coba**
    - [ ] Cek semua link apakah berfungsi.
    - [ ] Cek tampilan di HP (Mobile view).
- [ ] **Publish**
    - [ ] Update file `README.md` dengan deskripsi proyek.
    - [ ] Push ke GitHub.