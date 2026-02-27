import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppShell from "./pages/AppShell";
import DecodePage from "./pages/DecodePage";
import HabitCodesPage from "./pages/HabitCodesPage";
import CommandLayerPage from "./pages/CommandLayerPage";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<AppShell />} />
      <Route path="/app/decode" element={<DecodePage />} />
      <Route path="/app/habits" element={<HabitCodesPage />} />
      <Route path="/app/command" element={<CommandLayerPage />} />
    </Routes>
  );
}

