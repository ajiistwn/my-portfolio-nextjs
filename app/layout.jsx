// "use client";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import AOSProvider from "@/provider/AOSprovider";
import Footer from "@/components/Footer";

// import "aos/dist/aos.css";


export const metadata = {
  title: {
    template: '%s | Aji Setiawan Software Engineer Indonesia',
    default: 'Aji Setiawan Software Engineer Indonesia',
  },
  description: "Portfolio Aji Setiawan Software Engineer Indonesia",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="scroll-smooth">
      <AOSProvider />
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
