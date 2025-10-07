"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type AnimatedImageProps = {
  image: string;
  imgwidth: number;
  imgheight: number;
  imgalttext: string;
};

const AnimatedImage = ({
  image,
  imgwidth,
  imgheight,
  imgalttext,
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ width: imgwidth, height: imgheight }}>
      {/* Skeleton placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Fade-in Image once loaded */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={imgalttext}
          width={imgwidth}
          height={imgheight}
          className="object-cover"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedImage;
