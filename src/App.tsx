import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="p-10 rounded-2xl border border-zinc-700 bg-zinc-900 text-center space-y-4">
        <h1 className="text-3xl font-bold">Lifegear</h1>
        <p className="text-zinc-400">Your AI-powered life operating system.</p>
        <button className="px-6 py-2 bg-white text-black rounded-lg hover:opacity-80 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}