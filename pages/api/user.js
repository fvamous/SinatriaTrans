import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]"; // Perbaikan path relatif
import prisma from "../../lib/prisma"; // Perbaikan path relatif

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  // Pastikan pengguna sudah terautentikasi
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Ambil data pengguna dari database menggunakan ID sesi
    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        name: true,
        email: true,
        image: true,
        role: true, // Sertakan peran untuk otorisasi
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Failed to fetch user data." });
  }
}
