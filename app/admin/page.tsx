"use client";

import Link from "next/link";

const users = [
  {
    id: 1,
    name: "Titu",
    lastMessage: "Kya kar rhe ho",
  },
  {
    id: 2,
    name: "Raj Meena",
    lastMessage: "Hello",
  },
];

export default function AdminPage() {
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
            <h2 className="text-lg font-semibold">{user.name}</h2>

            <p className="text-gray-400 text-sm">
              {user.lastMessage}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}