"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { PERSONAL, TICKER_ITEMS, SERVICES } from "@/lib/portfolio-config";

// ─── Shared entrance helper ──────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

// ─────────────────────────────────────────────────────────────
// MASSIVE TICKER
// Full-viewport-width textural band.
// ─────────────────────────────────────────────────────────────
export function MassiveTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="relative overflow-hidden bg-background select-none pointer-events-none border-t border-b border-border"
      aria-hidden="true"
    >
      <div className="py-6 md:py-10">
        <div
          className="ticker-track"
          style={{ animationDuration: "50s", gap: "4rem" }}
        >
          {items.map((item, i) => (
            <span
              key={i}
              className="font-black uppercase shrink-0 text-foreground opacity-[0.06]"
              style={{
                fontSize: "clamp(5rem, 13vw, 13rem)",
                lineHeight: 1,
                letterSpacing: "-0.05em",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Sticker rotation angles (static for Tailwind JIT) ──────
const STICKER_ROTATIONS = ["-rotate-3", "rotate-2"] as const;

// ─────────────────────────────────────────────────────────────
// HERO SECTION — "Magazine Cover" layout
// Desktop: Name + CTAs (left 58%) | Full-height photo (right 42%)
// Mobile:  Photo (top, 50vh) → Name + CTAs (below)
// ─────────────────────────────────────────────────────────────
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="relative bg-background bg-grid overflow-hidden pt-14"
    >
      {/* Outer frame */}
      <div className="max-w-screen-xl mx-auto border-l-2 border-r-2 border-border">

        {/* Eyebrow bar */}
        <motion.div
          {...(inView ? fadeUp(0) : { initial: { opacity: 0, y: 28 } })}
          className="flex items-center justify-between border-b border-border px-8 md:px-10 py-4"
        >
          <span className="text-label text-muted-foreground">
            Portfolio &mdash; 2025
          </span>
          <span className="text-label text-muted-foreground hidden sm:inline">
            {PERSONAL.location} &mdash; {PERSONAL.availability}
          </span>
        </motion.div>

        {/* ── Magazine Cover: Name (left) | Photo (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr]">

          {/* LEFT — Name + Tagline + CTAs */}
          <div className="flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border px-8 md:px-10 py-16 lg:py-24 order-2 lg:order-1">
            {/* Name + copy */}
            <div>
              <motion.h1
                {...(inView ? fadeUp(0.12) : { initial: { opacity: 0, y: 28 } })}
                className="text-foreground font-black uppercase"
                style={{
                  fontSize: "clamp(4.5rem, 13vw, 12rem)",
                  lineHeight: 0.82,
                  letterSpacing: "-0.06em",
                }}
              >
                {PERSONAL.name.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                {...(inView ? fadeUp(0.22) : { initial: { opacity: 0, y: 28 } })}
                className="text-label text-muted-foreground mt-8 whitespace-pre-line leading-relaxed"
              >
                {PERSONAL.role}
              </motion.p>

              {/* Tagline */}
              <motion.p
                {...(inView ? fadeUp(0.28) : { initial: { opacity: 0, y: 28 } })}
                className="text-foreground text-lg lg:text-xl leading-relaxed font-light max-w-md mt-8"
              >
                {PERSONAL.tagline}
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              {...(inView ? fadeUp(0.36) : { initial: { opacity: 0, y: 28 } })}
              className="flex flex-col gap-3 mt-12"
            >
              <a
                href={`mailto:${PERSONAL.email}`}
                className="text-label bg-electric text-ink px-6 py-3.5 border-2 border-electric shadow-brutal hover-brutal inline-block text-center"
              >
                Work Together
              </a>
              <a
                href={PERSONAL.resumeUrl}
                className="text-label text-foreground border-2 border-border px-6 py-3.5 shadow-brutal hover-brutal inline-block text-center"
              >
                View R&eacute;sum&eacute;
              </a>
              <span className="text-label text-muted-foreground mt-4 sm:hidden">
                {PERSONAL.location} &mdash; {PERSONAL.availability}
              </span>
            </motion.div>
          </div>

          {/* RIGHT — Editorial Photo */}
          <div className="relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 40, clipPath: "inset(100% 0 0 0)" }}
              animate={
                inView
                  ? { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }
                  : {}
              }
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
              className="relative h-[50vh] lg:h-full min-h-[400px]"
            >
              {/* Electric Blue accent borders */}
              <div className="absolute inset-0 border-b-4 border-electric lg:border-b-0 lg:border-l-4 z-10 pointer-events-none" />

              <Image
                src={PERSONAL.heroImage}
                alt={PERSONAL.heroImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />

              {/* Inset hard shadow — bottom + right edge */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  boxShadow: "inset -6px -6px 0px 0px #0066FF",
                }}
              />

              {/* ── Sticker overlays ── */}
              <div className="absolute bottom-4 right-4 z-20 flex flex-col items-end gap-2">
                {PERSONAL.stickers.map((label, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut" as const,
                      delay: 0.7 + i * 0.12,
                    }}
                    className={`bg-electric text-ink text-label px-3 py-1.5 border-2 border-ink shadow-brutal select-none ${STICKER_ROTATIONS[i % STICKER_ROTATIONS.length]}`}
                  >
                    {label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="flex flex-col items-center gap-1 py-8"
      >
        <span className="text-label text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
        >
          <ArrowDown size={14} className="text-electric" />
        </motion.div>
      </motion.div>
    </section>
  );
}
