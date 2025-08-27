import "dotenv/config"; // otomatis load .env

import * as functions from "firebase-functions";
import { parse } from "url";
import nextAuth from "../.next/server/pages/api/auth/[...nextauth].js";

// Bungkus handler jadi fungsi Firebase
export const auth = functions.https.onRequest((req, res) => {
  const parsedUrl = parse(req.url, true);
  return nextAuth(req, res, parsedUrl);
});
