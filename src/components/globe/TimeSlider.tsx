"use client";

import { useGlobeStore } from "@/stores/globeStore";

export default function TimeSlider() {
  const { selectedDate, setSelectedDate } = useGlobeStore();

  return (
    <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md rounded-lg px-4 py-2 border border-white/10">
      <label className="text-xs text-white/50 uppercase tracking-wider whitespace-nowrap">
        Imagery Date
      </label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        max={new Date().toISOString().split("T")[0]}
        min="2000-01-01"
        className="bg-transparent text-white text-sm border border-white/20 rounded px-2 py-1 focus:outline-none focus:border-cyan-400"
      />
    </div>
  );
}
