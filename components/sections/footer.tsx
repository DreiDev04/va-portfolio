"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { PERSONAL, FOOTER, NAV_LINKS } from "@/lib/portfolio-config";

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer
      id="contact"
      ref={ref}
      className="bg-background border-t-2 border-border"
    >
      <div className="max-w-screen-xl mx-auto">

        {/* ── CTA Block ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] border-b-2 border-border">
          <div className="px-6 md:px-10 py-16 md:py-24 border-r-0 lg:border-r-2 border-border">
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35 }}
              className="text-label text-electric mb-6"
            >
              Let&apos;s Work Together
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-editorial text-foreground"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
            >
              Start a
              <br />
              <span className="text-electric">Conversation.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
              className="text-muted-foreground mt-6 text-base max-w-sm leading-relaxed"
            >
              {FOOTER.cta}
            </motion.p>
          </div>

          {/* Right: Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center px-6 md:px-10 py-12 gap-0 min-w-[18rem]"
          >
            <a
              href={`mailto:${PERSONAL.email}`}
              className="flex items-center gap-3 py-5 border-b border-border group hover:bg-secondary transition-colors px-2 -mx-2"
            >
              <Mail size={16} className="text-electric shrink-0" />
              <span className="text-sm text-foreground group-hover:text-electric transition-colors font-medium">
                {PERSONAL.email}
              </span>
              <ArrowUpRight size={14} className="text-muted-foreground ml-auto group-hover:text-electric transition-colors" />
            </a>
            <a
              href={PERSONAL.githubUrl}
              className="flex items-center gap-3 py-5 border-b border-border group hover:bg-secondary transition-colors px-2 -mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} className="text-muted-foreground shrink-0" />
              <span className="text-sm text-muted-foreground group-hover:text-electric transition-colors font-medium">
                GitHub
              </span>
              <ArrowUpRight size={14} className="text-muted-foreground ml-auto group-hover:text-electric transition-colors" />
            </a>
            <a
              href={PERSONAL.linkedinUrl}
              className="flex items-center gap-3 py-5 group hover:bg-secondary transition-colors px-2 -mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} className="text-muted-foreground shrink-0" />
              <span className="text-sm text-muted-foreground group-hover:text-electric transition-colors font-medium">
                LinkedIn
              </span>
              <ArrowUpRight size={14} className="text-muted-foreground ml-auto group-hover:text-electric transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="px-6 md:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-label text-muted-foreground">{FOOTER.copyright}</p>
          <nav className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-label text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  );
}
