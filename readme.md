# QUALITY ASSURANCE TECHNICAL TEST

Project ini berisi skrip pengujian otomatis dan scenario test (*Studi Kasus 1*) menggunakan **Cypress** untuk platform [AYO Indonesia](https://ayo.co.id/).

---
## Skenario Pengujian

Daftar lengkap *Test Case* & *Test Scenario* dapat diakses melalui dokumen Google Sheets berikut:
**[Lihat Google Sheets - Test Scenarios AYO](https://docs.google.com/spreadsheets/d/1Z5VQGXfQdTaLoVjqXMgSf8e6iL2_2-Ncoi8n22EJfgE/edit?usp=sharing)**

> **Catatan Pengujian:**
> * skenario pengujian (mulai dari pengujian positif, pencegahan *Double Booking* di UI/API, hingga validasi kesesuaian harga) tercakup pada **Google Sheets**.
> * **Script Automation Cypress** difokuskan untuk menguji verifikasi harga dari checkout hingga total bayar.

---
## Prasyarat (Prerequisites)

Sebelum menjalankan project ini, pastikan komputer kamu sudah terinstall software berikut:
* **Node.js** (Versi 16 atau lebih baru) - [Download Node.js](https://nodejs.org/)
* **Git** - [Download Git](https://git-scm.com/)
* **VS Code** (atau Text Editor pilihanmu)

---

## Langkah-Langkah Menjalankan Project

Ikuti langkah-langkah di bawah ini untuk mengkloning dan menjalankan pengujian di komputer lokal kamu:

### 1. Kloning Repository
* Buka Terminal / Command Prompt, lalu jalankan perintah:
* git clone [https://github.com/Ghala29/TechnicalTestAYO.git](https://github.com/Ghala29/TechnicalTestAYO.git)
* cd TechnicalTestAYO

### 2. Install Dependency
* npm install

### 3. Konfigurasi Environment Variables (cypress.env.json)

{
  "username": "isi dengan email",
  "password": "password_akun_kamu"
}

## Cara Menjalankan Pengujian
### Mode 1:  UI Runner
* npx cypress open
* Pilih E2E Testing.
* Pilih Browser pilihanmu (misalnya Chrome, Electron atau Edge).
* Klik pada file skenario tes yang ingin dijalankan (contoh: booking.cy.js).

### Mode 2: Headless Mode (CLI / Terminal)
* npx cypress run

## (Studi Kasus 2)

Bagian ini berisi analisis singkat mengenai mekanisme pengujian platform AYO (Web & Mobile) berdasarkan **temuan bug** yang ditemukan selama pengujian.

### Ringkasan Temuan Defect Utama (Web AYO):
1. **Registrasi Akun (Sign Up) - Minor:** Tampilan pesan error validasi password masih berupa key translation (`validation.password.symbol`).
2. **Checkout & Add-Ons - Major:** Nominal **Total Bayar reset menjadi 0** saat memilih opsi produk tambahan dalam kondisi user belum login.
3. **Sistem Booking - Critical:** 
   * **Double Booking:** User *guest* dapat memilih dan memasukkan slot jadwal yang sama ke dalam keranjang secara berulang.
   * **Mass Deletion:** Menekan tombol hapus pada salah satu slot jadwal menyebabkan **seluruh slot pada tanggal/lapangan yang sama terhapus sekaligus**.

### Pengujian Mobile App (Play Store & App Store):
* **Fokus Utama:** Pengujian **Kompatibilitas Lintas Perangkat (Android & iOS)** untuk menangani potensi *layout glitch*, perbedaan perilaku OS, serta inkonsistensi fitur di berbagai spesifikasi smartphone.

> **Dokumen Lengkap:**  
> Rincian dampak, ekspektasi, dan bukti screenshot dapat diakses pada dokumen terpisah berikut:  
> **[Lihat Dokumen Studi Kasus 2 (STUDI_KASUS_2.md)](https://github.com/Ghala29/TechnicalTestAYO/blob/main/STUDI_KASUS_2.md)**
