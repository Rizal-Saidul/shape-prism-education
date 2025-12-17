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

- [x] **Kerangka Dasar**
    - [x] Buat struktur HTML5 (`<!DOCTYPE html>`, `html`, `head`, `body`).
    - [x] Tambahkan meta tags (viewport, charset).
    - [x] Hubungkan file CSS (`<link>`) dan JS (`<script>`).
- [x] **Header Section** (`<header>`)
    - [x] Tambahkan Judul Utama (`<h1>`).
    - [x] Tambahkan navigasi sederhana atau sub-judul.
- [x] **Konten Materi** (`<main>`)
    - [x] **Artikel Pembuka:** Paragraf penjelasan tentang apa itu Prisma (`<p>`).
    - [ ] **Elemen Gambar:** Masukkan ilustrasi prisma dengan atribut `alt` yang deskriptif.
    - [x] **Elemen List:** Buat daftar "Jenis-jenis Prisma" menggunakan `<ul>` dan `<li>`.
    - [x] **Elemen Tabel:** Buat tabel "Sifat-sifat Prisma" (`<table>`, `<thead>`, `<tbody>`) yang berisi data Jumlah Sisi/Rusuk.
    - [x] **Rumus Matematika:** Tampilkan rumus Volume & Luas Permukaan (bisa gunakan tag `<code>` atau `<b>` untuk penekanan).
    - [x] **Elemen Link:** Tambahkan tautan "Sumber Belajar" ke artikel Ruangguru (`<a href="..." target="_blank">`).
- [x] **Fitur Interaktif** (`<section id="quiz">`)
    - [x] **Elemen Form:** Buat form kuis sederhana (`<form>`).
    - [x] Tambahkan Input Nama (`<input type="text">`).
    - [x] Tambahkan Soal Pilihan Ganda (`<input type="radio">`).
    - [x] Tambahkan Tombol Submit (`<button>`).
- [x] **Footer Section** (`<footer>`)
    - [x] Tambahkan copyright & nama pembuat.

## 🎨 Fase 3: Styling CSS (Bobot 20%)
*Target: Tata letak rapi, estetis, dan responsif dasar.*

- [x] **Reset & Global Style**
    - [x] Atur `box-sizing: border-box`.
    - [x] Tentukan font family (misal: Poppins/Arial) dan warna background.
- [x] **Layout Container**
    - [x] Buat container utama agar konten berada di tengah (centered layout).
- [x] **Styling Komponen**
    - [x] Style untuk Tabel (Beri border, padding, dan warna header tabel).
    - [x] Style untuk Gambar (Agar responsif/tidak melebar).
    - [x] Style untuk Form (Mempercantik input field dan tombol).
    - [x] Style untuk Navigasi/Link.

## ⚙️ Fase 4: JavaScript (Bonus/Interaktif)
*Target: Form dapat memberikan feedback sederhana.*

- [x] Buat function untuk menangkap event `submit` pada form.
- [x] Buat logika validasi jawaban kuis (If/Else).
- [x] Tampilkan hasil (Alert atau manipulasi DOM untuk menampilkan nilai).

## ✅ Fase 5: Finalisasi & Quality Control (Bobot 10%)
*Target: Kerapian kode dan dokumentasi.*

- [x] **Dokumentasi Kode (Penting!)**
    - [x] Tambahkan komentar di HTML (penanda setiap section).
    - [x] Tambahkan komentar di CSS (penjelasan styling).
    - [x] Tambahkan komentar di JS (penjelasan logika).
- [x] **Uji Coba**
    - [x] Cek semua link apakah berfungsi.
    - [x] Cek tampilan di HP (Mobile view).
- [x] **Publish**
    - [x] Update file `README.md` dengan deskripsi proyek.
    - [ ] Push ke GitHub.