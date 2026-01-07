'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

interface TextRotateProps {
  words: string[];
  className?: string;
  interval?: number; // milliseconds between rotations
  animationType?: 'fade' | 'slide' | 'flip' | 'blur';
}

const animationVariants = {
  fade: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  },
  slide: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  flip: {
    initial: { opacity: 0, rotateX: 90, y: 10 },
    animate: { opacity: 1, rotateX: 0, y: 0 },
    exit: { opacity: 0, rotateX: -90, y: -10 },
  },
  blur: {
    initial: { opacity: 0, filter: 'blur(8px)', y: 10 },
    animate: { opacity: 1, filter: 'blur(0px)', y: 0 },
    exit: { opacity: 0, filter: 'blur(8px)', y: -10 },
  },
};

export function TextRotate({
  words,
  className,
  interval = 2500,
  animationType = 'flip',
}: TextRotateProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  const variants = animationVariants[animationType];

  return (
    <span className={cn('inline-flex overflow-hidden', className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="inline-block"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default TextRotate;
