"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Play, Video } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

const videoIds = [
  "nA6yn5Jojds",
  "phaP_w9AI8U",
  "6AjLK9gaSo8",
  "eE1oAzlJHJM",
  "87iYONiEQao",
  "R6jqawNADvQ",
];

function VideoCard({ id, index }: { id: string; index: number }) {
  const [active, setActive] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  const fallbackThumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
        ease: "easeOut",
      }}
      className="relative aspect-9/16 w-full overflow-hidden rounded-2xl border-2 border-border bg-black transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
    >
      {active ? (
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&controls=1&fs=0&disablekb=1&color=white`}
            title=" "
            className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 border-0"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-linear-to-b from-black/60 to-transparent" />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Play parent testimonial video"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src !== fallbackThumb) img.src = fallbackThumb;
            }}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors group-hover:bg-black/30">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-xl transition-transform duration-200 group-hover:scale-110">
              <Play className="ml-1 h-6 w-6" fill="white" stroke="white" />
            </div>
          </div>
        </button>
      )}
    </motion.div>
  );
}

export function Videos() {
  return (
    <section id="videos" className="mx-auto max-w-6xl px-6 py-8 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow color="highlight">
          <Video className="h-3 w-3" /> Parents on camera
        </Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl"
        >
          See It In <span className="text-accent">Their Words</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-3 max-w-2xl text-base text-foreground/70 md:text-lg"
        >
          Real parents. Real results. Tap any video to play.
        </motion.p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5">
        {videoIds.map((id, i) => (
          <VideoCard key={id} id={id} index={i} />
        ))}
      </div>
    </section>
  );
}
