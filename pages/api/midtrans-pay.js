import { getSession } from "next-auth/react";
import prisma from "../../lib/prisma"; // Perbaikan path relatif
import midtransClient from "midtrans-client";

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

export default async function handle(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.method === "POST") {
    const { orderId, carId, startDate, endDate, totalPrice } = req.body;

    try {
      // Simpan pesanan ke database dengan status pembayaran "pending"
      const newOrder = await prisma.order.create({
        data: {
          userId: session.user.id,
          carId: carId,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          totalPrice: totalPrice,
          orderStatus: "pending",
          paymentStatus: "pending",
        },
      });

      // Buat transaksi di Midtrans
      const parameter = {
        transaction_details: {
          order_id: newOrder.id,
          gross_amount: totalPrice,
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          first_name: session.user.name,
          email: session.user.email,
        },
      };

      const transaction = await snap.createTransaction(parameter);
      const transactionToken = transaction.token;

      // Simpan token ke database untuk referensi
      await prisma.order.update({
        where: { id: newOrder.id },
        data: { paymentToken: transactionToken },
      });

      res.status(200).json({ token: transactionToken });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Gagal membuat transaksi Midtrans." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
