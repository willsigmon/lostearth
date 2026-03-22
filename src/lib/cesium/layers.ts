import type { LayerConfig } from "@/types/layer";

// NASA GIBS layers available for overlay
export const GIBS_LAYERS: LayerConfig[] = [
  {
    id: "gibs-modis-truecolor",
    name: "MODIS True Color",
    category: "satellite",
    description: "Terra/MODIS Corrected Reflectance, True Color",
    dateAware: true,
    defaultOpacity: 0.7,
    defaultEnabled: true,
    tileUrl:
      "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{date}/250m/{TileMatrix}/{TileRow}/{TileCol}.jpg",
    attribution: "NASA GIBS",
  },
  {
    id: "gibs-viirs-truecolor",
    name: "VIIRS True Color",
    category: "satellite",
    description: "Suomi NPP/VIIRS Corrected Reflectance, True Color",
    dateAware: true,
    defaultOpacity: 0.7,
    tileUrl:
      "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/VIIRS_SNPP_CorrectedReflectance_TrueColor/default/{date}/250m/{TileMatrix}/{TileRow}/{TileCol}.jpg",
    attribution: "NASA GIBS",
  },
  {
    id: "gibs-modis-thermal",
    name: "Land Surface Temp (Day)",
    category: "satellite",
    description: "MODIS Land Surface Temperature",
    dateAware: true,
    defaultOpacity: 0.6,
    tileUrl:
      "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Terra_Land_Surface_Temp_Day/default/{date}/1km/{TileMatrix}/{TileRow}/{TileCol}.png",
    attribution: "NASA GIBS",
  },
  {
    id: "gibs-blue-marble",
    name: "Blue Marble",
    category: "satellite",
    description: "Blue Marble Next Generation (static, no date)",
    dateAware: false,
    defaultOpacity: 1,
    tileUrl:
      "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/BlueMarble_NextGeneration/default/EPSG4326_500m/{TileMatrix}/{TileRow}/{TileCol}.jpeg",
    attribution: "NASA GIBS",
  },
];

export const ALL_LAYERS: LayerConfig[] = [...GIBS_LAYERS];
