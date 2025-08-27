import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {Request, Response} from "express";

// ✅ init firebase admin
if (!admin.apps.length) {
  admin.initializeApp();
}

// contoh fungsi API sederhana
export const helloWorld = functions.https.onRequest((req: Request, res: Response) => {
  res.send("Hello from Firebase Functions + TypeScript 🚀");
});

// contoh proteksi (cek auth token)
export const protectedApi = functions.https.onRequest(async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).send("Unauthorized");
      return;
    }

    const idToken = authHeader.split("Bearer ")[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    res.json({
      message: "Protected API ✅",
      uid: decodedToken.uid,
      email: decodedToken.email,
    });
  } catch (error) {
    console.error("Auth error:", error);
    res.status(403).send("Forbidden");
  }
});
