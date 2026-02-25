import React from "react";
export function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={"rounded-2xl border " + className}>{children}</div>;
}
export function CardHeader({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={"p-6 pb-3 " + className}>{children}</div>;
}
export function CardTitle({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={"text-lg font-semibold " + className}>{children}</div>;
}
export function CardContent({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={"p-6 pt-0 " + className}>{children}</div>;
}
