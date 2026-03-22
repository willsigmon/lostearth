import { Ion, IonResource } from "cesium";

const CESIUM_ION_TOKEN = process.env.NEXT_PUBLIC_CESIUM_ION_TOKEN;

export function initCesium() {
  if (typeof window === "undefined") return;

  // Set the base URL for Cesium static assets (Workers, Assets, Widgets, ThirdParty)
  (window as unknown as Record<string, unknown>).CESIUM_BASE_URL = "/cesium";

  // Configure Ion token if available (for Cesium World Terrain + Bing imagery)
  if (CESIUM_ION_TOKEN) {
    Ion.defaultAccessToken = CESIUM_ION_TOKEN;
  }
}

export async function getWorldTerrainProvider() {
  if (!CESIUM_ION_TOKEN) return undefined;
  try {
    return await IonResource.fromAssetId(1);
  } catch {
    console.warn("Failed to load Cesium World Terrain. Using ellipsoid.");
    return undefined;
  }
}
