"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

type Slide = { image: StaticImageData; alt: string; caption: string };

/**
 * Crossfading slideshow. Shuffles the slide order on each visit and
 * auto-advances; pauses on hover and respects prefers-reduced-motion.
 */
export default function Slideshow({ slides }: { slides: Slide[] }) {
  const [order, setOrder] = useState<number[]>(() =>
    slides.map((_, i) => i)
  );
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);

  // Shuffle once on mount (client only, so the server render stays stable)
  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setOrder((prev) => {
      const next = [...prev];
      for (let i = next.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [next[i], next[j]] = [next[j], next[i]];
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current) return;
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      4500
    );
    return () => clearInterval(id);
  }, [paused, slides.length]);

  const activeSlide = slides[order[current]];

  return (
    <div
      className="slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="slideshow-frame">
        {order.map((slideIndex, position) => {
          const slide = slides[slideIndex];
          return (
            <div
              key={slide.image.src}
              className={`slide ${position === current ? "slide-active" : ""}`}
              aria-hidden={position !== current}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="(max-width: 760px) 100vw, 1152px"
                style={{ objectFit: "cover" }}
                priority={position === 0}
              />
            </div>
          );
        })}
      </div>
      <div className="slideshow-bar">
        <p className="photo-caption">{activeSlide.caption}</p>
        <div className="slideshow-dots" role="tablist" aria-label="Slides">
          {order.map((_, position) => (
            <button
              key={position}
              type="button"
              className={`dot ${position === current ? "dot-active" : ""}`}
              aria-label={`Slide ${position + 1}`}
              onClick={() => setCurrent(position)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
