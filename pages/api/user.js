
export default async function handler(req, res) {
  try {
    const { uid } = req.query;
    if (!uid) {
      return res.status(400).json({ error: "UID is required" });
    }

    const user = await authAdmin.getUser(uid);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
