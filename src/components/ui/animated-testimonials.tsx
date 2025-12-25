"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="mx-auto max-w-sm px-4 py-12 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            {/* Simplified image display - no complex animations */}
            <img
              src={testimonials[active].src}
              alt={testimonials[active].name}
              width={500}
              height={500}
              draggable={false}
              className="h-full w-full rounded-3xl object-cover object-center shadow-lg transition-opacity duration-300"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <div className="transition-opacity duration-300">
            <h3 className="text-2xl font-bold text-neutral-900">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-primary-600 font-medium">
              {testimonials[active].designation}
            </p>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              {testimonials[active].quote}
            </p>
          </div>
          <div className="flex gap-4 pt-8 md:pt-0">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 hover:bg-primary-200 transition-colors"
            >
              <IconArrowLeft className="h-5 w-5 text-primary-600 transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 hover:bg-primary-200 transition-colors"
            >
              <IconArrowRight className="h-5 w-5 text-primary-600 transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
