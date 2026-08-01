import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQDxZ-GHfm_uKG6TKzXtAQYS1mdwIfpF4",
  authDomain: "saurxframes-studio.firebaseapp.com",
  projectId: "saurxframes-studio",
  storageBucket: "saurxframes-studio.firebasestorage.app",
  messagingSenderId: "780878729699",
  appId: "1:780878729699:web:85ccb18e8f63bf959d90d6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();