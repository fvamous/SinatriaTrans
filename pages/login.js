import { signIn, useSession } from "next-auth/react";
import Head from "next/head";

const LoginPage = () => {
  const { data: session } = useSession();

  // Redirect jika pengguna sudah login
  if (session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <img
            src={session.user.image}
            alt="User avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-900">
            Selamat datang, {session.user.name}
          </h1>
          <p className="text-gray-600">Anda sudah login.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Login - SinatriaTrans</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Login ke SinatriaTrans
          </h1>
          <button
            onClick={() => signIn("google")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
