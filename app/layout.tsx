import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.bioShort,
  applicationName: "Testimony Gbadegesin Portfolio",
  authors: [{ name: profile.name, url: "https://testimonygbadegesin.dev" }],
  keywords: [
    "Testimony Gbadegesin",
    "Backend-focused Full-Stack Engineer",
    "Backend Engineer",
    "Go",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "NestJS",
    "Next.js",
    "Distributed Systems",
    "Security Architecture",
    "Nigeria",
  ],
  metadataBase: new URL("https://testimonygbadegesin.dev"),
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    url: "https://testimonygbadegesin.dev",
    siteName: `${profile.name} Engineering Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.bioShort,
    email: profile.email,
    telephone: profile.phone,
    knowsAbout: [
      "Backend Architecture",
      "API Design",
      "PostgreSQL",
      "Go",
      "Node.js",
      "TypeScript",
      "NestJS",
      "Distributed Systems",
      "Application Security",
    ],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 selection:text-white font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
