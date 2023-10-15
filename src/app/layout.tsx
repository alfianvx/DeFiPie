import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["devanagari"],
  style: ["normal"],
  weight: ["300", "500", "700"],
});

export const metadata: Metadata = {
  title: "Vision Capital",
  description: "The right way to fund and incubate your DeFi startup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
