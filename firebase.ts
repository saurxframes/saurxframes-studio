import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQDxZ-GHfm_uKG6TKzXtAQYS1mdwIfpF4",
  authDomain: "saurxframes-studio.firebaseapp.com",
  projectId: "saurxframes-studio",
  storageBucket: "saurxframes-studio.firebasestorage.app",
  messagingSenderId: "780878729699",
  appId: "1:780878729699:web:85ccb18e8f63bf959d90d6",
};

const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;