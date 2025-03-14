import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import AOSProvider from "@/provider/AOSprovider";

export const metadata = {
  title: {
    template: '%s | Aji Setiawan - Software Engineer Indonesia',
    default: 'Aji Setiawan - Software Engineer Indonesia',
  },
  description: "Portfolio Aji Setiawan Software Engineer Indonesia",
  keywords: "Aji Setiawan, Software Engineer, Indonesia, Portfolio, aji setiawan, aji setiawan software engineer indonesia, aji setiawan indonesia, aji setiawan portfolio, web development, software projects, aji setiawan bsi, backend, frontend, fullstack, aji setiawan fullstack, aji setiawan backend, aji setiawan frontend, aji setiawan web development, aji setiawan software projects, aji setiawan bsi",
  authors: [{ name: "Aji Setiawan", url: process.env.BASE_URL }],
  creator: "Aji Setiawan",
  publisher: "Aji Setiawan",
  icons: {
    icon: `${process.env.BASE_DOMAIN}/favicon.png`,
    apple: `${process.env.BASE_DOMAIN}/apple-touch-icon.png`,
    shortcut: `${process.env.BASE_DOMAIN}/shortcut-icon.png`,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: `${process.env.BASE_DOMAIN}/apple-touch-icon-precomposed.png`,
    },
  },
  alternates: {
    canonical: process.env.BASE_DOMAIN,
  },
  openGraph: {
    title: "Aji Setiawan - Software Engineer Indonesia",
    description: "Portfolio Aji Setiawan Software Engineer Indonesia",
    url: process.env.BASE_URL,
    siteName: "Aji Setiawan - Software Engineer Indonesia",
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
    title: "Aji Setiawan - Software Engineer Indonesia",
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
