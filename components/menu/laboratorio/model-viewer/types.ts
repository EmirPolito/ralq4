export interface ModelViewerProps {
  /** Path to the .glb file, relative to /public */
  glbPath: string;
  /** Fallback image path if glb fails to load */
  fallbackImage?: string;
  /** Item name for aria-label */
  name?: string;
  /** Whether to show white or black background */
  showBackground?: boolean;
  /** Current view mode: normal | details | anatomy */
  viewMode?: "normal" | "details" | "anatomy" | string;
  /** Optional: enable auto-rotation */
  autoRotate?: boolean;
  /** Optional: set fixed camera position */
  cameraPosition?: [number, number, number];
  /** Optional: trigger OrbitControls reset */
  resetTrigger?: number;
}

export interface GLBModelProps {
  glbPath: string;
  viewMode?: string;
  onReady?: () => void;
  visible?: boolean;
}

export interface SceneProps {
  glbPath: string;
  viewMode?: string;
  autoRotate?: boolean;
  showBackground?: boolean;
  resetTrigger?: number;
  onReady?: () => void;
}

export type ViewerState = "loading" | "loaded" | "error" | "fallback";
