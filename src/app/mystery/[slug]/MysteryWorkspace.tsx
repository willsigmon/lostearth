"use client";

import dynamic from "next/dynamic";
import type { Mystery } from "@/types/mystery";
import Sidebar from "@/components/ui/Sidebar";
import MysteryHeader from "@/components/mystery/MysteryHeader";
import LayerPanel from "@/components/globe/LayerPanel";
import TimeSlider from "@/components/globe/TimeSlider";

// CesiumJS requires browser APIs (WebGL) — cannot SSR
const GlobeViewer = dynamic(
  () => import("@/components/globe/GlobeViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gray-950 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto" />
          <p className="text-white/50 text-sm">Loading globe...</p>
        </div>
      </div>
    ),
  }
);

type MysteryWorkspaceProps = {
  mystery: Mystery;
};

export default function MysteryWorkspace({ mystery }: MysteryWorkspaceProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-950">
      {/* 3D Globe */}
      <GlobeViewer mystery={mystery} />

      {/* Left Sidebar: Mystery Info */}
      <Sidebar side="left" title="Investigation">
        <MysteryHeader mystery={mystery} />
      </Sidebar>

      {/* Right Sidebar: Layers + Clues */}
      <Sidebar side="right" title="Layers" defaultOpen={false}>
        <LayerPanel />
      </Sidebar>

      {/* Bottom: Time Slider */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <TimeSlider />
      </div>

      {/* Top bar: Mystery title */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-black/60 backdrop-blur-md rounded-lg px-6 py-2 border border-white/10">
          <h1 className="text-white font-semibold text-sm">
            {mystery.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
