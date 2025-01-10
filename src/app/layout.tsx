import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  description:
    "Moultrie Animal Clinic - Compassionate Care for Your Furry Family Members Since 1985",
  keywords:
    "veterinary, animal clinic, pet care, Moultrie, Saint Augustine, FL",
  openGraph: {
    type: "website",
    url: "https://moultrieanimalclinic.com/",
    siteName: "Moultrie Animal Clinic",
    locale: "en_US",
    images: [
      {
        url: "/home/moultrie-logo-color.jpg",
        width: 612,
        height: 336,
        alt: "Moultrie Animal Clinic logo with lighthouse and clinic name",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moultrie Animal Clinic",
    description:
      "Moultrie Animal Clinic - Compassionate Care for Your Furry Family Members Since 1985",
    images: ["home/moultrie-logo-color.jpg"],
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
  alternates: {
    canonical: "https://moultrieanimalclinic.com",
    languages: {
      "en-US": "https://moultrieanimalclinic.com",
    },
  },
  authors: [{ name: "Moultrie Animal Clinic" }],
  verification: {
    google: `${process.env.GOOGLE_SITE_VERIFICATION}`,
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
        <main tabIndex={-1}>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
