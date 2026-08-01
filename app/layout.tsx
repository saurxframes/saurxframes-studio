import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0N96S8ZWR3"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0N96S8ZWR3');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}