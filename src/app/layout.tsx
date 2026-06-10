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
  metadataBase: new URL("https://www.nilsonnguyen.com"),
  title: "Nilson Nguyen | Software Engineer",
  description:
    "Software Engineer at Visa building scalable full-stack applications, from the data model to the deployed product.",
  openGraph: {
    title: "Nilson Nguyen | Software Engineer",
    description:
      "Software Engineer at Visa building scalable full-stack applications, from the data model to the deployed product.",
    url: "https://www.nilsonnguyen.com",
    siteName: "Nilson Nguyen",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
