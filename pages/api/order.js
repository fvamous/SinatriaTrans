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
    // Kueri Prisma untuk mengambil pesanan HANYA untuk pengguna yang sedang login
    const orders = await prisma.order.findMany({
      where: {
        userId: session.user.id,
      },
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders." });
  }
}
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
    // Kueri Prisma untuk mengambil pesanan HANYA untuk pengguna yang sedang login
    const orders = await prisma.order.findMany({
      where: {
        userId: session.user.id,
      },
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders." });
  }
}
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
    // Kueri Prisma untuk mengambil pesanan HANYA untuk pengguna yang sedang login
    const orders = await prisma.order.findMany({
      where: {
        userId: session.user.id,
      },
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders." });
  }
}
