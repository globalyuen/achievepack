import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useState, useCallback } from 'react';

/**
 * QuoteLightbox - completely self-contained.
 * Must be rendered inside the route component (not in App.tsx) to work
 * on pages that are direct routes outside the App component tree.
 */

const CSS = `
  img.lb-img {
    cursor: zoom-in !important;
    pointer-events: auto !important;
  }
  @keyframes _lb_fadein { from { opacity:0 } to { opacity:1 } }
  @keyframes _lb_scalein { from { opacity:0; transform:scale(0.93) } to { opacity:1; transform:scale(1) } }
  ._lb_backdrop { animation: _lb_fadein 0.18s ease forwards; }
  ._lb_img { animation: _lb_scalein 0.22s cubic-bezier(0.16,1,0.3,1) forwards; }
`;

interface LBState { src: string; alt: string; idx: number; srcs: {src:string;alt:string}[]; }

export default function QuoteLightbox() {
  const [lb, setLb] = useState<LBState|null>(null);

  const open = useCallback((img: HTMLImageElement, allImgs: HTMLImageElement[]) => {
    const srcs = allImgs.map(i => ({ src: i.src, alt: i.alt }));
    const idx = allImgs.indexOf(img);
    setLb({ src: img.src, alt: img.alt, idx: idx >= 0 ? idx : 0, srcs });
  }, []);

  const close = useCallback(() => setLb(null), []);

  const go = useCallback((dir: 1|-1) => {
    setLb(prev => {
      if (!prev) return null;
      const n = (prev.idx + dir + prev.srcs.length) % prev.srcs.length;
      return { ...prev, idx: n, src: prev.srcs[n].src, alt: prev.srcs[n].alt };
    });
  }, []);

  // Inject CSS once
  useEffect(() => {
    const id = '__lb_style__';
    if (!document.getElementById(id)) {
      const s = document.createElement('style');
      s.id = id;
      s.textContent = CSS;
      document.head.appendChild(s);
    }
  }, []);

  // Global click listener in capture phase
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      // If lightbox is already open, do NOT intercept — let React handle button clicks
      if (document.getElementById('__lb_overlay__')) return;

      // Walk up DOM to find lb-img — only upward, no downward querySelector
      let node = e.target as HTMLElement | null;
      let found: HTMLImageElement | null = null;
      for (let i = 0; i < 8 && node && node !== document.body; i++) {
        if (node.tagName === 'IMG' && node.classList.contains('lb-img')) {
          found = node as HTMLImageElement;
          break;
        }
        node = node.parentElement;
      }
      if (!found) return;
      e.preventDefault();
      e.stopPropagation();
      const all = Array.from(document.querySelectorAll<HTMLImageElement>('img.lb-img'));
      open(found, all);
    };
    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, [open]);

  // Keyboard
  useEffect(() => {
    if (!lb) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [lb, close, go]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = lb ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lb]);

  if (!lb) return null;

  const multi = lb.srcs.length > 1;

  const overlay = (
    <div
      id="__lb_overlay__"
      className="_lb_backdrop"
      onClick={close}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
      }}
    >
      {/* Close */}
      <button
        onClick={close}
        style={{
          position: 'absolute', top: 16, right: 16, zIndex: 2,
          width: 44, height: 44, borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)', border: 'none',
          cursor: 'pointer', color: '#fff', fontSize: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >✕</button>

      {/* Prev */}
      {multi && (
        <button
          onClick={e => { e.stopPropagation(); go(-1); }}
          style={{
            position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
            width: 50, height: 50, borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)', border: 'none',
            cursor: 'pointer', color: '#fff', fontSize: 24,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >‹</button>
      )}

      {/* Image */}
      <div onClick={e => e.stopPropagation()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, maxWidth: '90vw' }}>
        <img
          key={lb.src}
          src={lb.src}
          alt={lb.alt}
          className="_lb_img"
          style={{ maxWidth: '85vw', maxHeight: '82vh', objectFit: 'contain', borderRadius: 12, display: 'block' }}
        />
        {lb.alt && <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, textAlign: 'center', margin: 0 }}>{lb.alt}</p>}
        {multi && (
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, letterSpacing: '0.1em' }}>
            {lb.idx + 1} / {lb.srcs.length}
          </span>
        )}
      </div>

      {/* Next */}
      {multi && (
        <button
          onClick={e => { e.stopPropagation(); go(1); }}
          style={{
            position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
            width: 50, height: 50, borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)', border: 'none',
            cursor: 'pointer', color: '#fff', fontSize: 24,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >›</button>
      )}
    </div>
  );

  return createPortal(overlay, document.body);
}
