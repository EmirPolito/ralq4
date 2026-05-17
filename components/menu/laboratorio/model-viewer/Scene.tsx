"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { Controls } from "./Controls";
import { ModelLoader } from "./Loader";
import GLBModel from "./GLBModel";
import { SceneProps } from "./types";

export function Scene({
  glbPath,
  viewMode = "normal",
  autoRotate = false,
  showBackground = true,
  resetTrigger,
  onReady,
  shouldRenderModel = true,
}: SceneProps & { shouldRenderModel?: boolean }) {
  const [renderedPaths, setRenderedPaths] = useState<string[]>([]);

  // Add the current glbPath to the rendered paths pool when it is active and should render
  useEffect(() => {
    if (glbPath && shouldRenderModel) {
      setRenderedPaths((prev) => {
        if (prev.includes(glbPath)) {
          return prev; // Return same reference to prevent duplicate keys and unnecessary renders
        }
        return [...prev, glbPath];
      });
    }
  }, [glbPath, shouldRenderModel]);
  return (
    <Canvas
      gl={{
        antialias: true,
        alpha: true, // transparent canvas bg — controlled by parent div
        powerPreference: "high-performance",
        localClippingEnabled: true, // Enable cutting planes on materials
      }}
      dpr={[1, 2]}
      camera={{ position: [0, 1.2, 5.5], fov: 45 }}
      style={{ width: "100%", height: "100%", cursor: "pointer" }}
      aria-label="Visualizador 3D interactivo"
    >
      {/* Adaptive performance */}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      {/* Lighting */}
      <ambientLight intensity={viewMode === "anatomy" ? 0.3 : 0.6} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={viewMode === "anatomy" ? 0.5 : 1.2}
      />
      <directionalLight position={[-5, 2, -5]} intensity={0.3} />
      <pointLight position={[0, 5, 0]} intensity={0.4} />

      {/* Environment map with local Suspense to prevent remote preset fetch failures from crashing the canvas */}
      <Suspense fallback={null}>
        <Environment preset="studio" />
      </Suspense>

      {/* Render all loaded models from the cache pool, but only make the active one visible */}
      {renderedPaths.map((path) => (
        <Suspense fallback={null} key={path}>
          <GLBModel
            glbPath={path}
            viewMode={viewMode}
            onReady={path === glbPath ? onReady : undefined}
            visible={path === glbPath && shouldRenderModel}
          />
        </Suspense>
      ))}

      {/* Orbit controls */}
      <Controls 
        autoRotate={autoRotate || viewMode === "anatomy"} 
        resetTrigger={resetTrigger}
      />
    </Canvas>
  );
}
