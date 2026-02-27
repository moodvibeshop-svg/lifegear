import React from "react";
import { Link } from "react-router-dom";

export default function AppShell() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Nebula background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.95)_0,transparent_65%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.45)_0,transparent_65%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.45)_0,transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.45)_0,transparent_55%)] opacity-65 mix-blend-screen"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0,transparent_52%)] opacity-80 mix-blend-screen"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_70%,rgba(0,0,0,0.97)_100%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-14 pb-16 flex flex-col gap-10">
        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Lifegear OS
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Decode the Hustle. Build your Habit Codes.
          </p>
          <div className="h-px w-full bg-gradient-to-r from-purple-500/40 via-sky-400/40 to-emerald-400/40 opacity-80" />
        </header>

        <main>
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {/* Card 1: Decode the Hustle */}
            <Link
              to="/app/decode"
              className="rounded-xl bg-white/5 border border-sky-500/30 backdrop-blur-xl shadow-[0_0_12px_rgba(56,189,248,0.2)] hover:border-sky-400/80 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-transform transition-shadow duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <div className="p-5 md:p-6 space-y-3">
                <h2 className="text-lg font-semibold">Decode the Hustle</h2>
                <p className="text-sm text-gray-400">
                  Break down your decisions into structured clarity.
                </p>
              </div>
            </Link>

            {/* Card 2: Habit Codes */}
            <Link
              to="/app/habits"
              className="rounded-xl bg-white/5 border border-violet-500/30 backdrop-blur-xl shadow-[0_0_12px_rgba(139,92,246,0.2)] hover:border-violet-400/80 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-transform transition-shadow duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <div className="p-5 md:p-6 space-y-3">
                <h2 className="text-lg font-semibold">Habit Codes</h2>
                <p className="text-sm text-gray-400">
                  Build execution systems that compound daily.
                </p>
              </div>
            </Link>

            {/* Card 3: Command Layer */}
            <Link
              to="/app/command"
              className="rounded-xl bg-white/5 border border-emerald-500/30 backdrop-blur-xl shadow-[0_0_12px_rgba(16,185,129,0.2)] hover:border-emerald-400/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-transform transition-shadow duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <div className="p-5 md:p-6 space-y-3">
                <h2 className="text-lg font-semibold">Command Layer</h2>
                <p className="text-sm text-gray-400">
                  Control your time. Execute with precision.
                </p>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}


