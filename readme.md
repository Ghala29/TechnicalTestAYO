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
