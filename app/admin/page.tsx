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
    let unsubUsers: (() => void) | undefined;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email === "saurxmahirr@gmail.com") {
        setAllowed(true);

        unsubUsers = onSnapshot(
          collection(db, "users"),
          (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));

            setUsers(data);
            setLoading(false);
          }
        );
      } else {
        setAllowed(false);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
      if (unsubUsers) unsubUsers();
    };
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </main>
    );
  }

  if (!allowed) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Access Denied
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">
        📥 SaurxFrames Admin Inbox
      </h1>

      {users.length === 0 ? (
        <p>No visitors yet.</p>
      ) : (
        <div className="space-y-4">
          {users.map((user) => (
            <Link
              key={user.id}
              href={`/chat?user=${user.uid}`}
              className="block bg-zinc-900 hover:bg-zinc-800 rounded-xl p-4"
            >
              <h2 className="text-lg font-semibold">
                {user.name || "Unknown User"}
              </h2>

              <p className="text-gray-400 text-sm">
                {user.email}
              </p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}