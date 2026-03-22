import { create } from "zustand";

type ActiveLayer = {
  id: string;
  opacity: number;
  enabled: boolean;
};

type GlobeState = {
  cameraLat: number;
  cameraLng: number;
  cameraHeight: number;
  selectedDate: string;
  activeLayers: Record<string, ActiveLayer>;
  drawMode: "none" | "point" | "polygon" | "rectangle";
  selectedAnnotationId: string | null;
};

type GlobeActions = {
  setCamera: (lat: number, lng: number, height: number) => void;
  setSelectedDate: (date: string) => void;
  toggleLayer: (id: string) => void;
  setLayerOpacity: (id: string, opacity: number) => void;
  initLayer: (id: string, defaultOpacity?: number, defaultEnabled?: boolean) => void;
  setDrawMode: (mode: GlobeState["drawMode"]) => void;
  setSelectedAnnotation: (id: string | null) => void;
};

export const useGlobeStore = create<GlobeState & GlobeActions>((set) => ({
  cameraLat: 0,
  cameraLng: 0,
  cameraHeight: 20_000_000,
  selectedDate: new Date().toISOString().split("T")[0],
  activeLayers: {},
  drawMode: "none",
  selectedAnnotationId: null,

  setCamera: (lat, lng, height) =>
    set({ cameraLat: lat, cameraLng: lng, cameraHeight: height }),

  setSelectedDate: (date) => set({ selectedDate: date }),

  toggleLayer: (id) =>
    set((state) => {
      const layer = state.activeLayers[id];
      if (!layer) return state;
      return {
        activeLayers: {
          ...state.activeLayers,
          [id]: { ...layer, enabled: !layer.enabled },
        },
      };
    }),

  setLayerOpacity: (id, opacity) =>
    set((state) => {
      const layer = state.activeLayers[id];
      if (!layer) return state;
      return {
        activeLayers: {
          ...state.activeLayers,
          [id]: { ...layer, opacity },
        },
      };
    }),

  initLayer: (id, defaultOpacity = 1, defaultEnabled = false) =>
    set((state) => {
      if (state.activeLayers[id]) return state;
      return {
        activeLayers: {
          ...state.activeLayers,
          [id]: { id, opacity: defaultOpacity, enabled: defaultEnabled },
        },
      };
    }),

  setDrawMode: (mode) => set({ drawMode: mode }),
  setSelectedAnnotation: (id) => set({ selectedAnnotationId: id }),
}));
