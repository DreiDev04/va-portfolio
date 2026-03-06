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
  role: "Virtual Assistant & AI Specialist",
  tagline: "I bridge the gap between code and business operations.",
  email: "tacujan.andrei@gmail.com",
  location: "Philippines",
  availability: "Open to remote work",
  resumeUrl: "#",
  linkedinUrl: "https://www.linkedin.com/in/john-andrei-tacujan-123ry/",
  githubUrl: "https://github.com/DreiDev04",

  heroImage: "/1.png",
  heroImageAlt: "Portrait photo",
  stickers: ["BASED IN TARLAC, PH", "CS @ 2026"],
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
  { label: "Services", href: "#services" },
  { label: "Work", href: "#solutions" },
  { label: "Stack", href: "#tech-specs" },
  { label: "Contact", href: "#contact" },
] as const;

// ─── What I Offer Section ────────────────────────────────────

export const PIVOT = {
  eyebrow: "What I Offer",
  heading: "Your Business\nNeeds. Solved.",
  bodyLeft:
    "From handling your daily admin tasks to building complex AI systems, I provide comprehensive virtual assistance that scales with your business needs.",
  bodyRight:
    "Whether you need someone to manage your operations, integrate AI into your workflows, or build custom applications from scratch — I've got you covered.",
  services: [
    {
      number: "01",
      title: "General VA",
      description:
        "Complete administrative support including email management, scheduling, data entry, research, and customer service to keep your business running smoothly.",
    },
    {
      number: "02",
      title: "AI Integration & Automation",
      description:
        "Transform your workflows with intelligent automation, from chatbots and document processing to custom AI solutions that save time and reduce errors.",
    },
    {
      number: "03",
      title: "Video Editing ",
      description:
        "From Short-form content to long-form videos, I provide video editing services — cutting, color grading, subtitles, and format optimization for any platform.",
    },
    {
      number: "04",
      title: "Prompt Engineering",
      description:
        "Craft and optimize AI prompts for maximum effectiveness, ensuring your AI tools deliver precise, relevant, and actionable results every time.",
    },
    {
      number: "05",
      title: "FullStack Development",
      description:
        "End-to-end web applications, APIs, and custom software solutions built with modern technologies to meet your exact business requirements.",
    },
    {
      number: "06",
      title: "AI Operations Assistants",
      description:
        "Deploy specialized AI agents for inventory management, customer support, lead qualification, and workflow optimization that work 24/7.",
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
    category: "AI Research & Development",
    title: "LegalBERT ",
    description:
      "Fine-tuned a LegalBERT transformer model for automated legal document classification and clause extraction. Integrated in a Law Office Management System using FastAPI.",
    outcome: "Thesis research, model fine-tuning, and Python integration",
    tags: ["LegalBERT", "Python", "Transformers", "NLP", "FastAPI", "BERT"],
  },
  {
    index: "002",
    category: "Automation",
    title: "TakboTarlaqueño Marathon ",
    description:
      "Workflow automation for a local marathon event. Build a scraper and data processing pipeline to generate a certificate of completion for each runner.",
    outcome:
      "Event operations — automated certificate generation for 1500+ runners",
    tags: ["Python", "Web Scraping", "Data Processing", "PDF Generation"],
  },
  {
    index: "003",
    category: "Process Automation",
    title: "Discord Raffle & Event Bot",
    description:
      "Designed and built a fully-featured Discord bot for community raffle management — entry validation, winner selection, role gating, and audit logging. Zero admin overhead per event.",
    outcome: "Community platform — deployed, actively used",
    tags: ["Discord.py", "Python", "REST API"],
  },
  {
    index: "004",
    category: "Video Editing",
    title: "Long form shortfilm editing ",
    description:
      "Directed and edited a long-form short film project, overseeing the entire post-production process. Utilized DaVinci Resolve for editing, color grading, and final output, delivering a polished final product.",
    outcome: "Creative project — completed and delivered",
    tags: [
      "DaVinci Resolve",
      "Video Editing",
      "Color Grading",
      "Post-Production",
    ],
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
      { key: "GPU", value: "NVIDIA GTX 1660 Ti (6GB VRAM)" },
      { key: "RAM", value: "16 GB DDR4" },
      { key: "CPU", value: "Ryzen 5 5600g" },
      { key: "OS", value: "Windows 11 / Ubuntu WSL2" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { key: "Oracle Cloud", value: "Always Free Tier — VPS, Object Storage" },
      { key: "Google Cloud", value: "Firebase, Google Cloud Console" },
      { key: "Vercel", value: "Next.js deployments & edge functions" },
      { key: "Supabase", value: "Postgres + Auth + Storage" },
      { key: "CI/CD", value: "GitHub Actions" },
    ],
  },
  {
    label: "Core Languages & Frameworks",
    items: [
      { key: "Python", value: "FastAPI · Discord.py · Transformers · Pandas" },
      { key: "TypeScript", value: "Next.js · React · Node.js" },
      { key: "SQL", value: "PostgreSQL · Supabase · SQLite" },
      { key: "Shell", value: "Bash / PowerShell automation scripts" },
    ],
  },
  {
    label: "AI & Data",
    items: [
      { key: "Models", value: "BERT · LLaMA (local)" },
      { key: "Frameworks", value: "HuggingFace · Pandas · NumPy" },
      { key: "Tooling", value: "Jupyter " },
    ],
  },
];

// ─── Services / What I Offer ──────────────────────────────────

export const SERVICES = [
  "General VA",
  "AI Integration & Automation",
  "AI Operations Assistants",
  "Prompt Engineering",
  "FullStack Development",
] as const;

// ─── Footer ───────────────────────────────────────────────────

export const FOOTER = {
  cta: "Available for remote contracts & full-time roles.",
  copyright: `© ${new Date().getFullYear()} ${PERSONAL.name}. All rights reserved.`,
} as const;
