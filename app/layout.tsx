import type { Metadata } from "next";
import { Josefin_Sans, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const geistSans = Josefin_Sans ({
  weight:["100","200", "300", "400", "700"],
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const geistLato = Lato({
  weight:["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Commerce Website",
  description: "Modern e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistLato.variable} antialiased`}
      >
        <Header />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
