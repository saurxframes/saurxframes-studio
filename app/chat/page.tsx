"use client";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
export default function ChatPage() {
  const [message, setMessage] = useState("");
 const [messages, setMessages] = useState<any[]>([]);

useEffect(() => {
  const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
    if (!user) return;

    const conversationId =
      user.email === "saurxmahirr@gmail.com"
        ? new URLSearchParams(window.location.search).get("user")
        : user.uid;

    const q = query(
      collection(db, "messages"),
      where("conversationId", "==", conversationId),
      orderBy("createdAt", "asc")
    );

    const unsubscribeMessages = onSnapshot(q, async (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );

      for (const item of snapshot.docs) {
        const data = item.data();

        if (data.email !== user.email && data.seen === false) {
          await updateDoc(doc(db, "messages", item.id), {
            seen: true,
          });
        }
      }
    });

    return unsubscribeMessages;
  });

  return () => unsubscribeAuth();
}, []);

const sendMessage = async () => {
  if (!message.trim() || !auth.currentUser) return;

  const isAdmin =
    auth.currentUser.email === "saurxmahirr@gmail.com";

  const conversationId = isAdmin
    ? new URLSearchParams(window.location.search).get("user")
    : auth.currentUser.uid;

  await addDoc(collection(db, "messages"), {
    text: message,
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    conversationId,
    createdAt: serverTimestamp(),
    seen: false,
    sender: isAdmin ? "admin" : "visitor",
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

     <div className="text-xs opacity-70 mt-1 flex justify-between items-center gap-2">
       <span>
         {msg.createdAt?.seconds
           ? new Date(msg.createdAt.seconds * 1000).toLocaleTimeString([], {
               hour: "2-digit",
               minute: "2-digit",
            })
          : ""}
      </span>

      {msg.email === auth.currentUser?.email && (
        <span>
          {msg.seen ? "✓✓ Seen" : "✓ Sent"}
        </span>
      )}
    </div>
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