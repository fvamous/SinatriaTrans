// pages/index.js
import Head from "next/head";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [messageBox, setMessageBox] = useState({ visible: false, text: "" });
  const [year] = useState(new Date().getFullYear());

  const toggleMobile = () => setMobileOpen((s) => !s);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sinatriatrans - Travel & Rental Mobil</title>
        <meta
          name="description"
          content="Sinatriatrans menyediakan layanan travel dan rental mobil terbaik untuk kebutuhan perjalanan Anda."
        />
        <link rel="icon" href="images/logo.png" type="image/x-icon" />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      {/* Inline style (scrollbar + font family) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html, body { font-family: "Inter", sans-serif; scroll-behavior: smooth; }
            ::-webkit-scrollbar { width: 8px; }
            ::-webkit-scrollbar-thumb { background-color: #d1d5db; border-radius: 4px; }
            ::-webkit-scrollbar-thumb:hover { background-color: #9ca3af; }
          `,
        }}
      />

      {/* Header/Navbar */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 p-7 shadow-lg fixed w-full z-50 top-0">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="logo sinatriatrans"
              className="h-10 w-auto object-contain"
            />
            <span className="text-white text-3xl font-bold tracking-wider hover:text-gray-100 transition duration-300">
              Sinatriatrans
            </span>
          </a>

          <nav className="hidden md:flex justify-between space-x-6 text-white text-2xl">
            <a
              href="#home"
              className="hover:text-accent transition duration-300"
            >
              Beranda
            </a>
            <a
              href="#travel-packages"
              className="hover:text-accent transition duration-300"
            >
              Rental Mobil
            </a>
            <a
              href="#featured-rentals"
              className="hover:text-accent transition duration-300"
            >
              Pesan
            </a>
          </nav>

          {/* Auth buttons desktop */}
          <div className="hidden md:block">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                {session?.user?.image && (
                  // profile image (not required)
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={session.user.image}
                    alt={session.user.name || "user"}
                    className="h-8 w-8 rounded-full"
                  />
                )}
                <span className="text-white">
                  {session?.user?.name || session?.user?.email}
                </span>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="bg-white text-gray-900 px-4 py-2 rounded flex items-center space-x-2 hover:opacity-95"
              >
                {/* Inline Google icon (SVG) */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fill="#EA4335"
                    d="M12 11.5v2.5h6.3c-.3 1.8-1.8 4.9-6.3 4.9-3.8 0-6.9-3.1-6.9-6.9S8.2 5 12 5c2.2 0 3.7.9 4.6 1.7l1.9-1.9C17.6 3 15.1 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5 0 9-3.6 9-8.6 0-.6-.1-1.2-.3-1.9H12z"
                  />
                </svg>
                <span>Login with Google</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-button"
            className="text-white text-2xl md:hidden"
            aria-label="Toggle mobile menu"
            onClick={toggleMobile}
          >
            <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          id="mobile-menu-overlay"
          className={`lg:hidden mt-4 p-4 rounded-lg shadow-inner ${
            mobileOpen ? "" : "hidden"
          }`}
          style={{ backgroundColor: "rgba(79, 70, 229, 1)" }} // indigo-600 bg fallback
        >
          <div id="mobile-auth-container" className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-white text-2xl my-4 hover:text-accent transition duration-300"
            >
              Beranda
            </a>
            <a
              href="#travel-packages"
              className="text-white text-2xl my-4 hover:text-accent transition duration-300"
            >
              Rental Mobil
            </a>
            <a
              href="#featured-rentals"
              className="text-white text-2xl my-4 hover:text-accent transition duration-300"
            >
              Pesan
            </a>

            {/* Mobile auth buttons */}
            {isAuthenticated ? (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="bg-white text-gray-900 px-4 py-2 rounded hover:opacity-95"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="inline-block mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fill="#EA4335"
                    d="M12 11.5v2.5h6.3c-.3 1.8-1.8 4.9-6.3 4.9-3.8 0-6.9-3.1-6.9-6.9S8.2 5 12 5c2.2 0 3.7.9 4.6 1.7l1.9-1.9C17.6 3 15.1 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5 0 9-3.6 9-8.6 0-.6-.1-1.2-.3-1.9H12z"
                  />
                </svg>
                Login with Google
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-28">
        {/* Hero Section */}
        <section
          id="home"
          className="bg-cover bg-center h-96 md:h-screen flex items-center justify-center relative"
          style={{ backgroundImage: 'url("/images/Yogyakarta.jpg")' }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="text-center text-white z-10 px-4 pt-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Perjalanan Nyaman, Harga Terjangkau
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Sinatriatrans menyediakan layanan travel dan rental mobil terbaik
              untuk segala kebutuhan perjalanan Anda.
            </p>
            <a
              href="#featured-rentals"
              className="bg-amber-400 text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-amber-500 transition duration-300"
            >
              Lihat Armada
            </a>
          </div>
        </section>

        {/* Travel Packages Section */}
        <section id="travel-packages" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
              Paket Travel Unggulan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              {/* Paket 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 transition-transform transform hover:scale-105 duration-300">
                <div className="mb-4">
                  <i className="fas fa-car-side text-indigo-600 text-5xl" />
                </div>
                <h3 className="font-bold text-xl mb-2">Paket Harian</h3>
                <p className="text-gray-600 mb-4">
                  Sewa mobil harian dengan sopir. Cocok untuk perjalanan bisnis
                  atau liburan singkat.
                </p>
                <a
                  href="paket1.html"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300 font-medium"
                >
                  Lihat Detail
                </a>
              </div>

              {/* Paket 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 transition-transform transform hover:scale-105 duration-300">
                <div className="mb-4">
                  <i className="fas fa-calendar-week text-indigo-600 text-5xl" />
                </div>
                <h3 className="font-bold text-xl mb-2">Paket Mingguan</h3>
                <p className="text-gray-600 mb-4">
                  Sewa mobil mingguan dengan harga lebih hemat. Ideal untuk
                  kunjungan jangka panjang.
                </p>
                <a
                  href="paket2.html"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300 font-medium"
                >
                  Lihat Detail
                </a>
              </div>

              {/* Paket 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 transition-transform transform hover:scale-105 duration-300">
                <div className="mb-4">
                  <i className="fas fa-calendar-alt text-indigo-600 text-5xl" />
                </div>
                <h3 className="font-bold text-xl mb-2">Paket Bulanan</h3>
                <p className="text-gray-600 mb-4">
                  Sewa mobil bulanan dengan penawaran terbaik. Pilihan tepat
                  untuk kebutuhan transportasi rutin.
                </p>
                <a
                  href="paket3.html"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300 font-medium"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Rentals Section */}
        <section id="featured-rentals" className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Armada Unggulan
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Pilihan terbaik dari armada kami yang selalu terawat dan siap
              mengantar Anda.
            </p>

            <div
              id="featured-rentals-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* Mobil 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src="/images/avanza.jpg"
                  alt="Mobil 1"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">Toyota Avanza</h3>
                  <p className="text-gray-600 mb-4">
                    Cocok untuk keluarga kecil.
                  </p>
                  <a
                    href="booking-page.html"
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>

              {/* Mobil 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src="/images/brio.jpg"
                  alt="Mobil 2"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">Honda Brio</h3>
                  <p className="text-gray-600 mb-4">
                    Kenyamanan untuk perjalanan keluarga.
                  </p>
                  <a
                    href="booking-page.html"
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>

              {/* Mobil 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src="/images/innovareborn.png"
                  alt="Mobil 3"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">
                    Toyota Innova Reborn
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ideal untuk kelompok dan perjalanan jauh.
                  </p>
                  <a
                    href="booking-page.html"
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="rental-list.html"
                className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-700 transition duration-300"
              >
                Lihat Semua Mobil
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Keunggulan kami yang membuat perjalanan Anda lebih berkesan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-center bg-indigo-600 text-white rounded-full h-16 w-16 mb-4 mx-auto">
                  <i className="fas fa-shield-alt text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Aman & Terpercaya
                </h3>
                <p className="text-gray-600 text-sm">
                  Armada terawat dengan baik dan layanan pelanggan profesional.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-center bg-indigo-500 text-white rounded-full h-16 w-16 mb-4 mx-auto">
                  <i className="fas fa-dollar-sign text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Harga Kompetitif
                </h3>
                <p className="text-gray-600 text-sm">
                  Harga terbaik tanpa mengurangi kualitas layanan.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-center bg-amber-400 text-white rounded-full h-16 w-16 mb-4 mx-auto">
                  <i className="fas fa-clock text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Layanan 24/7
                </h3>
                <p className="text-gray-600 text-sm">
                  Siap membantu Anda kapan pun dan di mana pun.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-center bg-indigo-600 text-white rounded-full h-16 w-16 mb-4 mx-auto">
                  <i className="fas fa-map-marker-alt text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Jangkauan Luas
                </h3>
                <p className="text-gray-600 text-sm">
                  Melayani berbagai rute perjalanan di seluruh wilayah.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section (dengan Google Maps iframe) */}
        <section id="tentang-kami" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Tentang Kami
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Sinatriatrans didirikan dengan misi untuk menyediakan solusi
                transportasi yang andal, aman, dan nyaman bagi semua pelanggan.
                Kami memahami bahwa setiap perjalanan adalah cerita, dan kami
                berkomitmen untuk menjadi bagian dari cerita indah Anda dengan
                layanan terbaik kami.
              </p>

              <div className="rounded-xl overflow-hidden shadow-sm w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7904.75035725198!2d110.3653847443911!3d-7.855746118663867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJl.%20Semail%20No.RT.03%2C%20Mredo%2C%20Bangunharjo%2C%20Kec.%20Sewon%2C%20Kabupaten%20Bantul%2C%20Daerah%20Istimewa%20Yogyakarta%2055185!5e0!3m2!1sen!2sid!4v1755267781112!5m2!1sen!2sid"
                  style={{ width: "100%", height: 400, border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontak" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Hubungi Kami
              </h2>
              <p className="text-lg text-gray-600">
                Kami senang mendengar dari Anda. Kirimkan pesan atau hubungi
                kami.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <div className="space-y-8 bg-gray-50 p-8 rounded-xl shadow-md">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Informasi Kontak
                  </h3>
                  <p className="text-gray-600">
                    Tim kami siap membantu Anda 24/7. Jangan ragu untuk
                    menghubungi kami.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-map-marker-alt text-2xl text-indigo-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Alamat</h4>
                      <p className="text-gray-600">
                        Jl. Semail No.RT.03, Mredo, Bangunharjo, Kec. Sewon,
                        Kabupaten Bantul, Daerah Istimewa Yogyakarta 55185
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <i className="fas fa-phone-alt text-2xl text-indigo-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Telepon</h4>
                      <p className="text-gray-600">+62 813-8562-8082</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <i className="fas fa-envelope text-2xl text-indigo-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@sinatriatrans.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                <form
                  id="contact-form"
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setMessageBox({
                      visible: true,
                      text: "Pesan berhasil dikirim (dummy).",
                    });
                    e.currentTarget.reset();
                  }}
                >
                  <div>
                    <label
                      htmlFor="nama"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="nama"
                      name="nama"
                      required
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Alamat Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="pesan"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Pesan Anda
                    </label>
                    <textarea
                      id="pesan"
                      name="pesan"
                      rows={4}
                      required
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                    />
                  </div>

                  <div className="text-right">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition-colors"
                    >
                      Kirim Pesan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Message Box */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 items-center justify-center p-4 z-[999] ${
          messageBox.visible ? "flex" : "hidden"
        }`}
      >
        <div
          className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full mx-auto"
          role="alert"
        >
          <p id="message-text" className="text-center text-gray-800">
            {messageBox.text}
          </p>
          <div className="mt-4 text-center">
            <button
              onClick={() => setMessageBox({ visible: false, text: "" })}
              id="message-box-close"
              className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>

      {/* Footer (sama persis seperti kode asli yang kamu berikan) */}
      <footer className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8 mt-auto">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sinatriatrans</h3>
            <p className="container mx-auto text-gray-200 text-sm">
              Layanan travel dan rental mobil terbaik untuk segala kebutuhan
              perjalanan Anda.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="container mx-auto text-lg font-semibold mb-4">
              Tautan Cepat
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#travel-packages"
                  className="container mx-auto text-gray-200 hover:text-white text-sm"
                >
                  Layanan Kami
                </a>
              </li>
              <li>
                <a
                  href="rental-list.html"
                  className="container mx-auto text-gray-200 hover:text-white text-sm"
                >
                  Armada Kami
                </a>
              </li>
              <li>
                <a
                  href="syarat-ketentuan.html"
                  className="text-gray-200 hover:text-white text-sm"
                >
                  Syarat &amp; Ketentuan
                </a>
              </li>
              <li>
                <a
                  href="kebijakan-privasi.html"
                  className="container mx-auto text-gray-200 hover:text-white text-sm"
                >
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="item-right text-lg font-semibold mb-4">
              Ikuti Kami
            </h3>
            <p className="container mx-auto text-gray-200 text-sm mb-4">
              Dapatkan penawaran eksklusif langsung ke kotak masuk Anda.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-4 py-2 rounded-l-full focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 rounded-r-full hover:bg-indigo-700 transition duration-300"
              >
                <i className="fas fa-paper-plane" />
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <p className="text-gray-200 text-sm">
              Jl. Semail No.RT.03, Mredo, Bangunharjo, Kec. Sewon, Kabupaten
              Bantul, Daerah Istimewa Yogyakarta 55185
            </p>
            <p className="text-gray-200 text-sm mt-2">Tel: +62 813-8562-8082</p>
            <p className="text-gray-200 text-sm">
              Email: info@sinatriatrans.com
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 mt-8 text-center text-white text-sm">
          <p>
            © <span id="current-year">{year}</span> Sinatriatrans. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
