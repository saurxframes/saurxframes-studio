"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function AdminPage() {
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email === "saurxmahirr@gmail.com") {
        setAllowed(true);

        const unsubUsers = onSnapshot(
          collection(db, "users"),
          (snapshot) => {
            setUsers(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
            );
          }
        );

        return () => unsubUsers();
      } else {
        window.location.href = "/";
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p className="text-white p-10">Loading...</p>;
  if (!allowed) return null;

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">
        📥 SaurxFrames Admin Inbox
      </h1>

      <div className="space-y-4">
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/chat?user=${user.id}`}
            className="block bg-zinc-900 hover:bg-zinc-800 rounded-xl p-4"
          >
            <h2 className="text-lg font-semibold">
              {user.name}
            </h2>

            <p className="text-gray-400 text-sm">
              {user.email}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}