// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD5aNiMrA_edl2jvh_aag6ZVVRppON6CeQ",
    authDomain: "sinatriatrans-efeb8.firebaseapp.com",
    projectId: "sinatriatrans-efeb8",
    storageBucket: "sinatriatrans-efeb8.firebasestorage.app",
    messagingSenderId: "58510444136",
    appId: "1:58510444136:web:250c02bc10211215095ddd",
    measurementId: "G-M5VWY97KX2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
