// V2 Studio Store — using React.useState/useRef directly in the page component.
// This avoids the zustand dependency requirement.
// All state is co-located in PackageEditorPageV2.tsx.

export type GizmoMode = 'translate' | 'rotate' | 'none';
export type BackgroundPreset = 'none' | 'white' | 'dark_luxury' | 'eco_wood' | 'concrete' | 'pastel';
export type ViewMode = 'catalog' | 'editor';

export interface Shape {
  id: string;
  name: string;
  category: string;
  glbFile?: string;
  dielineFile?: string;
  [key: string]: any;
}

export interface Layer {
  id: string;
  img: HTMLImageElement;
  width: number;
  height: number;
  pos: { x: number; y: number };
  rotation: number;
  scale: number;
}

export const BACKGROUND_PRESETS: Record<BackgroundPreset, { label: string; color: string; podium: string }> = {
  none:        { label: 'Transparent', color: 'transparent', podium: '#ffffff' },
  white:       { label: 'Clean White', color: '#f5f5f5',     podium: '#ffffff' },
  dark_luxury: { label: 'Dark Luxury', color: '#111827',     podium: '#1f2937' },
  eco_wood:    { label: 'Eco Wood',    color: '#7c5c3f',     podium: '#a07850' },
  concrete:    { label: 'Concrete',    color: '#9ca3af',     podium: '#d1d5db' },
  pastel:      { label: 'Pastel Sky',  color: '#e0f2fe',     podium: '#bae6fd' },
};
