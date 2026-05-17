"use client";

import React, { useState, useEffect, useCallback, Component, ErrorInfo, ReactNode, Suspense } from "react";
import { ModelLoader, ModelError } from "./Loader";
import { ModelViewerProps } from "./types";
import { Scene } from "./Scene";
import { cn } from "@/lib/utils";

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
  const [is3DReady, setIs3DReady] = useState(false);

  // Cache pool of paths that are fully mounted in WebGL
  const [loadedPool, setLoadedPool] = useState<string[]>([]);

  // Deferred loading state to allow clean paint of the loading screen
  const [shouldRenderModel, setShouldRenderModel] = useState(false);

  // Immediate fallback image to show during transitions
  const [currentFallbackImage, setCurrentFallbackImage] = useState(fallbackImage);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Respond instantly to glbPath or fallbackImage changes
  useEffect(() => {
    setHasError(false);
    setImageError(false);
    
    if (fallbackImage) {
      setCurrentFallbackImage(fallbackImage);
    }

    if (glbPath) {
      if (loadedPool.includes(glbPath)) {
        // If the model is already in our WebGL scene pool, show it INSTANTLY (0ms delay!)
        setIs3DReady(true);
        setShouldRenderModel(true);
      } else {
        // First-time load: immediately hide 3D, show loading overlay, and defer rendering slightly
        setIs3DReady(false);
        setShouldRenderModel(false);

        // Defer 3D mounting by 80ms to give the browser ample time to paint the loading screen
        const timer = setTimeout(() => {
          setShouldRenderModel(true);
        }, 80);
        
        return () => clearTimeout(timer);
      }
    }
  }, [glbPath, fallbackImage, loadedPool]);

  const handleSceneError = useCallback(() => {
    setHasError(true);
  }, []);

  // Once a model is loaded in Three.js, register it in the pool and mark as ready
  const handleModelReady = useCallback((path: string) => {
    setLoadedPool((prev) => {
      if (!prev.includes(path)) {
        return [...prev, path];
      }
      return prev;
    });
    setIs3DReady(true);
  }, []);

  const renderFallback = () => {
    if (!currentFallbackImage || imageError) {
      return <ModelError />;
    }
    return (
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <img
          src={currentFallbackImage}
          alt={name}
          onError={() => setImageError(true)}
          className="w-48 h-48 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 z-10"
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
    <div className="absolute inset-0 w-full h-full relative" aria-label={name}>
      {/* Premium Dark Loading Glass Blur Overlay — covers the viewport completely to hide any old model state */}
      {!is3DReady && (
        <div className="absolute inset-0 bg-slate-950/60 dark:bg-black/60 backdrop-blur-[10px] z-30 transition-all rounded-xl pointer-events-none" />
      )}

      {/* 2D Fallback Image as an Instant-feedback Overlay — only visible during first-time loading, crossfades in 300ms */}
      {currentFallbackImage && !imageError && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-300 pointer-events-none bg-menu2-izq-bg",
            is3DReady ? "opacity-0 z-0" : "opacity-100 z-20"
          )}
        >
          <img
            src={currentFallbackImage}
            alt={name}
            onError={() => setImageError(true)}
            className="w-48 h-48 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          />
        </div>
      )}

      <ErrorBoundary
        fallback={renderFallback()}
        onError={handleSceneError}
      >
        <Suspense fallback={renderFallback()}>
          <div
            className={cn(
              "w-full h-full transition-opacity duration-300 cursor-pointer",
              is3DReady ? "opacity-100" : "opacity-0"
            )}
          >
            <Scene
              glbPath={glbPath}
              viewMode={viewMode}
              autoRotate={autoRotate}
              showBackground={showBackground}
              resetTrigger={resetTrigger}
              onReady={() => handleModelReady(glbPath)}
              shouldRenderModel={shouldRenderModel}
            />
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
