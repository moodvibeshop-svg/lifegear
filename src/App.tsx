import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>

      {/* Floating subtle particles */}
      <div className="absolute w-full h-full">
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse top-1/4 left-1/3"></div>
        <div className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse top-1/2 left-2/3"></div>
        <div className="absolute w-1 h-1 bg-white/25 rounded-full animate-pulse top-3/4 left-1/4"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl px-6 space-y-8">
        <h1 className="text-6xl font-extrabold tracking-tight">Lifegear</h1>

        <h2 className="text-2xl text-gray-300 font-light leading-relaxed">
          The AI Operating System for High-Performance Minds.
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto">
          Structure your decisions. Automate your execution. Command your time.
        </p>

        <div>
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-all duration-300">
            Enter Lifegear
          </button>
        </div>
      </div>
    </div>
  );
}
