export interface Hotspot {
  id: string;
  name: string;
  desc: string;
  link: string;
  x: number;
  y: number;
  placement: 'left' | 'right' | 'top' | 'bottom';
}

export interface ExplorerImage {
  src: string;
  alt: string;
  title: string;
  hotspots: Hotspot[];
}

export type ExplorerCategory = 'compost' | 'recyclable' | 'biope' | 'pcr' | 'pouch' | 'box' | 'industry' | 'all';

export const EXPLORER_DATA: Record<string, ExplorerImage[]> = {
  compost: [
    {
      src: '/imgs/knowledge/composting-anatomy-diagram.jpg',
      alt: 'Compostable Anatomy',
      title: 'Compostable Anatomy',
      hotspots: [
        { id: '1', name: 'Example', desc: 'Example', link: '/', x: 50, y: 50, placement: 'top' }
      ]
    }
  ],
  all: []
};
