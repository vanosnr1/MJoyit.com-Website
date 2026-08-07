import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://mjoyit.com"),
  title: {
    default: "MJoy-IT — Apps die het dagelijks leven eenvoudiger maken",
    template: "%s — MJoy-IT",
  },
  description:
    "MJoy-IT uit Rotterdam bouwt apps die het dagelijks leven eenvoudiger maken. Onze eerste app: Harmoneaz, de co-ouderschap app voor Nederland.",
  keywords: [
    "MJoy-IT",
    "Harmoneaz",
    "co-ouderschap app Nederland",
    "software Rotterdam",
    "app ontwikkeling Nederland",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MJoy-IT — Apps die het dagelijks leven eenvoudiger maken",
    description:
      "MJoy-IT uit Rotterdam bouwt apps die het dagelijks leven eenvoudiger maken. Onze eerste app: Harmoneaz, de co-ouderschap app voor Nederland.",
    url: "https://mjoyit.com",
    siteName: "MJoy-IT",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MJoy-IT — Apps die het dagelijks leven eenvoudiger maken",
    description:
      "MJoy-IT uit Rotterdam bouwt apps die het dagelijks leven eenvoudiger maken.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MJoy-IT",
  url: "https://mjoyit.com",
  logo: "https://mjoyit.com/icon",
  email: "info@mjoyit.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rotterdam",
    addressCountry: "NL",
  },
  founders: [{ "@type": "Person", name: "Mandy" }, { "@type": "Person", name: "Jeroen" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-ink text-paper antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
