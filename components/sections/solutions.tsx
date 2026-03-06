"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SOLUTIONS, type Solution } from "@/lib/portfolio-config";

// ─── Layout map: zigzag column spans for the bento grid ──────
// Row 1: 7 | 5    Row 2: 5 | 7   (alternating asymmetry)
// Static strings so Tailwind v4 can detect them at compile time.
const GRID_SPANS = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
] as const;

// ─── Solution Card (inner content) ───────────────────────────
function SolutionCard({
  solution,
  index,
}: {
  solution: Solution;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: "easeOut" as const,
        delay: (index % 2) * 0.1,
      }}
      className="bg-background h-full flex flex-col justify-between p-8 md:p-10 lg:p-12 group"
    >
      {/* Top: index number + link arrow */}
      <div>
        <div className="flex items-start justify-between mb-6">
          <span
            className="font-mono font-bold text-electric leading-none"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            {solution.index}
          </span>
          {solution.link && (
            <a
              href={solution.link}
              className="p-2 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              aria-label={`Open ${solution.title}`}
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        {/* Category */}
        <span className="text-label text-muted-foreground block mb-4">
          {solution.category}
        </span>

        {/* Title */}
        <h3
          className="text-foreground font-black tracking-tight leading-tight mb-4"
          style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
        >
          {solution.title}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
          {solution.description}
        </p>
      </div>

      {/* Bottom: outcome line + tags */}
      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground font-mono mb-4 leading-relaxed">
          {solution.outcome}
        </p>
        <div className="flex flex-wrap gap-2">
          {solution.tags.map((tag) => (
            <Badge
              key={tag}
              className="rounded-none border border-border bg-transparent text-muted-foreground text-xs font-mono"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Solutions Section ────────────────────────────────────────
export function Solutions() {
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true, amount: 0.3 });

  return (
    <section id="solutions" className="bg-background border-t-2 border-border">
      <div className="max-w-screen-xl mx-auto border-l-2 border-r-2 border-border">

        {/* ── Section header ── */}
        <div
          ref={headingRef}
          className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] border-b border-border"
        >
          {/* Left: heading */}
          <div className="px-8 md:px-10 py-12 md:py-16 lg:border-r border-border">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3 }}
              className="text-label text-muted-foreground mb-5"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.08 }}
              className="text-foreground font-black uppercase"
              style={{
                fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.05em",
              }}
            >
              Solutions,
              <br />
              Not Projects.
            </motion.h2>
          </div>

          {/* Right: description + count */}
          <div className="px-8 md:px-10 py-12 md:py-16 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 }}
              className="text-muted-foreground text-sm leading-relaxed max-w-xs"
            >
              Every engagement is framed around a business outcome — not a
              deliverable list.
            </motion.p>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
              className="font-mono font-bold text-electric mt-6 block"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
            >
              {String(SOLUTIONS.length).padStart(2, "0")}{" "}
              <span className="text-label text-muted-foreground">cases</span>
            </motion.span>
          </div>
        </div>

        {/* ── Bento grid: cards touch, separated by 1px border ── */}
        <div className="bg-border gap-px grid grid-cols-1 md:grid-cols-12">
          {SOLUTIONS.map((solution, i) => (
            <div
              key={solution.index}
              className={`${GRID_SPANS[i % GRID_SPANS.length]} min-h-[320px] md:min-h-[400px]`}
            >
              <SolutionCard solution={solution} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
