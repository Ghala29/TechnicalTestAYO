# Cypress Automated Testing - Technical Test AYO

Project ini berisi skrip pengujian otomatis (*Studi Kasus 1*) menggunakan **Cypress** untuk platform [AYO Indonesia](https://ayo.co.id/).

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
Buka Terminal / Command Prompt, lalu jalankan perintah:
git clone [https://github.com/Ghala29/TechnicalTestAYO.git](https://github.com/Ghala29/TechnicalTestAYO.git)
cd TechnicalTestAYO

### 2. Install Dependency
npm install

### 3. Konfigurasi Environment Variables (cypress.env.json)

{
  "username": "isi dengan email",
  "password": "password_akun_kamu"
}

## Cara Menjalankan Pengujian
Mode 1:  UI Runner
1. npx cypress open
2. Pilih E2E Testing.
3. Pilih Browser pilihanmu (misalnya Chrome atau Electron).
4. Klik pada file skenario tes yang ingin dijalankan (contoh: booking.cy.js).

Mode 2: Headless Mode (CLI / Terminal)
1. npx cypress run