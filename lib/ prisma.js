import { PrismaClient } from "@prisma/client";

let prisma;

// Pastikan PrismaClient hanya dibuat satu kali di lingkungan pengembangan
// untuk mencegah masalah hot-reloading di Next.js
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
