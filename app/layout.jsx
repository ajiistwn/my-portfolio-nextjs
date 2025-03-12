import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import AOSProvider from "@/provider/AOSprovider";

export const metadata = {
  title: {
    template: '%s | Aji Setiawan Software Engineer Indonesia',
    default: 'Aji Setiawan Software Engineer Indonesia',
  },
  icon: "/favicon.ico",
  description: "Portfolio Aji Setiawan Software Engineer Indonesia",
  keywords: "aji setiawan, programmer, backend, frontend, software engineer, indonesia, portfolio, web developer,  web programmer, web engineer, web developer indonesia, web programmer indonesia, web engineer indonesia, software engineer indonesia, software developer indonesia, software programmer, database, database engineer, database developer, database programmer, database engineer indonesia, database developer indonesia, database programmer indonesia, aji setiawan software engineer, aji setiawan software developer, aji setiawan software programmer, aji setiawan software engineer indonesia, aji setiawan software developer indonesia, aji setiawan software programmer indonesia, aji setiawan web developer, aji setiawan web programmer, aji setiawan web engineer, aji setiawan web developer indonesia, aji setiawan web programmer indonesia, aji setiawan web engineer indonesia, aji setiawan web developer indonesia, aji setiawan web programmer indonesia, aji setiawan web engineer indonesia",
  robots: "index, follow",
  authors: [{ name: "Aji Setiawan", url: process.env.BASE_DOMAIN }],
  alternates: {
    canonical: process.env.BASE_DOMAIN,
  },
  openGraph: {
    title: "Aji Setiawan Software Engineer Indonesia",
    description: "Portfolio Aji Setiawan Software Engineer Indonesia",
    url: process.env.BASE_URL,
    siteName: "Aji Setiawan's Portfolio",
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
    title: "Aji Setiawan Software Engineer Indonesia",
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
      <head>
        <link rel="preload" href="/favicon.ico" as="image" />
      </head>
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
