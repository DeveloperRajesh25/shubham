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
      className="relative aspect-9/16 w-full overflow-hidden rounded-2xl border border-border bg-black transition-all hover:border-foreground/40 hover:-translate-y-0.5"
    >
      {active ? (
        <div className="absolute inset-0 overflow-hidden">
          {/* Scale the iframe so YouTube's title bar and bottom branding sit
              outside the visible frame for a cleaner, native-video feel. */}
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&controls=1&fs=0&disablekb=1&color=white`}
            title=" "
            className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 border-0"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          {/* Top mask — hides the title bar even if it pokes through */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/60 to-transparent" />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          aria-label="Play video"
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
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform duration-200 group-hover:scale-110">
              <Play className="ml-1 h-7 w-7" fill="black" stroke="black" />
            </div>
          </div>
        </button>
      )}
    </motion.div>
  );
}

export function Videos() {
  return (
    <section
      id="videos"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="max-w-3xl">
        <Eyebrow>Parents on camera</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl"
        >
          See it in their words.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        <Video
          className="h-3.5 w-3.5"
          style={{ color: "var(--accent)" }}
          aria-hidden
        />
        Tap to play
      </motion.div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {videoIds.map((id, i) => (
          <VideoCard key={id} id={id} index={i} />
        ))}
      </div>
    </section>
  );
}
