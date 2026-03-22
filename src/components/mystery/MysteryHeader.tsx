"use client";

import { useState } from "react";
import type { Mystery } from "@/types/mystery";

type MysteryHeaderProps = {
  mystery: Mystery;
};

export default function MysteryHeader({ mystery }: MysteryHeaderProps) {
  const [factsOpen, setFactsOpen] = useState(false);

  return (
    <div className="space-y-3">
      <div>
        <h1 className="text-lg font-bold text-white">{mystery.title}</h1>
        {mystery.subtitle && (
          <p className="text-sm text-white/50 mt-0.5">{mystery.subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
            mystery.status === "active"
              ? "bg-green-500/20 text-green-300"
              : mystery.status === "solved"
                ? "bg-cyan-500/20 text-cyan-300"
                : "bg-white/10 text-white/50"
          }`}
        >
          {mystery.status}
        </span>
        <span className="text-xs text-white/30">
          {mystery.known_facts.length} known facts
        </span>
      </div>

      <p className="text-sm text-white/70 leading-relaxed line-clamp-4">
        {mystery.description.split("\n\n")[0]}
      </p>

      {/* Known Facts Accordion */}
      <button
        onClick={() => setFactsOpen(!factsOpen)}
        className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <svg
          className={`w-3 h-3 transition-transform ${factsOpen ? "rotate-90" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        Known Facts
      </button>

      {factsOpen && (
        <div className="space-y-2 pl-4 border-l border-white/10">
          {mystery.known_facts.map((fact, i) => (
            <div key={i} className="text-xs">
              <span className="text-cyan-400/60 font-mono">{fact.date}</span>
              <p className="text-white/60 mt-0.5">{fact.fact}</p>
            </div>
          ))}
        </div>
      )}

      {/* Timeline */}
      {mystery.timeline.length > 0 && (
        <div className="space-y-1">
          <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider">
            Timeline
          </h4>
          <div className="space-y-1.5">
            {mystery.timeline.map((event, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-xs group cursor-pointer hover:bg-white/5 rounded px-1 py-0.5 -mx-1"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white/40 font-mono text-[10px]">
                    {event.date.split("T")[0]}
                  </span>
                  <p className="text-white/60 group-hover:text-white/80 transition-colors">
                    {event.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
