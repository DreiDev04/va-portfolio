/**
 * portfolio-config.ts
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for all portfolio content.
 * Edit this file to update text, links, and project data.
 * ─────────────────────────────────────────────────────────────
 */

// ─── Personal Info ───────────────────────────────────────────

export const PERSONAL = {
  name: "John Andrei",
  nameShort: "DREI",
  role: "Technical VA &\nOperations Architect",
  tagline: "I bridge the gap between code and business operations.",
  email: "tacujan.andrei@gmail.com",
  location: "Philippines",
  availability: "Open to remote work",
  resumeUrl: "#",
  linkedinUrl: "https://www.linkedin.com/in/john-andrei-tacujan-123ry/",
  githubUrl: "https://github.com/DreiDev04",

  heroImage: "/1.png",
  heroImageAlt: "Portrait photo",
  stickers: [
    "BASED IN TARLAC, PH",
    "CS @ 2026",
  ],
} as const;

// ─── Hero Ticker Items ────────────────────────────────────────
// These scroll across the right side of the Hero section.

export const TICKER_ITEMS: string[] = [
  "Next.js",
  "Python",
  "LegalBERT",
  "DaVinci Resolve",
  "Oracle Cloud",
  "Google Cloud",
  "PostgreSQL",
  "TypeScript",
  "React",
  "Node.js",
];

// ─── Navigation ───────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Work",     href: "#solutions" },
  { label: "Approach", href: "#pivot"     },
  { label: "Stack",    href: "#tech-specs" },
  { label: "Contact",  href: "#contact"   },
] as const;

// ─── Pivot / "The Bridge" Section ────────────────────────────

export const PIVOT = {
  eyebrow: "The Approach",
  heading: "Where Code\nMeets Operation.",
  bodyLeft:
    "Most businesses have two problems: software that ignores workflow reality, and operations teams that can't speak to engineers. I exist in that gap.",
  bodyRight:
    "I design, build, and deploy the technical layer — then train the humans who use it. From AI model pipelines to client-facing dashboards to automating the Monday-morning report.",
  pillars: [
    {
      number: "01",
      label: "Diagnose",
      description:
        "Map existing workflows, identify repetition, quantify time cost.",
    },
    {
      number: "02",
      label: "Architect",
      description:
        "Design the technical solution with scalability and handoff in mind.",
    },
    {
      number: "03",
      label: "Build",
      description:
        "Ship clean, documented code — or configure no-code tools when appropriate.",
    },
    {
      number: "04",
      label: "Operate",
      description:
        "Monitor, iterate, and document so your team can own it long-term.",
    },
  ],
} as const;

// ─── Solutions Grid ───────────────────────────────────────────

export type Solution = {
  index: string;
  category: string;
  title: string;
  description: string;
  outcome: string;
  tags: string[];
  link?: string;
};

export const SOLUTIONS: Solution[] = [
  {
    index: "001",
    category: "AI Implementation",
    title: "LegalBERT Document Analysis",
    description:
      "Fine-tuned a LegalBERT transformer model for automated legal document classification and clause extraction. Reduced manual review time by ~70% in a thesis research context.",
    outcome: "Thesis research — NLP pipeline, model fine-tuning, evaluation",
    tags: ["LegalBERT", "Python", "Transformers", "NLP", "FastAPI"],
    link: "#",
  },
  {
    index: "002",
    category: "Process Automation",
    title: "Discord Raffle & Event Bot",
    description:
      "Designed and built a fully-featured Discord bot for community raffle management — entry validation, winner selection, role gating, and audit logging. Zero admin overhead per event.",
    outcome: "Community platform — deployed, actively used",
    tags: ["Discord.py", "Python", "PostgreSQL", "REST API"],
    link: "#",
  },
  {
    index: "003",
    category: "Web Operations",
    title: "TakboTarlaqueño NGO Platform",
    description:
      "End-to-end web platform for a local running NGO — event registration, participant dashboards, result publishing, and an admin CMS. Built and maintained as the sole developer.",
    outcome: "Live NGO platform — Next.js, Tailwind, Supabase",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    link: "#",
  },
  {
    index: "004",
    category: "Media Operations",
    title: "Automated Video Post-Production",
    description:
      "Built a local pipeline using FFmpeg, Whisper AI, and DaVinci Resolve scripting to auto-generate subtitles, cut silences, and export multi-format deliverables.",
    outcome: "Personal workflow — 3× faster post-production turnaround",
    tags: ["FFmpeg", "Whisper AI", "DaVinci Resolve", "Python", "Shell"],
  },
];

// ─── Tech Specs ──────────────────────────────────────────────

export type SpecGroup = {
  label: string;
  items: { key: string; value: string }[];
};

export const TECH_SPECS: SpecGroup[] = [
  {
    label: "Local Infrastructure",
    items: [
      { key: "GPU",    value: "NVIDIA GTX 1660 Ti (6GB VRAM)" },
      { key: "RAM",    value: "16 GB DDR4" },
      { key: "CPU",    value: "Intel Core i5 / i7 (latest dev rig)" },
      { key: "OS",     value: "Windows 11 / Ubuntu WSL2" },
      { key: "Storage", value: "NVMe SSD — fast local model inference" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { key: "Oracle Cloud",  value: "Always Free Tier — VPS, Object Storage" },
      { key: "Google Cloud",  value: "Run, Functions, Firestore, BigQuery" },
      { key: "Vercel",        value: "Next.js deployments & edge functions" },
      { key: "Supabase",      value: "Postgres + Auth + Storage" },
      { key: "CI/CD",         value: "GitHub Actions" },
    ],
  },
  {
    label: "Core Languages & Frameworks",
    items: [
      { key: "Python",     value: "FastAPI · Discord.py · Transformers · Pandas" },
      { key: "TypeScript", value: "Next.js · React · Node.js" },
      { key: "SQL",        value: "PostgreSQL · Supabase · SQLite" },
      { key: "Shell",      value: "Bash / PowerShell automation scripts" },
    ],
  },
  {
    label: "AI & Data",
    items: [
      { key: "Models",     value: "BERT · Whisper · GPT API · LLaMA (local)" },
      { key: "Frameworks", value: "HuggingFace · LangChain · Pandas · NumPy" },
      { key: "Tooling",    value: "Jupyter · Weights & Biases · ONNX export" },
    ],
  },
];

// ─── Services / What I Offer ──────────────────────────────────

export const SERVICES = [
  "AI Integration & Automation",
  "Backend API Development",
  "Operations Workflow Design",
  "Data Pipeline Construction",
  "Technical Project Management",
  "Documentation & SOPs",
] as const;

// ─── Footer ───────────────────────────────────────────────────

export const FOOTER = {
  cta: "Available for remote contracts & full-time roles.",
  copyright: `© ${new Date().getFullYear()} ${PERSONAL.name}. All rights reserved.`,
} as const;
