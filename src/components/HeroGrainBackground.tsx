// Simplified static gradient background for better performance
// Original WebGL shader was causing 40+ seconds of main thread work

interface HeroGrainBackgroundProps {
  animate?: boolean;
}

export const HeroGrainBackground = ({ animate = false }: HeroGrainBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Static gradient - much better performance than WebGL shader */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #10b981 0%, #059669 25%, #34d399 50%, #6ee7b7 75%, #f9fafb 100%)',
          opacity: 0.15,
        }}
      />
      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 to-accent-50/20" />
    </div>
  );
};
