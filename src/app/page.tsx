import Link from "next/link";
import { MYSTERIES } from "@/lib/mysteries";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-gray-950 to-gray-950" />
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            Lost
            <span className="text-cyan-400">Earth</span>
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Explore the world&apos;s greatest unsolved mysteries on a 3D globe.
            Overlay satellite imagery, historical maps, and crowd-sourced clues
            to discover what others have missed.
          </p>
          <p className="mt-2 text-sm text-white/30">
            Inspired by pilot Justin Myers, who found Amelia Earhart&apos;s
            possible wreckage using Google Earth.
          </p>
        </div>
      </div>

      {/* Mystery Catalog */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-6">
          Active Investigations
        </h2>

        <div className="grid gap-4">
          {MYSTERIES.map((mystery) => (
            <Link
              key={mystery.id}
              href={`/mystery/${mystery.slug}`}
              className="group block bg-white/5 hover:bg-white/8 border border-white/10 hover:border-cyan-400/30 rounded-xl p-6 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {mystery.title}
                  </h3>
                  {mystery.subtitle && (
                    <p className="text-sm text-white/40">{mystery.subtitle}</p>
                  )}
                  <p className="text-sm text-white/60 line-clamp-2 max-w-xl">
                    {mystery.description.split("\n\n")[0]}
                  </p>
                </div>

                <span
                  className={`flex-shrink-0 ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    mystery.status === "active"
                      ? "bg-green-500/20 text-green-300"
                      : mystery.status === "solved"
                        ? "bg-cyan-500/20 text-cyan-300"
                        : "bg-white/10 text-white/50"
                  }`}
                >
                  {mystery.status}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs text-white/30">
                <span>{mystery.known_facts.length} known facts</span>
                <span>{mystery.timeline.length} timeline events</span>
                <span>
                  Center: {mystery.center_lat.toFixed(2)},{" "}
                  {mystery.center_lng.toFixed(2)}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-center text-white/20 text-xs">
          {MYSTERIES.length} active investigations &middot; More added regularly
        </p>
      </div>
    </main>
  );
}
