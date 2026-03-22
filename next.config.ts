import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  env: {
    CESIUM_BASE_URL: "/cesium",
  },
  // Cesium static assets are pre-copied to public/cesium/ via postinstall script
  // No webpack/turbopack plugin needed
};

export default nextConfig;
