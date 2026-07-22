# 📝 Studi Kasus 2: Analisis & Strategi Pengujian Platform AYO

---

## 🌐 1. Pengujian Web AYO (https://ayo.co.id)

### A. Fitur / Area Utama Pengujian:
1. **Registrasi Akun Baru (Sign Up / Auth)**

### B. Mekanisme Pengujian:
* **UI Testing (Exploratory & UI Automation - Cypress)**

### C. Alasan Pengujian (Based on Real Defect Finding):
Fitur **Sign Up** adalah pintu masuk utama pengguna. Pengujian UI secara mendalam pada alur ini sangat krusial dilakukan karena **ditemukan bug minor** saat pengujian eksploratif:

* **Temuan Defect:** Saat menginput password tanpa simbol, sistem menampilkan teks error mentah: `validation.password.symbol`.
* **Dampak:** Membingungkan calon pengguna.
* **Ekspektasi:** Menampilkan pesan ramah pengguna, contoh: *"Password harus mengandung minimal 1 karakter simbol"*.