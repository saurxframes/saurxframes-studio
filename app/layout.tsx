import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saurxframes-studio.vercel.app"),

  title: "SaurxFrames Studio | Mobile Photographer & Visual Storyteller",

  description:
    "Explore the photography portfolio of SaurxFrames Studio. Mobile photography, cinematic edits, visual storytelling and creative photography.",

  keywords: [
    "SaurxFrames",
    "Photography",
    "Mobile Photography",
    "Photographer",
    "Portfolio",
    "Visual Storyteller",
    "Nature Photography",
    "Street Photography",
    "India",
  ],

  authors: [{ name: "Saurabh Meena" }],
  creator: "Saurabh Meena",

  openGraph: {
    title: "SaurxFrames Studio",
    description:
      "Photography Portfolio by Saurabh Meena | Capturing Stories Through Light.",
    url: "https://saurxframes-studio.vercel.app",
    siteName: "SaurxFrames Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SaurxFrames Studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SaurxFrames Studio",
    description:
      "Photography Portfolio by Saurabh Meena | Capturing Stories Through Light.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
