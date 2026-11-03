import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "AmeriWealth Financial | Craig Anger, Retirement Specialist",
    template: "%s | AmeriWealth Financial",
  },
  description:
    "Craig Anger is a Certified Financial Fiduciary and Retirement Specialist at AmeriWealth Financial, helping Texas families with retirement planning, life insurance, and investment strategy.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
