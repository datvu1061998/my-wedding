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
  description: "Đạt Vũ & Quỳnh Như",
  openGraph: {
    title: "Đạt Vũ & Quỳnh Như",
    images: [
      {
        url: "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/546283135_1558724242205205_5170662823186024163_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6r5-3nI6oF4Q7kNvwEE0QsE&_nc_oc=Adk6hDgHLagrCREgE1-zvvlxy0lK7C8pCNrAE6esQ_qz06wevh69DBUbwRi3ZFE3IOU&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=OkXzPlyj4vhWgk6nNCDMRQ&oh=00_AfdWvi7IoqgRLtgRL5nKEAKsOuk1ikly6Ahv05QHnrPc5Q&oe=690A6BF4", // ← Thumb link
        width: 1200,
        height: 630,
        alt: "Thumbnail"
      }
    ],
    locale: "vi_VN",
    type: "website"
  }
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
