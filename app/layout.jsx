// "use client";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import AOSProvider from "@/provider/AOSprovider";

export const metadata = {
  title: {
    template: '%s | Aji Setiawan Software Engineer Indonesia',
    default: 'Aji Setiawan Software Engineer Indonesia',
  },
  description: "Portfolio Aji Setiawan Software Engineer Indonesia",
  icon: "/favicon.ico"

};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="scroll-smooth">
      <body className="dark:bg-gray-900">
        <AOSProvider />
        <Header />
        <main>
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}
