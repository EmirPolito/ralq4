"use client";

import React from "react";
import { OrbitControls } from "@react-three/drei";
import { TOUCH } from "three";

interface ControlsProps {
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  resetTrigger?: number;
}

export function Controls({
  autoRotate = false,
  autoRotateSpeed = 1.5,
  resetTrigger,
}: ControlsProps) {
  const controlsRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (controlsRef.current && resetTrigger !== undefined && resetTrigger > 0) {
      controlsRef.current.reset();
    }
  }, [resetTrigger]);

  return (
    <OrbitControls
      ref={controlsRef}
      autoRotate={autoRotate}
      autoRotateSpeed={autoRotateSpeed}
      enableZoom={true}
      enablePan={false}
      enableRotate={true}
      minDistance={0.5}
      maxDistance={15}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={(Math.PI * 5) / 6}
      touches={{
        ONE: TOUCH.ROTATE,
        TWO: TOUCH.DOLLY_PAN,
      }}
      makeDefault
    />
  );
}
