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
  title: "SaurxFrames Studio | Mobile Photographer & Visual Storyteller",

  description:
    "Explore the photography portfolio of SaurxFrames Studio. Mobile photography, cinematic edits, visual storytelling, and creative moments captured through light.",

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

  metadataBase: new URL("https://saurxframes-studio.vercel.app"),

  openGraph: {
    title: "SaurxFrames Studio",
    description:
      "Photography Portfolio by Saurabh Meena | Capturing Stories Through Light.",
    url: "https://saurxframes-studio.vercel.app",
    siteName: "SaurxFrames Studio",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};
