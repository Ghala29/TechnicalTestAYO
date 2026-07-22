# 📝 Studi Kasus 2: Analisis & Strategi Pengujian Platform AYO

---

## 🌐 1. Pengujian Web AYO (https://ayo.co.id)

### 1. Registrasi Akun Baru (Sign Up)

#### A. Fitur / Area Pengujian:
* **Fitur Registrasi Akun Baru (Sign Up)**

#### B. Mekanisme Pengujian:
* **UI Testing (Exploratory Testing)** & **UI Automation (Cypress)**

#### C. Alasan Pengujian:
Fitur **Sign Up** adalah pintu masuk utama pengguna. Pengujian UI secara mendalam pada alur ini krusial dilakukan karena **ditemukan bug minor** saat pengujian:

* **Temuan Defect:** Saat menginput password, sistem menampilkan teks error: `validation.password.symbol` dan `validation.password.mixed`.
* **Dampak:** Membingungkan calon pengguna, karena pesan validasi tidak menjelaskan kriteria password yang belum terpenuhi.
* **Ekspektasi:** Menampilkan pesan yang ramah pengguna, contoh: *"Kata sandi harus terdiri dari minimal 1 karakter simbol dan kombinasi huruf besar-kecil"*.

### 2. Checkout & Produk Tambahan (Add-Ons)

#### A. Fitur / Area Pengujian:
* **Halaman Checkout & Opsi Produk Tambahan (Add-Ons Flow)**

#### B. Mekanisme Pengujian:
* **UI Testing (Exploratory Testing)** & **UI Automation (Cypress)**

#### C. Alasan Pengujian:
Pengujian pada halaman checkout/opsi produk tambahan krusial karena **ditemukan bug kalkulasi nilai pembayaran pada kondisi pengguna belum login**:

* **Temuan Defect:** Pada halaman pilihan Produk Tambahan (Opsional), nominal **Total Bayar reset menjadi 0** saat field/dropdown tersebut diklik. Bug ini spesifik terjadi apabila pengguna melakukan booking tanpa/belum melakukan *login*.
* **Dampak:** *Major Impact* pada alur transaksi. Mengakibatkan ketidaksesuaian data kalkulasi harga (*price mismatch*) serta membingungkan pengguna sebelum berpindah ke tahap pembayaran.
* **Ekspektasi:** Total Bayar harus tetap mempertahankan akumulasi harga sewa lapangan dari alur sebelumnya (meskipun user belum login), dan baru bertambah jika pengguna memilih item produk tambahan.

---

### 3. Sistem Booking & Slot Lapangan (Double Booking Validation)

#### A. Fitur / Area Pengujian:
* **Fitur Pemilihan Venue & Checkout (Cart & Slot Selection)**

#### B. Mekanisme Pengujian:
* **UI Testing**, **UI Automation (Cypress)**, & **API Testing**

#### C. Alasan Pengujian (Based on Real Defect Finding):
Pengujian pada sistem booking krusial karena **ditemukan bug critical berupa potensi Double Booking pada kondisi pengguna belum login**:

* **Temuan Defect:** Pengguna yang belum melakukan *login* dapat memilih dan menambahkan slot jadwal yang sama secara berulang ke dalam keranjang (*cart*), sehingga menghasilkan *double booking*.
* **Dampak:** *Critical Impact*. Berpotensi merusak logika ketersediaan lapangan, menyebabkan konflik jadwal antar pengguna.
* **Ekspektasi:** 
  * Frontend seharusnya memiliki validasi untuk menolak/mencegah penambahan slot jadwal yang sama ke dalam keranjang, atau mengarahkan pengguna untuk *login* terlebih dahulu.
  * Validasi pada sisi **backend** juga harus menolak request double booking untuk memastikan *double booking* tidak terjadi pada basis data.


## 📷 Lampiran (Defect Screenshots)

### Gambar 1.1: Validation Error pada Sign Up
![Sign Up Defect validation.password.symbol](image-2.png)
![Sign Up Defect validation.password.mixed](image-3.png)

### Gambar 1.2: Total Bayar Reset ke 0
![Total Bayar Reset ke 0](image-5.png)

### Gambar 1.3: Double Booking pada User Yang belum Login
![Double Booking](image-1.png)