"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch — render nothing until mounted
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span className="text-label text-muted-foreground px-3 py-2 select-none">
        [ &mdash; ]
      </span>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-label text-muted-foreground px-3 py-2 border border-border hover:text-foreground hover:border-foreground transition-colors select-none"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      [ {isDark ? "LIGHT" : "DARK"} ]
    </button>
  );
}
