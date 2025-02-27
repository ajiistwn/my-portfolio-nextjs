// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import AOSProvider from "@/components/AOSprovider";
import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Portfolio Aji Setiawan",
  description: "Portfolio Aji Setiawan Software Engineer",
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
