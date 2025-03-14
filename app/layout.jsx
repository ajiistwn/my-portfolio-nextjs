import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import AOSProvider from "@/provider/AOSprovider";

export const metadata = {
  title: {
    template: '%s | Aji Setiawan',
    default: 'Aji Setiawan',
  },
  description: "Portfolio Aji Setiawan Software Engineer Indonesia",
  keywords: "Aji Setiawan, Software Engineer, Database Engineer, Web Developer, BSI, Frontend, Backend, Fullstack,Indonesia, Portfolio",
  authors: [{ name: "Aji Setiawan", url: "https://ajisetiawan.dev" }],
  creator: "Aji Setiawan",
  publisher: "Aji Setiawan",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: process.env.BASE_DOMAIN,
  },
  openGraph: {
    title: "Aji Setiawan",
    description: "Portfolio Aji Setiawan Software Engineer Indonesia",
    url: process.env.BASE_URL,
    siteName: "Aji Setiawan",
    images: [
      {
        url: `${process.env.BASE_DOMAIN}/images/ImageHome.png`,
        width: 1200,
        height: 630,
        alt: "Aji Setiawan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aji Setiawan",
    description: "Portfolio Aji Setiawan Software Engineer Indonesia",
    images: [`${process.env.BASE_DOMAIN}/images/ImageHome.png`],
  },

};
export const viewport = {
  width: "device-width",
  initialScale: 1,
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
