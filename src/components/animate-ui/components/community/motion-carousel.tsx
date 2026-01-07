'use client';

import * as React from 'react';
import { motion, type Transition } from 'motion/react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/animate-ui/components/buttons/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export type ProductSlide = {
  id: string;
  name: string;
  description?: string;
  image: string;
  badge?: string;
  price?: number;
  minOrder?: number;
  onClick?: () => void;
};

type ProductCarouselProps = {
  products: ProductSlide[];
  options?: EmblaOptionsType;
};

type EmblaControls = {
  selectedIndex: number;
  scrollSnaps: number[];
  prevDisabled: boolean;
  nextDisabled: boolean;
  onDotClick: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
};

type DotButtonProps = {
  selected?: boolean;
  label: string;
  onClick: () => void;
};

const transition: Transition = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
  mass: 1,
};

const useEmblaControls = (
  emblaApi: EmblaCarouselType | undefined,
): EmblaControls => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [prevDisabled, setPrevDisabled] = React.useState(true);
  const [nextDisabled, setNextDisabled] = React.useState(true);

  const onDotClick = React.useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const updateSelectionState = (api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
    setPrevDisabled(!api.canScrollPrev());
    setNextDisabled(!api.canScrollNext());
  };

  const onInit = React.useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
    updateSelectionState(api);
  }, []);

  const onSelect = React.useCallback((api: EmblaCarouselType) => {
    updateSelectionState(api);
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    emblaApi.on('reInit', onInit).on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onInit).off('select', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  };
};

function MotionCarousel(props: PropType) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  } = useEmblaControls(emblaApi);

  return (
    <div className="w-full space-y-4 [--slide-height:9rem] sm:[--slide-height:13rem] md:[--slide-height:18rem] [--slide-spacing:1.5rem] [--slide-size:55%]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          {slides.map((index) => {
            const isActive = index === selectedIndex;

            return (
              <motion.div
                key={index}
                className="h-[var(--slide-height)] mr-[var(--slide-spacing)] basis-[var(--slide-size)] flex-none flex min-w-0"
              >
                <motion.div
                  className="size-full flex items-center justify-center text-3xl md:text-5xl font-semibold select-none border-4 rounded-xl"
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.9,
                  }}
                  transition={transition}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between">
        <Button size="icon" onClick={onPrev} disabled={prevDisabled}>
          <ChevronLeft className="size-5" />
        </Button>

        <div className="flex flex-wrap justify-end items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              label={`Slide ${index + 1}`}
              selected={index === selectedIndex}
              onClick={() => onDotClick(index)}
            />
          ))}
        </div>

        <Button size="icon" onClick={onNext} disabled={nextDisabled}>
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}

function DotButton({ selected = false, label, onClick }: DotButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layout
      initial={false}
      className="flex cursor-pointer select-none items-center justify-center rounded-full border-none bg-zinc-900 text-zinc-50 text-sm dark:bg-zinc-50 dark:text-zinc-900"
      animate={{
        width: selected ? 68 : 12,
        height: selected ? 28 : 12,
      }}
      transition={transition}
    >
      <motion.span
        layout
        initial={false}
        className="block whitespace-nowrap px-3 py-1"
        animate={{
          opacity: selected ? 1 : 0,
          scale: selected ? 1 : 0,
          filter: selected ? 'blur(0)' : 'blur(4px)',
        }}
        transition={transition}
      >
        {label}
      </motion.span>
    </motion.button>
  );
}

// Product Motion Carousel - for product cards with images
function ProductMotionCarousel({ products, options }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  } = useEmblaControls(emblaApi);

  return (
    <div className="w-full space-y-6 [--slide-height:22rem] sm:[--slide-height:26rem] md:[--slide-height:28rem] [--slide-spacing:1rem] [--slide-size:85%] sm:[--slide-size:45%] lg:[--slide-size:32%]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom -ml-[var(--slide-spacing)]">
          {products.map((product, index) => {
            const isActive = index === selectedIndex;

            return (
              <motion.div
                key={product.id}
                className="h-[var(--slide-height)] pl-[var(--slide-spacing)] basis-[var(--slide-size)] flex-none flex min-w-0"
              >
                <motion.div
                  className="size-full flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm cursor-pointer"
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.92,
                    opacity: isActive ? 1 : 0.7,
                  }}
                  whileHover={{ scale: isActive ? 1.02 : 0.95 }}
                  transition={transition}
                  onClick={product.onClick}
                >
                  {/* Product Image */}
                  <div className="relative h-[55%] bg-neutral-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-1 line-clamp-1">
                        {product.name}
                      </h3>
                      {product.description && (
                        <p className="text-sm text-neutral-600 line-clamp-2">
                          {product.description}
                        </p>
                      )}
                    </div>

                    {product.price !== undefined && (
                      <div className="mt-3">
                        <span className="text-lg font-bold text-primary-600">US${product.price}</span>
                        {product.minOrder && (
                          <span className="text-xs text-neutral-500 ml-1">for {product.minOrder} pcs</span>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <Button 
          size="icon" 
          onClick={onPrev} 
          disabled={prevDisabled}
          className="rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border-0 disabled:opacity-40"
        >
          <ChevronLeft className="size-5" />
        </Button>

        <div className="flex flex-wrap justify-center items-center gap-1.5">
          {scrollSnaps.map((_, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => onDotClick(index)}
              className="w-2 h-2 rounded-full transition-colors"
              initial={false}
              animate={{
                backgroundColor: index === selectedIndex ? '#16a34a' : '#d1d5db',
                scale: index === selectedIndex ? 1.3 : 1,
              }}
              transition={transition}
            />
          ))}
        </div>

        <Button 
          size="icon" 
          onClick={onNext} 
          disabled={nextDisabled}
          className="rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border-0 disabled:opacity-40"
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}

export { MotionCarousel, ProductMotionCarousel };
