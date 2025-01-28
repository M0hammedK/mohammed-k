import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mohammed Al-Kaf",
  description: "This is my portfolio, my name is Mohammed I backend devoloper.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="main-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
