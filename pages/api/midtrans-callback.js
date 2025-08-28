import prisma from "../../lib/prisma"; // Perbaikan path
import midtransClient from "midtrans-client"; // Ini akan berfungsi setelah Anda menginstal paket

const apiClient = new midtransClient.CoreApi({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

export default async function handle(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const statusResponse = await apiClient.transaction.notification(req.body);
    const orderId = statusResponse.order_id;
    const transactionStatus = statusResponse.transaction_status;
    const fraudStatus = statusResponse.fraud_status;

    console.log(`Notification received for order ID: ${orderId}`);

    if (transactionStatus == "capture") {
      if (fraudStatus == "challenge") {
        // TODO: Update order status to "challenge"
      } else if (fraudStatus == "accept") {
        // TODO: Update order status to "success" or "settlement"
      }
    } else if (transactionStatus == "settlement") {
      // Update the order status in your database
      await prisma.order.update({
        where: { id: orderId },
        data: { paymentStatus: "settlement", orderStatus: "accepted" },
      });
    } else if (
      transactionStatus == "cancel" ||
      transactionStatus == "deny" ||
      transactionStatus == "expire"
    ) {
      // Update the order status to "failed" or "expired"
      await prisma.order.update({
        where: { id: orderId },
        data: { paymentStatus: transactionStatus, orderStatus: "rejected" },
      });
    }

    res.status(200).send("OK");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
}
