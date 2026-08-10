import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";

const themeInitScript = `(function(){try{var t=localStorage.getItem("mjoyit-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add("dark");}})();`;

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
  "@id": "https://mjoyit.com/#organization",
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
  brand: {
    "@type": "Brand",
    name: "Harmoneaz",
    url: "https://harmoneaz.com",
  },
  owns: {
    "@type": "SoftwareApplication",
    "@id": "https://harmoneaz.com/#app",
    name: "Harmoneaz",
    url: "https://harmoneaz.com",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS, Android",
    sameAs: [
      "https://apps.apple.com/nl/app/harmoneaz/id6760933859",
      "https://play.google.com/store/apps/details?id=com.harmoneaz.app",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="nl"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body bg-ink text-paper antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
