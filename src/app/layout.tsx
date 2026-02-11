import type { Metadata } from "next";
import { Archivo, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display-Font: Stark, mechanisch, "gebaut"
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["700", "800", "900"],
});

// Body-Font: Sauber, geometrisch, lesbar
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500"],
});

// Technical-Font: Blaupause-Feeling für Nummern und Labels
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "HMD GmbH — Innenausbau & Trockenbau in Schneeberg",
    template: "%s | HMD GmbH",
  },
  description:
    "HMD GmbH ist Ihr Spezialist für hochwertigen Innenausbau, Trockenbau, Akustikbau und Brandschutz in Schneeberg und der Region Erzgebirge.",
  keywords: [
    "Innenausbau Schneeberg",
    "Trockenbau Schneeberg",
    "Trockenbau Erzgebirge",
    "HMD GmbH",
    "Akustikbau Sachsen",
    "Brandschutz Trockenbau",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "HMD GmbH",
    title: "HMD GmbH — Präzision im Innenausbau",
    description: "Ihr Spezialist für Innenausbau & Trockenbau in Schneeberg.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

// Structured Data (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HMD GmbH",
  description: "Innenausbau & Trockenbau",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Musterstraße 1", // Vom Kunden zu aktualisieren
    addressLocality: "Schneeberg",
    addressRegion: "Sachsen",
    postalCode: "08289",
    addressCountry: "DE",
  },
  telephone: "+49-3772-XXXXXX", // Vom Kunden zu aktualisieren
  url: "https://www.hmd-schneeberg.de", // Final Domain
  image: "/og-image.jpg",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "17:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${archivo.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-body`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
