import { GrainGradient } from '@paper-design/shaders-react';

interface HeroGrainBackgroundProps {
  animate?: boolean;
}

export const HeroGrainBackground = ({ animate = true }: HeroGrainBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <GrainGradient
        width="100%"
        height="100%"
        colors={[
          '#10b981', // primary-500 green
          '#059669', // primary-600 green  
          '#34d399', // primary-400 green
          '#6ee7b7', // primary-300 green
        ]}
        colorBack="#f9fafb"
        softness={0.7}
        intensity={0.4}
        noise={0.3}
        shape="wave"
        speed={animate ? 0.5 : 0}
        scale={1.2}
      />
      {/* 添加渐变叠加层以增强效果 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 to-accent-50/20" />
    </div>
  );
};
