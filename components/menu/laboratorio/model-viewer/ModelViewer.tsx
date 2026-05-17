"use client";

import React, { useState, useEffect, useCallback, Component, ErrorInfo, ReactNode } from "react";
import { ModelLoader, ModelError } from "./Loader";
import { ModelViewerProps } from "./types";
import dynamic from "next/dynamic";

const Scene = dynamic(
  () => import("./Scene").then((mod) => ({ default: mod.Scene })),
  {
    ssr: false,
    loading: () => <ModelLoader />,
  }
);

// --- Simple robust React Error Boundary ---
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error loading 3D Model:", error, errorInfo);
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

/**
 * ModelViewer — renders 3D models with high performance and safety.
 *
 * Automatically falls back to PNG image if loading fails or GLB path is missing.
 */
export function ModelViewer({
  glbPath,
  fallbackImage,
  name = "Modelo 3D",
  showBackground = true,
  viewMode = "normal",
  autoRotate = false,
  resetTrigger,
}: ModelViewerProps) {
  const [hasError, setHasError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset states when glbPath changes
  useEffect(() => {
    setHasError(false);
    setImageError(false);
  }, [glbPath]);

  const handleSceneError = useCallback(() => {
    setHasError(true);
  }, []);

  const renderFallback = () => {
    if (!fallbackImage || imageError) {
      return <ModelError />;
    }
    return (
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <img
          src={fallbackImage}
          alt={name}
          onError={() => setImageError(true)}
          className="w-48 h-48 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-700 z-10"
        />
      </div>
    );
  };

  if (!mounted) return null;

  // Use fallback if there's an error or no glbPath is provided
  if (hasError || !glbPath) {
    return renderFallback();
  }

  return (
    <div className="absolute inset-0 w-full h-full" aria-label={name}>
      <ErrorBoundary
        fallback={renderFallback()}
        onError={handleSceneError}
      >
        <Scene
          glbPath={glbPath}
          viewMode={viewMode}
          autoRotate={autoRotate}
          showBackground={showBackground}
          resetTrigger={resetTrigger}
        />
      </ErrorBoundary>
    </div>
  );
}
