import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type TimeHorizon = "Today" | "This week" | "This month" | "90 days";
type RiskTolerance = "Low" | "Medium" | "High";
type ConfidenceLevel = "Low" | "Medium" | "High";

interface DecodeOutput {
  summary: string;
  options: string[];
  recommendation: string;
  nextActions: string[];
  avoid: string[];
  confidence: ConfidenceLevel;
}

interface DecodeEntry {
  id: string;
  decision: string;
  createdAt: string;
  output: DecodeOutput;
}

const STORAGE_KEY = "lifegear_decode_history";

function loadHistory(): DecodeEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as DecodeEntry[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function saveHistory(entries: DecodeEntry[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // ignore write errors
  }
}

function generateDecodeOutput(args: {
  decision: string;
  goal: string;
  constraints: string;
  timeHorizon: TimeHorizon;
  riskTolerance: RiskTolerance;
}): DecodeOutput {
  const { decision, goal, constraints, timeHorizon, riskTolerance } = args;

  const baseSubject =
    goal.trim() ||
    decision.trim().slice(0, 80) ||
    "this decision in your current context";

  const summary = `Decode the Hustle: Clarifying how to move on ${baseSubject}.`;

  const options: string[] = [
    `Conservative path: reduce scope and focus on the smallest valuable slice of ${baseSubject}.`,
    `Balanced path: commit to a realistic plan for ${baseSubject} over ${timeHorizon.toLowerCase()}, with weekly checkpoints.`,
    `Aggressive path: lean in heavily on ${baseSubject}, accepting more volatility to accelerate learning.`,
  ];

  let recommendation: string;
  let confidence: ConfidenceLevel;
  switch (riskTolerance) {
    case "Low":
      recommendation =
        "Choose the conservative path. Protect downside, preserve energy, and optimise for consistency.";
      confidence = "High";
      break;
    case "High":
      recommendation =
        "Choose the aggressive path. Front-load experiments, learn quickly, and be explicit about what you are willing to trade off.";
      confidence = "Medium";
      break;
    default:
      recommendation =
        "Choose the balanced path. Move steadily while leaving room for course-corrections and new information.";
      confidence = "High";
      break;
  }

  const horizonPhrase =
    timeHorizon === "Today"
      ? "today"
      : timeHorizon === "This week"
      ? "this week"
      : timeHorizon === "This month"
      ? "this month"
      : "the next 90 days";

  const nextActions: string[] = [
    "Write a one-paragraph definition of success for this decision.",
    `List the top 3 constraints you must respect ${horizonPhrase}.`,
    "Block time on your calendar for a focused work session dedicated only to this decision.",
  ];

  if (constraints.trim()) {
    nextActions.push("Re-read your constraints and remove any that are self-imposed but not actually real.");
  }

  const avoid: string[] = [
    "Avoid adding new inputs once you commit to an option for this horizon.",
    "Avoid vague language in notes or tasks — favour concrete verbs and outcomes.",
  ];

  if (riskTolerance === "Low") {
    avoid.push("Avoid over-committing to timelines that depend on other people or external events.");
  } else if (riskTolerance === "High") {
    avoid.push("Avoid ignoring early warning signals — schedule explicit review points.");
  }

  return {
    summary,
    options,
    recommendation,
    nextActions,
    avoid,
    confidence,
  };
}

export default function DecodePage() {
  const [decision, setDecision] = useState("");
  const [goal, setGoal] = useState("");
  const [constraints, setConstraints] = useState("");
  const [timeHorizon, setTimeHorizon] = useState<TimeHorizon>("This week");
  const [riskTolerance, setRiskTolerance] =
    useState<RiskTolerance>("Medium");
  const [output, setOutput] = useState<DecodeOutput | null>(null);
  const [history, setHistory] = useState<DecodeEntry[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const initial = loadHistory();
    setHistory(initial.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)));
  }, []);

  const handleDecode = (event: React.FormEvent) => {
    event.preventDefault();
    if (!decision.trim()) {
      return;
    }

    const generated = generateDecodeOutput({
      decision,
      goal,
      constraints,
      timeHorizon,
      riskTolerance,
    });

    const now = new Date();
    const entry: DecodeEntry = {
      id: String(now.getTime()),
      decision: decision.trim(),
      createdAt: now.toISOString(),
      output: generated,
    };

    const nextHistory = [entry, ...history];
    setHistory(nextHistory);
    saveHistory(nextHistory);
    setOutput(generated);
    setSelectedId(entry.id);
  };

  const handleClearForm = () => {
    setDecision("");
    setGoal("");
    setConstraints("");
    setTimeHorizon("This week");
    setRiskTolerance("Medium");
  };

  const handleSelectEntry = (entry: DecodeEntry) => {
    setOutput(entry.output);
    setSelectedId(entry.id);
  };

  const handleDeleteEntry = (id: string) => {
    const next = history.filter((entry) => entry.id !== id);
    setHistory(next);
    saveHistory(next);
    if (selectedId === id) {
      setOutput(null);
      setSelectedId(null);
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
    saveHistory([]);
    setOutput(null);
    setSelectedId(null);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Space / nebula background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.95)_0,transparent_65%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.4)_0,transparent_65%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.4)_0,transparent_55%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.4)_0,transparent_55%)] opacity-60 mix-blend-screen"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0,transparent_55%)] opacity-80 mix-blend-screen"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.85)_70%,rgba(0,0,0,0.97)_100%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 md:py-14 space-y-8">
        <header className="space-y-3 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Decode the Hustle
          </h1>
          <p className="text-gray-300">
            Break down your decisions into structured, legible moves.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          {/* Left: Input form */}
          <section className="rounded-2xl bg-white/5 border border-sky-500/30 backdrop-blur-xl shadow-[0_0_16px_rgba(56,189,248,0.18)] p-5 md:p-6 space-y-5">
            <h2 className="text-lg font-semibold text-sky-100">
              Decision Input
            </h2>
            <form className="space-y-4" onSubmit={handleDecode}>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  Decision / Problem<span className="text-red-400"> *</span>
                </label>
                <textarea
                  value={decision}
                  onChange={(e) => setDecision(e.target.value)}
                  required
                  className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400/80 focus:border-transparent resize-none min-h-[96px]"
                  placeholder="What are you trying to decide or untangle?"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  Goal
                </label>
                <input
                  type="text"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400/80 focus:border-transparent"
                  placeholder="What does success look like here?"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  Constraints
                </label>
                <textarea
                  value={constraints}
                  onChange={(e) => setConstraints(e.target.value)}
                  className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400/80 focus:border-transparent resize-none min-h-[80px]"
                  placeholder="Time, budget, energy, commitments, dependencies..."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">
                    Time Horizon
                  </label>
                  <select
                    value={timeHorizon}
                    onChange={(e) =>
                      setTimeHorizon(e.target.value as TimeHorizon)
                    }
                    className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-400/80 focus:border-transparent"
                  >
                    <option>Today</option>
                    <option>This week</option>
                    <option>This month</option>
                    <option>90 days</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">
                    Risk Tolerance
                  </label>
                  <select
                    value={riskTolerance}
                    onChange={(e) =>
                      setRiskTolerance(e.target.value as RiskTolerance)
                    }
                    className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-400/80 focus:border-transparent"
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!decision.trim()}
                >
                  Decode
                </button>
                <button
                  type="button"
                  onClick={handleClearForm}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-white/15 bg-black/40 text-sm text-gray-200 hover:bg-white/10 transition-colors duration-200"
                >
                  Clear
                </button>
              </div>
            </form>
          </section>

          {/* Right: Output + history */}
          <section className="space-y-4">
            <div className="rounded-2xl bg-white/5 border border-violet-500/30 backdrop-blur-xl shadow-[0_0_16px_rgba(139,92,246,0.18)] p-5 md:p-6 min-h-[220px]">
              <h2 className="text-lg font-semibold text-violet-100 mb-3">
                Decode Output
              </h2>
              {output ? (
                <div className="space-y-3 text-sm text-gray-200">
                  <p className="text-gray-100">{output.summary}</p>

                  <div>
                    <h3 className="font-medium text-gray-100 mb-1">
                      Options
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {output.options.map((opt, idx) => (
                        <li key={idx}>{opt}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-100 mb-1">
                      Recommendation
                    </h3>
                    <p className="text-gray-300">{output.recommendation}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-100 mb-1">
                      Next 3 actions
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {output.nextActions.map((act, idx) => (
                        <li key={idx}>{act}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-100 mb-1">
                      What to avoid
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {output.avoid.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-100 mb-1">
                      Confidence
                    </h3>
                    <p className="text-gray-300">{output.confidence}</p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-400">
                  No decode yet. Enter a decision on the left and press{" "}
                  <span className="font-semibold text-gray-200">Decode</span> to
                  generate structure.
                </p>
              )}
            </div>

            <div className="rounded-2xl bg-white/5 border border-emerald-500/30 backdrop-blur-xl shadow-[0_0_16px_rgba(16,185,129,0.18)] p-4 md:p-5 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-sm font-semibold text-emerald-100">
                  History
                </h2>
                {history.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearHistory}
                    className="text-xs text-red-300 hover:text-red-200"
                  >
                    Clear all
                  </button>
                )}
              </div>
              {history.length === 0 ? (
                <p className="text-xs text-gray-500">
                  Your recent decodes will appear here.
                </p>
              ) : (
                <ul className="space-y-2 max-h-52 overflow-y-auto pr-1">
                  {history.map((entry) => (
                    <li
                      key={entry.id}
                      className={`flex items-start justify-between gap-3 rounded-md px-2 py-2 text-xs cursor-pointer transition-colors ${
                        selectedId === entry.id
                          ? "bg-emerald-500/10 border border-emerald-500/40"
                          : "bg-black/30 border border-white/5 hover:bg-white/5"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => handleSelectEntry(entry)}
                        className="flex-1 text-left space-y-1"
                      >
                        <div className="font-medium text-gray-100">
                          {entry.decision.length > 40
                            ? entry.decision.slice(0, 40) + "…"
                            : entry.decision}
                        </div>
                        <div className="text-[10px] text-gray-400">
                          {new Date(entry.createdAt).toLocaleString()}
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteEntry(entry.id)}
                        className="text-[10px] text-gray-500 hover:text-red-300 px-1"
                        aria-label="Delete decode entry"
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="pt-2">
              <Link
                to="/app"
                className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Back to Lifegear OS
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

