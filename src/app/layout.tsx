import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppHeaderComponent } from "@/components/app-header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Moultrie Animal Clinic",
  description: "Moultrie Animal Clinic",
  openGraph: {
    type: "website",
    url: "https://moultrieanimalclinic.com/",
    siteName: "Moultrie Animal Clinic",
    //   images: [
    //     {
    //       url: ogImageUrl,
    //       width: 1200,
    //       height: 675,
    //       alt: t("ogImageAlt"),
    //     },
    //   ],
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppHeaderComponent />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
