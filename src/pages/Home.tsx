import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Nebula glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.95)_0,transparent_65%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.6)_0,transparent_65%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.6)_0,transparent_55%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.6)_0,transparent_55%)] opacity-70 mix-blend-screen"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0,transparent_52%)] opacity-80 mix-blend-screen"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_70%,rgba(0,0,0,0.95)_100%)]"></div>

      {/* Floating subtle particles / starfield */}
      <div className="pointer-events-none absolute inset-0">
        {/* Regular stars */}
        <div className="absolute w-[3px] h-[3px] bg-white/55 rounded-full top-1/4 left-[18%] blur-[0.5px] drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] twinkle twinkle-d1"></div>
        <div className="absolute w-[3px] h-[3px] bg-white/5 rounded-full top-[22%] left-[46%] blur-[2px]"></div>
        <div className="absolute w-[3px] h-[3px] bg-white/55 rounded-full top-[28%] left-[68%] blur-[0.5px] drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] twinkle-slow twinkle-d2"></div>
        <div className="absolute w-[3px] h-[3px] bg-white/5 rounded-full top-[32%] left-[80%] blur-[2px]"></div>

        <div className="absolute w-[2px] h-[2px] bg-white/45 rounded-full top-[42%] left-[16%] blur-[0.5px] twinkle twinkle-d3"></div>
        <div className="absolute w-[2px] h-[2px] bg-white/5 rounded-full top-[46%] left-[36%] blur-[1.5px]"></div>
        <div className="absolute w-[3px] h-[3px] bg-white/50 rounded-full top-[51%] left-[58%] blur-[0.5px] twinkle-slow twinkle-d4"></div>
        <div className="absolute w-[2px] h-[2px] bg-white/5 rounded-full top-[55%] left-[77%] blur-[1.5px]"></div>

        <div className="absolute w-[3px] h-[3px] bg-white/55 rounded-full top-[67%] left-[22%] blur-[0.5px] twinkle twinkle-d5"></div>
        <div className="absolute w-[2px] h-[2px] bg-white/5 rounded-full top-[70%] left-[44%] blur-[1.5px]"></div>
        <div className="absolute w-[3px] h-[3px] bg-white/50 rounded-full top-[74%] left-[63%] blur-[0.75px] twinkle twinkle-d2"></div>
        <div className="absolute w-[2px] h-[2px] bg-white/5 rounded-full top-[78%] left-[81%] blur-[1.5px]"></div>

        {/* Brighter hero stars */}
        <div className="absolute w-[6px] h-[6px] bg-white/85 rounded-full top-[30%] left-[30%] blur-[1px] drop-shadow-[0_0_12px_rgba(255,255,255,0.98)] twinkle twinkle-d1"></div>
        <div className="absolute w-[5px] h-[5px] bg-white/80 rounded-full top-[52%] left-[72%] blur-[1px] drop-shadow-[0_0_12px_rgba(255,255,255,0.95)] twinkle-slow twinkle-d4"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl px-6 space-y-8">
        <div className="mx-auto max-w-2xl rounded-3xl bg-black/40 backdrop-blur-sm px-6 py-8 md:px-10 md:py-10 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Lifegear
          </h1>

          <h2 className="text-2xl text-gray-100 font-light leading-relaxed">
            The AI Operating System for High-Performance Minds.
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Structure your decisions. Automate your execution. Command your
            time.
          </p>

          <div>
            <Link
              to="/app"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-semibold rounded-md shadow-[0_0_18px_rgba(129,140,248,0.45)] hover:shadow-[0_0_28px_rgba(129,140,248,0.8)] hover:bg-gray-100 transition-all duration-200"
            >
              Enter Lifegear
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

