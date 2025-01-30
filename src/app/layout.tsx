import type { Metadata } from "next";
import "./styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mohammed Al-Kaf",
  description: "This is my portfolio, my name is Mohammed I backend devoloper.",
};

// layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen items-center">        
          <Navbar />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
