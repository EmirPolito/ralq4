"use client";

import React, { useRef, useEffect, memo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GLBModelProps } from "./types";

// Set up Google's hosted Draco decoders globally for Drei's useGLTF
useGLTF.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.5/");

/**
 * GLBModel — loads and renders a .glb file via useGLTF.
 * Memoized so it only re-renders when glbPath or viewMode changes.
 */
const GLBModel = memo(function GLBModel({ glbPath, viewMode }: GLBModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(glbPath);

  // Clone the scene to avoid mutation issues when switching models
  const clonedScene = React.useMemo(() => scene.clone(true), [scene]);

  // Center and fit the model automatically
  useEffect(() => {
    if (!groupRef.current) return;

    // Reset parent group transform completely to avoid pollution from previous models
    groupRef.current.position.set(0, 0, 0);
    groupRef.current.scale.set(1, 1, 1);
    groupRef.current.rotation.set(0, 0, 0);
    groupRef.current.updateMatrixWorld(true);

    // Compute bounding box of the clean clonedScene
    const box = new THREE.Box3().setFromObject(clonedScene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    
    // Normalize size: make the maximum dimension exactly 2.5 units
    // (This ensures models are a consistent, beautiful size in the viewer)
    const targetSize = 2.5; 
    const scale = maxDim > 0 ? targetSize / maxDim : 1;

    // Scale parent group and shift it to perfectly center it
    groupRef.current.scale.setScalar(scale);
    groupRef.current.position.copy(center).multiplyScalar(-scale);
  }, [clonedScene]);

  // Anatomy mode: slow wireframe spin effect via material override
  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (viewMode === "anatomy") {
          child.material = new THREE.MeshStandardMaterial({
            color: "#6366f1",
            emissive: "#4338ca",
            emissiveIntensity: 0.4,
            wireframe: false,
            transparent: true,
            opacity: 0.85,
          });
        } else if (viewMode === "details") {
          // Restore original materials, add emissive highlight
          if (child.material instanceof THREE.MeshStandardMaterial) {
            child.material.emissive = new THREE.Color("#1e40af");
            child.material.emissiveIntensity = 0.15;
          }
        } else {
          // Normal mode — reset emissive
          if (child.material instanceof THREE.MeshStandardMaterial) {
            child.material.emissiveIntensity = 0;
          }
        }
      }
    });
  }, [clonedScene, viewMode]);

  // Anatomy mode: auto-rotate
  useFrame((_, delta) => {
    if (groupRef.current && viewMode === "anatomy") {
      groupRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={clonedScene} />
    </group>
  );
});

export default GLBModel;

// Preload helper — call this before the user selects an item
export function preloadModel(glbPath: string) {
  useGLTF.preload(glbPath);
}
