import React from "react";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Kebijakan Privasi - SinatriaTrans</title>
      </Head>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
          <h1 className="text-3xl font-extrabold text-center text-gray-900">
            Kebijakan Privasi
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Terakhir diperbarui: 28 Agustus 2025
          </p>
          <div className="text-left text-gray-700 space-y-6">
            <p>
              Selamat datang di SinatriaTrans. Kami berkomitmen untuk melindungi
              data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana
              kami mengumpulkan, menggunakan, dan membagikan informasi Anda.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mt-4">
              Informasi yang Kami Kumpulkan
            </h2>
            <p>
              Saat Anda menggunakan aplikasi ini dan login melalui Google, kami
              mengumpulkan informasi dasar dari profil Google Anda, termasuk:
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Nama Anda</li>
                <li>Alamat email Anda</li>
                <li>Foto profil Anda</li>
              </ul>
            </p>
            <h2 className="text-xl font-bold text-gray-900 mt-4">
              Bagaimana Kami Menggunakan Informasi Anda
            </h2>
            <p>
              Kami menggunakan informasi ini untuk:
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Memverifikasi identitas Anda saat login.</li>
                <li>Mempersonalisasi pengalaman Anda di aplikasi.</li>
                <li>Memberikan dukungan pengguna.</li>
              </ul>
              Kami tidak membagikan atau menjual data pribadi Anda kepada pihak
              ketiga.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mt-4">
              Keamanan Data
            </h2>
            <p>
              Kami mengambil langkah-langkah yang wajar untuk melindungi
              informasi pribadi Anda dari akses tidak sah, pengungkapan,
              perubahan, atau penghancuran.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mt-4">
              Perubahan pada Kebijakan Ini
            </h2>
            <p>
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
              Setiap perubahan akan diposting di halaman ini.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mt-4">
              Hubungi Kami
            </h2>
            <p>
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini,
              silakan hubungi kami melalui email: sinatriatrans@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
