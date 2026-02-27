import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppShell from "./pages/AppShell";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<AppShell />} />
    </Routes>
  );
}

