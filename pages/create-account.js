import Head from "next/head";

export default function Register() {
  return (
    <>
      <Head>
        <title>Buat Akun - SinatriaTrans</title>
      </Head>

      <div className="auth-container">
        <h2>Buat Akun</h2>
        <form>
          <div className="form-group">
            <label>Nama</label>
            <input type="text" placeholder="Masukkan nama" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Masukkan email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Buat password" required />
          </div>

          <button type="submit" className="btn-primary">
            Daftar
          </button>
        </form>

        <p>
          Sudah punya akun?{" "}
          <a href="/login" className="link">
            Masuk di sini
          </a>
        </p>
      </div>
    </>
  );
}
