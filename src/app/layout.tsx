import type { Metadata, Viewport } from "next";
import { montserrat, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexovatedigital.in"),
  title: {
    default: "Nexovate Digital | Premium Web Design & Development Agency",
    template: "%s | Nexovate Digital",
  },
  description:
    "We design and build high-converting websites for ambitious businesses. Web development, landing pages, e-commerce, SEO, and digital strategy.",
  keywords: [
    "web design agency",
    "web development",
    "landing page design",
    "e-commerce development",
    "SEO services",
    "website redesign",
    "premium web agency",
    "Nexovate Digital",
  ],
  authors: [{ name: "Nexovate Digital" }],
  creator: "Nexovate Digital",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexovatedigital.in",
    siteName: "Nexovate Digital",
    title: "Nexovate Digital | Premium Web Design & Development Agency",
    description:
      "We design and build high-converting websites for ambitious businesses.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexovate Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexovate Digital | Premium Web Design & Development",
    description:
      "We design and build high-converting websites for ambitious businesses.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
