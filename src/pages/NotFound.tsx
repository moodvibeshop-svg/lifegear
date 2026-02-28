import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl w-full space-y-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          This route doesn’t exist. Head back to the dashboard.
        </p>
        <div>
          <Link
            to="/app"
            className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Return to Lifegear OS
          </Link>
        </div>
      </div>
    </div>
  );
}
