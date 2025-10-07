"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type Slide = {
  image: string;
  title?: string;
  buttonText?: string;
  buttonLink?: string;
};

type FullScreenSliderProps = {
  slides: Slide[];
  duration?: number; // duration in ms
};

const FullScreenSlider = ({
  slides,
  duration = 5000,
}: FullScreenSliderProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, duration);
    return () => clearInterval(timer);
  }, [duration, slides.length]);

  const handleDotClick = (i: number) => {
    setIndex(i);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
      {/* Slide Transition */}
      <AnimatePresence>
        <motion.img
          key={slides[index].image}
          src={slides[index].image}
          alt="Slide Image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }} // fade duration (seconds)
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center px-4">
        <h1 className="text-6xl sm:text-8xl md:text-8xl lg:text-9xl font-bold drop-shadow-lg">
          {slides[index].title || "Welcome"}
        </h1>
        {slides[index].buttonText && (
          <a href={slides[index].buttonLink || "#"} className="mt-8">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded shadow-md transition">
              {slides[index].buttonText}
            </button>
          </a>
        )}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-4 h-4 rounded-full transition-all ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FullScreenSlider;
