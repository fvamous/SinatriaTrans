// File: server.js

// Import library yang dibutuhkan
// Pastikan Anda sudah menginstal Express dengan 'npm install express'
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Middleware untuk memproses data formulir
const app = express();
const port = 3000;

// Middleware untuk menyajikan file statis dari folder 'public'
// Ini akan membuat file-file HTML, CSS, dan JS Anda dapat diakses oleh browser
app.use(express.static(path.join(__dirname, 'public')));

// Middleware untuk mem-parsing data body dari request POST
// Ini penting agar kita bisa membaca data yang dikirim dari formulir
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint untuk halaman utama
// Ini akan menyajikan file index.html saat ada permintaan ke root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint API untuk menerima data pemesanan dari formulir
// Ketika formulir di-submit, data akan dikirim ke sini sebagai permintaan POST
app.post('/api/submit-booking', (req, res) => {
    // Ambil data yang dikirim dari formulir
    const bookingData = req.body;

    // Di sini Anda bisa menambahkan logika server yang lebih kompleks,
    // seperti:
    // 1. Menyimpan data ke database (contoh: MongoDB, MySQL, Firestore)
    // 2. Mengirim email konfirmasi ke pelanggan
    // 3. Melakukan validasi data tambahan

    // Untuk contoh ini, kita hanya akan mencetak data ke konsol server
    console.log('Data pemesanan diterima:', bookingData);

    // Kirim respons sukses kembali ke klien (browser)
    // Respons ini akan diterima oleh JavaScript di sisi klien
    res.json({
        success: true,
        message: 'Pemesanan Anda berhasil dikirim!',
        data: bookingData
    });
});

// Jalankan server di port yang ditentukan
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

