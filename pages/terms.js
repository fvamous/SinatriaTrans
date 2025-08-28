import React from "react";
import Head from "next/head";

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Ketentuan Layanan - SinatriaTrans</title>
      </Head>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
          <h1 className="text-3xl font-extrabold text-center text-gray-900">
            Ketentuan Layanan
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Terakhir diperbarui: 28 Agustus 2025
          </p>
          <div className="text-left text-gray-700 space-y-6">
            <p>
              Selamat datang di SinatriaTrans. Ketentuan Layanan ini mengatur
              penggunaan Anda atas aplikasi kami. Dengan mengakses atau
              menggunakan aplikasi kami, Anda setuju untuk terikat oleh
              Ketentuan Layanan ini.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mt-4">
              1. Penggunaan Aplikasi
            </h2>
            <p>
              Anda setuju untuk menggunakan aplikasi kami hanya untuk tujuan
              yang sah dan sesuai dengan Ketentuan Layanan ini. Anda bertanggung
              jawab penuh atas semua aktivitas yang terjadi di bawah akun Anda.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mt-4">
              2. Akun Pengguna
            </h2>
            <p>
              Untuk menggunakan beberapa fitur aplikasi, Anda mungkin harus
              membuat akun melalui Google. Anda setuju untuk memberikan
              informasi yang akurat dan lengkap. Anda bertanggung jawab untuk
              menjaga kerahasiaan kata sandi Anda dan membatasi akses ke akun
              Anda.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mt-4">
              3. Hak Kekayaan Intelektual
            </h2>
            <p>
              Aplikasi ini dan semua konten, fitur, dan fungsionalitasnya
              (termasuk, namun tidak terbatas pada, semua informasi, perangkat
              lunak, teks, tampilan, gambar, video, dan audio) adalah milik
              SinatriaTrans dan dilindungi oleh undang-undang hak cipta dan
              merek dagang internasional.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mt-4">
              4. Batasan Tanggung Jawab
            </h2>
            <p>
              Aplikasi ini disediakan "sebagaimana adanya". Kami tidak
              memberikan jaminan apa pun, tersurat maupun tersirat, mengenai
              keandalan, ketersediaan, atau fungsionalitas aplikasi. Kami tidak
              bertanggung jawab atas kerugian atau kerusakan yang timbul dari
              penggunaan atau ketidakmampuan untuk menggunakan aplikasi ini.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mt-4">
              5. Perubahan pada Ketentuan
            </h2>
            <p>
              Kami berhak untuk mengubah Ketentuan Layanan ini dari waktu ke
              waktu. Setiap perubahan akan diberitahukan dengan memposting
              Ketentuan yang diperbarui di halaman ini. Penggunaan Anda yang
              berkelanjutan atas aplikasi setelah perubahan tersebut merupakan
              penerimaan Anda atas Ketentuan yang direvisi.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mt-4">
              6. Hubungi Kami
            </h2>
            <p>
              Jika Anda memiliki pertanyaan tentang Ketentuan Layanan ini,
              silakan hubungi kami di: sinatriatrans@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
git