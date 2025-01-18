import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import { NextUIProviders } from "@/utils/next-ui-providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rfqma.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
  title: {
    template: "rfqma | %s",
    default: "rfqma",
  },
  description: "fullstack developer, photography and videography enthusiast.",
  applicationName: "rfqma-v3",
  referrer: "origin-when-cross-origin",
  keywords: [
    "rfqma",
    "abel",
    "rifqi maulana",
    "fullstack",
    "front end",
    "back end",
    "developer",
    "engineer",
    "photography",
    "photographer",
    "videography",
    "videographer",
  ],
  authors: [{ name: "Rifqi Maulana", url: "https://github.com/rfqma" }],
  creator: "Rifqi Maulana",
  publisher: "Rifqi Maulana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={ubuntuMono.className}>
        <NextUIProviders>
          <Header />
          {children}
          <Footer />
        </NextUIProviders>
      </body>
    </html>
  );
}
