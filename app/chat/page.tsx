"use client";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="border-b border-zinc-800 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">💬 SaurxFrames Studio Chat</h1>
        <span className="text-green-400 text-sm">Online</span>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        <div className="bg-zinc-800 rounded-xl p-3 w-fit max-w-xs">
          👋 Welcome! This is your private chat.
        </div>

        <div className="bg-blue-600 rounded-xl p-3 ml-auto w-fit max-w-xs">
          Hello Saurabh!
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-zinc-800 p-4 flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-zinc-900 rounded-xl px-4 py-3 outline-none"
        />
        <button className="bg-blue-600 px-6 rounded-xl font-semibold">
          Send
        </button>
      </div>
    </main>
  );
}