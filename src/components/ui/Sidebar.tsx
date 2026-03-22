"use client";

import { useState } from "react";

type SidebarProps = {
  side: "left" | "right";
  title?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export default function Sidebar({
  side,
  title,
  children,
  defaultOpen = true,
}: SidebarProps) {
  const [open, setOpen] = useState(defaultOpen);

  const positionClasses = side === "left" ? "left-0" : "right-0";
  const translateClass = open
    ? "translate-x-0"
    : side === "left"
      ? "-translate-x-full"
      : "translate-x-full";

  const togglePosition = side === "left" ? "-right-8" : "-left-8";

  return (
    <div
      className={`absolute top-0 ${positionClasses} h-full z-10 flex ${
        side === "right" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Panel */}
      <div
        className={`w-80 h-full bg-gray-950/85 backdrop-blur-xl border-${side === "left" ? "r" : "l"} border-white/10 transform transition-transform duration-300 ease-in-out ${translateClass} overflow-hidden flex flex-col`}
      >
        {title && (
          <div className="px-4 py-3 border-b border-white/10 flex-shrink-0">
            <h2 className="text-sm font-semibold text-white/80 uppercase tracking-wider">
              {title}
            </h2>
          </div>
        )}
        <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-white/10">
          {children}
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`absolute top-4 ${togglePosition} w-8 h-8 bg-gray-950/80 backdrop-blur border border-white/10 rounded-${side === "left" ? "r" : "l"}-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-gray-900/90 transition-all z-20`}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {open ? (
            side === "left" ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            )
          ) : (
            side === "left" ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            )
          )}
        </svg>
      </button>
    </div>
  );
}
