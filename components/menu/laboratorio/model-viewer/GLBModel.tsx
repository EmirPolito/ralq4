"use client";

import React, { useState, useRef, useEffect, useMemo, memo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GLBModelProps } from "./types";

// Set up Google's Draco decoders globally for Drei's useGLTF
useGLTF.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.5/");

/**
 * GLBModel — loads and renders a .glb file via useGLTF.
 */
const GLBModel = memo(function GLBModel({ glbPath, viewMode }: GLBModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(glbPath);

  // Clone the scene to avoid mutation issues when switching models
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  const [initialY, setInitialY] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Reset ready state when model changes to prevent snapping glitches
  useEffect(() => {
    setIsReady(false);
  }, [clonedScene]);

  // Center and scale the model automatically to a target bounding box of 2.5
  useEffect(() => {
    if (!groupRef.current) return;

    // Reset parent group transform completely
    groupRef.current.position.set(0, 0, 0);
    groupRef.current.scale.set(1, 1, 1);
    groupRef.current.rotation.set(0, 0, 0);
    groupRef.current.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(clonedScene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    
    const targetSize = 2.5; 
    const scale = maxDim > 0 ? targetSize / maxDim : 1;

    // Scale parent group and shift it to perfectly center it
    groupRef.current.scale.setScalar(scale);
    const pos = center.clone().multiplyScalar(-scale);
    groupRef.current.position.copy(pos);
    setInitialY(pos.y);

    // Mark as ready once the centering layout math has settled
    setIsReady(true);
  }, [clonedScene]);

  // Animate parts dynamically
  useFrame(({ clock }, delta) => {
    const time = clock.getElapsedTime();

    // Rotate slowly and drift if we are in rotating mode (details)
    if (groupRef.current) {
      if (viewMode !== "normal") {
        groupRef.current.rotation.y += delta * 0.45; // a little bit faster auto-rotation as requested!
        groupRef.current.position.y = Math.sin(time * 0.8) * 0.05 + initialY;
      } else {
        groupRef.current.position.y = initialY;
      }
    }
  });

  return (
    <group ref={groupRef} visible={isReady}>
      <primitive object={clonedScene} />
    </group>
  );
});

export default GLBModel;

export function preloadModel(glbPath: string) {
  useGLTF.preload(glbPath);
}
