# ⏰ Digital Clock (Jam Digital)

Aplikasi web sederhana yang menampilkan jam digital dengan waktu real-time yang diperbarui setiap detik.

## 📋 Deskripsi Proyek

**Digital Clock** adalah aplikasi web minimalis yang menampilkan waktu saat ini dalam format 24-jam (HH:MM:SS). Aplikasi ini memiliki desain modern dengan efek glassmorphism dan tema warna hijau lime pada latar belakang gelap.

## ✨ Fitur Utama

- ⏱️ **Jam Real-Time** - Menampilkan waktu yang diperbarui setiap detik
- 🎨 **Desain Modern** - Interface dengan efek glassmorphism dan glow effect
- 📱 **Responsive Design** - Dapat diakses di berbagai perangkat
- 🌑 **Dark Theme** - Tema gelap yang nyaman untuk mata
- 🎯 **Minimalis** - Fokus pada tampilan jam tanpa elemen yang berlebihan

## 🏗️ Struktur Proyek

```
digital-clock/
├── index.html          # File HTML utama
├── css/
│   └── style.css       # Stylesheet dan styling
├── js/
│   └── script.js       # JavaScript untuk logika jam
├── img/
│   └── background.jpg  # Gambar latar belakang
└── README.md           # Dokumentasi proyek
```

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **CSS3** - Styling dengan efek glassmorphism dan blur backdrop
- **JavaScript ES6** - Logika pengupdate waktu real-time
- **Font** - Verdana, Geneva, Tahoma, sans-serif

## 🚀 Cara Menggunakan

1. **Buka file `index.html`** di browser web Anda
2. Aplikasi akan otomatis menampilkan jam digital dengan waktu terkini
3. Jam akan terus diperbarui setiap detik

Atau, gunakan Live Server:

```bash
# Jika menggunakan VS Code, klik kanan pada index.html
# Pilih "Open with Live Server"
```

## 📊 Penjelasan Kode

### JavaScript (script.js)

```javascript
// Mengambil elemen jam dari HTML
let elHour = document.querySelector(".hour");
let elMinute = document.querySelector(".minute");
let elSecond = document.querySelector(".second");

// Update waktu setiap 1000ms (1 detik)
setInterval(() => {
  let time = new Date();
  let hour = String(time.getHours()).padStart(2, "0");
  let minute = String(time.getMinutes()).padStart(2, "0");
  let second = String(time.getSeconds()).padStart(2, "0");

  // Update tampilan jam
  elHour.innerHTML = hour;
  elMinute.innerHTML = minute;
  elSecond.innerHTML = second;
}, 1000);
```

### CSS Styling

- **Container** - Fullscreen display dengan background image dan overlay gelap
- **Clock** - Box dengan border hijau lime, efek glow, dan backdrop blur
- **Typography** - Font besar (3rem) untuk visibilitas maksimal

## 🎨 Warna Tema

- **Warna Utama** - `rgb(152, 205, 0)` (Hijau Lime)
- **Background Overlay** - `rgba(0, 0, 0, 0.8)` (Hitam dengan transparansi)
- **Glow Effect** - Shadow dengan warna yang sama

## 🔧 Kustomisasi

Anda dapat menyesuaikan aplikasi dengan:

1. **Mengubah warna tema** - Edit nilai RGB di `css/style.css`
2. **Mengganti background image** - Letakkan gambar baru di folder `img/`
3. **Menyesuaikan ukuran font** - Ubah nilai `font-size` di CSS
4. **Menambah fitur** - Tambahkan timezone atau format waktu 12-jam

## 💡 Ide Pengembangan Lebih Lanjut

- [ ] Menambah pemilihan timezone
- [ ] Format waktu 12-jam dengan AM/PM
- [ ] Alarm atau timer
- [ ] Pengaturan tema gelap/terang
- [ ] Tampilan tanggal
- [ ] Suara notifikasi

## 📄 Lisensi

Proyek ini bebas digunakan dan dimodifikasi sesuai kebutuhan Anda.

## 👤 Dibuat Oleh

Digital Clock - Aplikasi Web Sederhana

---

**Terima kasih telah menggunakan Digital Clock!** ⏰
