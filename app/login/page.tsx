"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      alert(`Welcome ${result.user.displayName}!`);

      window.location.href = "/chat";
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold text-white mb-3">
          Welcome to SaurxFrames Studio
        </h1>

        <p className="text-gray-400 mb-6">
          Sign in to chat privately with Saurabh.
        </p>

        <button
          onClick={handleGoogleLogin}
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200"
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}