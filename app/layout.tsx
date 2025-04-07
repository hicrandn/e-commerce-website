import type { Metadata } from "next";
import { Josefin_Sans, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from '@/context/CartContext';

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
        <CartProvider>
          <Header />
          
          

          <div className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
        </CartProvider>
      </body>
    </html>
  );
}
