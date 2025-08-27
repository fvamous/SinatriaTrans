// lib/firebaseClient.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Config ambil dari Firebase console → Project Settings → SDK setup
const firebaseConfig = {
  apiKey: "AIzaSyD5aNiMrA_edl2jvh_aag6ZVVRppON6CeQ",
  authDomain: "sinatriatrans-efeb8.firebaseapp.com",
  projectId: "sinatriatrans-efeb8",
  storageBucket: "sinatriatrans-efeb8.firebasestorage.app",
  messagingSenderId: "58510444136",
  appId: "1:58510444136:web:250c02bc10211215095ddd",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
