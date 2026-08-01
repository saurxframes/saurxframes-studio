"use client";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
export default function ChatPage() {
  const [message, setMessage] = useState("");
 const [messages, setMessages] = useState<any[]>([]);

useEffect(() => {
  const q = query(
    collection(db, "messages"),
    orderBy("createdAt", "asc")
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    setMessages(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  });

  return () => unsubscribe();
}, []);

const sendMessage = async () => {
  if (!message.trim()) return;

  await addDoc(collection(db, "messages"), {
    text: message,
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
    createdAt: serverTimestamp(),
  });

  setMessage("");
};
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="border-b border-zinc-800 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">💬 SaurxFrames Studio Chat</h1>
        <span className="text-green-400 text-sm">Online</span>
      </div>

      {/* Messages */}
<div className="flex-1 p-4 overflow-y-auto space-y-3">

  {messages.length === 0 && (
    <div className="bg-zinc-800 rounded-xl p-3 w-fit max-w-xs">
      👋 Welcome! Start chatting...
    </div>
  )}

  {messages.map((msg) => (
    <div
      key={msg.id}
      className={`rounded-xl p-3 w-fit max-w-xs ${
        msg.email === auth.currentUser?.email
          ? "bg-blue-600 ml-auto"
          : "bg-zinc-800"
      }`}
    >
      <p>{msg.text}</p>

      <span className="text-xs opacity-70 block mt-1">
        {msg.name}
      </span>
    </div>
  ))}

</div>

    {/* Input */}
    <div className="border-t border-zinc-800 p-4 flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMessage();
        }}
         placeholder="Type your message..."
         className="flex-1 bg-zinc-900 rounded-xl px-4 py-3 outline-none"
      />

      <button
        onClick={sendMessage}
        className="bg-blue-600 px-6 rounded-xl font-semibold"
     >
       Send
      </button>
     </div>
    </main>
  );
}