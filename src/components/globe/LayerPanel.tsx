"use client";

import { useGlobeStore } from "@/stores/globeStore";
import { GIBS_LAYERS } from "@/lib/cesium/layers";
import type { LayerCategory } from "@/types/layer";

const CATEGORY_LABELS: Record<LayerCategory, string> = {
  satellite: "Satellite Imagery",
  historical: "Historical Maps",
  ocean: "Ocean Data",
  annotation: "Annotations",
  context: "Context",
};

export default function LayerPanel() {
  const { activeLayers, toggleLayer, setLayerOpacity } = useGlobeStore();

  const layersByCategory = GIBS_LAYERS.reduce(
    (acc, layer) => {
      const cat = layer.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(layer);
      return acc;
    },
    {} as Record<string, typeof GIBS_LAYERS>
  );

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider">
        Layers
      </h3>

      {Object.entries(layersByCategory).map(([category, layers]) => (
        <div key={category}>
          <h4 className="text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
            {CATEGORY_LABELS[category as LayerCategory] || category}
          </h4>

          <div className="space-y-2">
            {layers.map((layer) => {
              const state = activeLayers[layer.id];
              const enabled = state?.enabled ?? false;
              const opacity = state?.opacity ?? layer.defaultOpacity ?? 1;

              return (
                <div
                  key={layer.id}
                  className="bg-white/5 rounded-lg p-3 space-y-2"
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={enabled}
                      onChange={() => toggleLayer(layer.id)}
                      className="rounded border-white/30 bg-white/10 text-cyan-400 focus:ring-cyan-400/50"
                    />
                    <span className="text-sm text-white/90 flex-1">
                      {layer.name}
                    </span>
                  </label>

                  {enabled && (
                    <div className="flex items-center gap-2 pl-6">
                      <span className="text-xs text-white/40 w-12">
                        Opacity
                      </span>
                      <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.05}
                        value={opacity}
                        onChange={(e) =>
                          setLayerOpacity(layer.id, parseFloat(e.target.value))
                        }
                        className="flex-1 h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-cyan-400"
                      />
                      <span className="text-xs text-white/40 w-8 text-right">
                        {Math.round(opacity * 100)}%
                      </span>
                    </div>
                  )}

                  {layer.description && (
                    <p className="text-xs text-white/30 pl-6">
                      {layer.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
