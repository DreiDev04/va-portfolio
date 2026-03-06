"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PIVOT } from "@/lib/portfolio-config";

// ─── Service card ───────────────────────────────────────────────
function ServiceCard({
  number,
  title,
  description,
  index,
}: {
  number: string;
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" as const, delay: index * 0.1 }}
      className="border-2 border-border p-8 md:p-10 hover-brutal group min-h-[250px] flex flex-col"
    >
      <span className="text-label text-electric block mb-4">{number}</span>
      <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight mb-4 group-hover:text-electric transition-colors">
        {title}
      </h3>
      <p className="text-base text-muted-foreground leading-relaxed flex-1">{description}</p>
    </motion.div>
  );
}

// ─── Pivot Section ────────────────────────────────────────────
export function Services() {
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true, amount: 0.3 });

  return (
    <section id="services" className="bg-background border-t-2 border-border">
      <div className="max-w-screen-xl mx-auto border-l-2 border-r-2 border-border">

        {/* Top: eyebrow + heading — generous vertical padding */}
        <div
          ref={headingRef}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] border-b-2 border-border"
        >
          {/* Left — heading */}
          <div className="px-8 md:px-10 py-24 md:py-32 border-r-0 lg:border-r-2 border-border">
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="text-label text-muted-foreground mb-6"
            >
              {PIVOT.eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
              className="text-foreground font-black uppercase"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 6rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.05em",
              }}
            >
              {PIVOT.heading.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </motion.h2>
          </div>

          {/* Right — body copy */}
          <div className="px-8 md:px-10 py-24 md:py-32 flex flex-col justify-center gap-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-foreground leading-relaxed"
            >
              {PIVOT.bodyLeft}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {PIVOT.bodyRight}
            </motion.p>

            {/* Accent divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
              className="h-0.5 bg-electric origin-left mt-2"
            />
          </div>
        </div>

        {/* Services grid */}
        <div className="bg-border gap-px grid grid-cols-1 lg:grid-cols-2">
          {PIVOT.services.map((service, i) => (
            <div key={service.number} className="bg-background">
              <ServiceCard
                number={service.number}
                title={service.title}
                description={service.description}
                index={i}
              />
            </div>
          ))}
        </div>

        {/* Bottom breathing space */}
        <div className="py-16 md:py-24 border-t-2 border-border" />

      </div>
    </section>
  );
}
