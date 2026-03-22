"use client";

import { useEffect, useRef, useCallback } from "react";
import { useGlobeStore } from "@/stores/globeStore";
import type { Mystery } from "@/types/mystery";
import { GIBS_LAYERS } from "@/lib/cesium/layers";

type GlobeViewerProps = {
  mystery?: Mystery;
};

export default function GlobeViewer({ mystery }: GlobeViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<InstanceType<typeof import("cesium").Viewer> | null>(null);
  const gibsLayersRef = useRef<Map<string, InstanceType<typeof import("cesium").ImageryLayer>>>(new Map());
  const { activeLayers, selectedDate, initLayer } = useGlobeStore();

  // Initialize layers in store
  useEffect(() => {
    for (const layer of GIBS_LAYERS) {
      initLayer(layer.id, layer.defaultOpacity, layer.defaultEnabled);
    }
  }, [initLayer]);

  // Initialize Cesium viewer imperatively
  useEffect(() => {
    if (!containerRef.current || viewerRef.current) return;

    let destroyed = false;

    async function init() {
      // Dynamic import to avoid Turbopack CJS issues
      const Cesium = await import("cesium");

      // Import styles
      await import("cesium/Build/Cesium/Widgets/widgets.css");

      if (destroyed || !containerRef.current) return;

      // Set CESIUM_BASE_URL
      (window as unknown as Record<string, unknown>).CESIUM_BASE_URL = "/cesium";

      // Configure Ion token
      const token = process.env.NEXT_PUBLIC_CESIUM_ION_TOKEN;
      if (token) {
        Cesium.Ion.defaultAccessToken = token;
      }

      // Create the viewer
      const viewer = new Cesium.Viewer(containerRef.current, {
        timeline: false,
        animation: false,
        homeButton: false,
        sceneModePicker: false,
        baseLayerPicker: false,
        navigationHelpButton: false,
        geocoder: false,
        fullscreenButton: false,
        selectionIndicator: false,
        infoBox: false,
        scene3DOnly: true,
      });

      viewerRef.current = viewer;

      // Load terrain if Ion token available
      if (token) {
        try {
          const terrain = await Cesium.CesiumTerrainProvider.fromIonAssetId(1);
          if (!viewer.isDestroyed()) {
            viewer.scene.terrainProvider = terrain;
          }
        } catch {
          console.warn("Failed to load Cesium World Terrain — using ellipsoid");
        }
      }

      // Fly to mystery location
      if (mystery && !viewer.isDestroyed()) {
        viewer.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(
            mystery.center_lng,
            mystery.center_lat,
            50_000
          ),
          orientation: {
            heading: Cesium.Math.toRadians(0),
            pitch: Cesium.Math.toRadians(-60),
            roll: 0,
          },
          duration: 3,
        });
      }

      // Add search zone outline
      if (mystery?.search_zone && !viewer.isDestroyed()) {
        const positions = mystery.search_zone.coordinates[0].flatMap((pos) => [
          pos[0],
          pos[1],
        ]);

        viewer.entities.add({
          polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray(positions),
            width: 2,
            material: Cesium.Color.CYAN.withAlpha(0.6),
            clampToGround: true,
          },
        });
      }
    }

    init();

    return () => {
      destroyed = true;
      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, [mystery]);

  // Sync GIBS imagery layers with store state
  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer || viewer.isDestroyed()) return;

    async function syncLayers() {
      const Cesium = await import("cesium");
      const viewer = viewerRef.current;
      if (!viewer || viewer.isDestroyed()) return;

      for (const layerConfig of GIBS_LAYERS) {
        const state = activeLayers[layerConfig.id];
        const existingLayer = gibsLayersRef.current.get(layerConfig.id);

        if (state?.enabled) {
          if (existingLayer) {
            // Update opacity
            existingLayer.alpha = state.opacity;
          } else {
            // Add new layer
            const provider = new Cesium.WebMapTileServiceImageryProvider({
              url: "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
              layer: getGibsLayerName(layerConfig.id),
              style: "default",
              tileMatrixSetID: getGibsTileMatrixSet(layerConfig.id),
              format: layerConfig.tileUrl!.endsWith(".png")
                ? "image/png"
                : "image/jpeg",
              tilingScheme: new Cesium.GeographicTilingScheme(),
              tileWidth: 256,
              tileHeight: 256,
              credit: layerConfig.attribution || "NASA GIBS",
            });

            const imageryLayer = viewer.imageryLayers.addImageryProvider(provider);
            imageryLayer.alpha = state.opacity;
            gibsLayersRef.current.set(layerConfig.id, imageryLayer);
          }
        } else if (existingLayer) {
          // Remove disabled layer
          viewer.imageryLayers.remove(existingLayer);
          gibsLayersRef.current.delete(layerConfig.id);
        }
      }
    }

    syncLayers();
  }, [activeLayers, selectedDate]);

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
    />
  );
}

function getGibsLayerName(layerId: string): string {
  const map: Record<string, string> = {
    "gibs-modis-truecolor": "MODIS_Terra_CorrectedReflectance_TrueColor",
    "gibs-viirs-truecolor": "VIIRS_SNPP_CorrectedReflectance_TrueColor",
    "gibs-modis-thermal": "MODIS_Terra_Land_Surface_Temp_Day",
    "gibs-blue-marble": "BlueMarble_NextGeneration",
  };
  return map[layerId] || layerId;
}

function getGibsTileMatrixSet(layerId: string): string {
  const map: Record<string, string> = {
    "gibs-modis-truecolor": "250m",
    "gibs-viirs-truecolor": "250m",
    "gibs-modis-thermal": "1km",
    "gibs-blue-marble": "EPSG4326_500m",
  };
  return map[layerId] || "250m";
}
