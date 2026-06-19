import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Asad Ishfaq — AI/ML Engineer",
  description:
    "Portfolio of Muhammad Asad Ishfaq, an AI/ML Engineer and Associate Software Engineer at Datics AI. Specializing in LLMs, LangGraph, computer vision, and full-stack AI applications.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "LangGraph",
    "LangChain",
    "Next.js",
    "Python",
    "Muhammad Asad Ishfaq",
  ],
  authors: [{ name: "Muhammad Asad Ishfaq" }],
  openGraph: {
    title: "Muhammad Asad Ishfaq — AI/ML Engineer",
    description:
      "Portfolio of Muhammad Asad Ishfaq, an AI/ML Engineer specializing in Generative AI, LLMs, and full-stack AI applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0f172a] text-white antialiased font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}