import React from "react";
export function Badge({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <span className={"inline-flex items-center gap-1 text-xs " + className}>{children}</span>;
}
