import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "@/app/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dreidevs-portfolio-va.vercel.app'),
  title: "John Andrei | Virtual Assistant & AI Specialist",
  description:
    "I bridge the gap between code and business operations. Offering General VA services, AI Integration & Automation, Video Editing, Prompt Engineering, FullStack Development, and AI Operations Assistants.",
  keywords: [
    "Virtual Assistant",
    "AI Specialist",
    "AI Integration",
    "Automation",
    "Video Editing",
    "Prompt Engineering",
    "FullStack Development",
    "AI Operations",
    "Remote Work",
    "Philippines",
    "Next.js",
    "Python",
    "TypeScript",
    "React",
  ],
  authors: [{ name: "John Andrei Tacujan" }],
  creator: "John Andrei Tacujan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dreidevs-portfolio-va.vercel.app",
    title: "John Andrei | Virtual Assistant & AI Specialist",
    description:
      "I bridge the gap between code and business operations. Comprehensive virtual assistance that scales with your business needs.",
    siteName: "John Andrei Portfolio",
    images: [
      {
        url: "/1.png", // Your hero image
        width: 1200,
        height: 630,
        alt: "John Andrei - Virtual Assistant & AI Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Andrei | Virtual Assistant & AI Specialist",
    description: "I bridge the gap between code and business operations.",
    images: ["/1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/icon/man-technologist.svg" />

      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
