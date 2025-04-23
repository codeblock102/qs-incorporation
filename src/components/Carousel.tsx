import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface CarouselProps {
  slides: {
    image: string;
    title: string;
    description: string;
  }[];
  options?: any;
}

export const Carousel = ({ slides, options = {} }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    ...options,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const startAutoplay = useCallback(() => {
    const interval = setInterval(autoplay, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('stats-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    const cleanup = startAutoplay();

    return () => {
      cleanup();
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect, startAutoplay]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex-[0_0_100%] min-w-0"
            >
              <div className="relative h-[60vh] sm:h-[70vh] min-h-[400px] w-full">
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
                </div>
                <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-4xl mx-auto">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight"
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Progress Indicators */}
      <div className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom Arrow */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 group"
        aria-label="Scroll to next section"
      >
        <div className="relative flex flex-col items-center">
          <span className="text-white/80 text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore More
          </span>
          <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
            <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-white animate-bounce" />
          </div>
        </div>
      </button>
    </div>
  );
};