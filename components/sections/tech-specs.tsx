"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Cloud, Code2, Brain } from "lucide-react";
import { TECH_SPECS, type SpecGroup } from "@/lib/portfolio-config";

// ─── Icon map ─────────────────────────────────────────────────
const GROUP_ICONS: Record<string, React.ReactNode> = {
  "Local Infrastructure": <Server size={16} className="text-electric" />,
  "Cloud & DevOps":       <Cloud  size={16} className="text-electric" />,
  "Core Languages & Frameworks": <Code2 size={16} className="text-electric" />,
  "AI & Data":            <Brain  size={16} className="text-electric" />,
};

// ─── Spec Group — technical data-sheet style ─────────────────
function SpecGroupCard({
  group,
  index,
}: {
  group: SpecGroup;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" as const, delay: index * 0.1 }}
      className="bg-background p-8 md:p-10"
    >
      {/* Group header */}
      <div className="flex items-center gap-3 pb-5 mb-0 border-b-2 border-border">
        {GROUP_ICONS[group.label] ?? <Server size={16} className="text-electric" />}
        <span className="text-label text-muted-foreground">{group.label}</span>
      </div>

      {/* Spec rows — data-sheet lines */}
      <dl>
        {group.items.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-[minmax(7rem,auto)_1fr] gap-x-6 py-4 border-b border-border last:border-b-0 group/row"
          >
            <dt className="text-label text-electric shrink-0 pt-0.5">{item.key}</dt>
            <dd className="text-base text-foreground font-mono leading-relaxed group-hover/row:text-electric transition-colors">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </motion.div>
  );
}

// ─── Tech Specs Section ───────────────────────────────────────
export function TechSpecs() {
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true, amount: 0.3 });

  return (
    <section id="tech-specs" className="bg-background border-t-2 border-border">
      <div className="max-w-screen-xl mx-auto border-l-2 border-r-2 border-border">

        {/* Section header */}
        <div
          ref={headingRef}
          className="border-b-2 border-border grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-end px-8 md:px-10 py-16 md:py-20"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35 }}
              className="text-label text-muted-foreground mb-5"
            >
              Infrastructure
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.1 }}
              className="text-foreground font-black uppercase"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.05em",
              }}
            >
              Built on Real
              <br />
              Hardware.
            </motion.h2>
          </div>

          {/* Right callout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="border-2 border-electric bg-stripe-blue p-5 max-w-xs"
          >
            <p className="text-label text-electric mb-1">Why it matters</p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I run models locally, iterate fast, and deploy only when ready — keeping your cloud bill lean.
            </p>
          </motion.div>
        </div>

        {/* Data-sheet grid: 2 columns, separated by 1px gap */}
        <div className="bg-border gap-px grid grid-cols-1 md:grid-cols-2">
          {TECH_SPECS.map((group, i) => (
            <SpecGroupCard key={group.label} group={group} index={i} />
          ))}
        </div>

        {/* Bottom accent bar */}
        <div className="border-t-2 border-border px-8 md:px-10 py-6 flex items-center gap-4">
          <div className="w-2 h-2 bg-electric shrink-0" />
          <p className="text-label text-muted-foreground">
            All specs reflect current personal/working environment — available for deployment to your stack.
          </p>
        </div>

      </div>
    </section>
  );
}
