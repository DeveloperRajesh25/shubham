"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export function WorksheetCategoryBox({
  name,
  images,
}: {
  name: string;
  images: string[];
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const displayName = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border-2 border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
    >
      <div className="relative aspect-3/4 w-full overflow-hidden bg-background">
        {images.length > 0 ? (
          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentImageIndex]}
                alt={displayName}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain"
                priority={false}
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            No images
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-bold text-foreground">{displayName}</h3>
        {images.length > 1 && (
          <p className="text-xs text-foreground/60 mt-1">
            {images.length} images
          </p>
        )}
      </div>
    </motion.div>
  );
}
