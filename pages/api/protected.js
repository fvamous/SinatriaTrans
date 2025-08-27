import { adminAuth } from "../../lib/firebaseAdmin";

export default async function handler(req, res) {
  try {
    // Ambil UID dari query parameter
    const { uid } = req.query;
    if (!uid) {
      return res.status(400).json({ error: "UID is required" });
    }

    // Ambil data user dari Firebase Admin
    const user = await adminAuth.getUser(uid);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
