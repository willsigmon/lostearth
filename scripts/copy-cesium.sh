#!/bin/bash
# Copy Cesium static assets to public/ for serving
# Run via: npm run postinstall

CESIUM_SRC="node_modules/cesium/Build/Cesium"
CESIUM_DEST="public/cesium"

mkdir -p "$CESIUM_DEST"
cp -r "$CESIUM_SRC/Workers" "$CESIUM_DEST/"
cp -r "$CESIUM_SRC/Assets" "$CESIUM_DEST/"
cp -r "$CESIUM_SRC/Widgets" "$CESIUM_DEST/"
cp -r "$CESIUM_SRC/ThirdParty" "$CESIUM_DEST/"

echo "Cesium static assets copied to $CESIUM_DEST"
