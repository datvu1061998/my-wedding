import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Instrument_Sans,
  The_Nautigal,
  Playfair_Display,
  Imperial_Script
} from "next/font/google";
import "~/app/globals.css";
import "~/app/styles.scss";
import Script from "next/script";
import localFont from "next/font/local";
import Head from "next/head";

const myFont = localFont({
  src: "./Gingerbread-House.ttf"
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"]
});

const theNautigal = The_Nautigal({
  weight: ["400", "700"],
  variable: "--font-the-nautigal",
  subsets: ["latin"]
});

const imperialScript = Imperial_Script({
  weight: ["400"],
  variable: "--font-imperial-script",
  subsets: ["latin"]
});

const merienda = Playfair_Display({
  variable: "--font-merienda",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Đạt Vũ & Quỳnh Như",
  description: "Đạt Vũ & Quỳnh Như"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        type="text/javascript"
        src="https://unpkg.com/@pqina/flip/dist/flip.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="/before.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        type="text/javascript"
        src="/scripts.js"
        strategy="lazyOnload"
      ></Script>
      <body
        className={`${geistSans.variable} ${instrumentSans.className} ${theNautigal.variable} ${imperialScript.variable} ${merienda.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
