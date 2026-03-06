"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "@/lib/portfolio-config";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-background/95 border-b-2 border-border backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#"
            className="text-label text-foreground tracking-widest hover:text-electric transition-colors"
          >
            {PERSONAL.nameShort}
            <span className="text-electric">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-label text-muted-foreground px-5 py-4 hover:text-foreground hover:bg-secondary transition-colors border-l border-border first:border-l-0"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-3 border-l border-border pl-3">
              <ThemeToggle />
            </div>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="text-label text-ink bg-electric px-5 py-4 ml-3 shadow-brutal hover:bg-electric-dim transition-colors"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground p-2 border border-border"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-14 z-40 bg-background border-b-2 border-border md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-label text-muted-foreground px-6 py-5 border-b border-border hover:text-foreground hover:bg-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <span className="text-label text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
            <a
              href={`mailto:${PERSONAL.email}`}
              onClick={() => setMenuOpen(false)}
              className="block text-label text-ink bg-electric px-6 py-5 shadow-brutal hover:bg-electric-dim transition-colors"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
