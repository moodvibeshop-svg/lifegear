import React from "react";
type Variant = "default" | "secondary";
export function Button({
  className = "",
  variant = "default",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base = "inline-flex items-center justify-center gap-2 border px-4 py-2 text-sm font-medium transition active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none";
  const v = variant === "secondary"
    ? "border-zinc-800 bg-zinc-950/60 text-zinc-100 hover:bg-zinc-900/60"
    : "border-sky-500/25 bg-sky-500/15 text-sky-50 hover:bg-sky-500/20";
  return <button className={base + " " + v + " " + className} {...props}>{children}</button>;
}
