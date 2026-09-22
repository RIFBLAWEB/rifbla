import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rifbla.vercel.app"), // update after domain switch
  title: {
    default: "Rhode Island FBLA | Future Business Leaders of America",
    template: "%s · Rhode Island FBLA",
  },
  description:
    "The official website of Rhode Island FBLA (Future Business Leaders of America). State Leadership Conference, competitive events, chapter directory, officers, and how to get involved in RI.",
  keywords: [
    "RI FBLA",
    "Rhode Island FBLA",
    "FBLA Rhode Island",
    "Future Business Leaders of America Rhode Island",
    "RI FBLA State Leadership Conference",
  ],
  openGraph: {
    title: "Rhode Island FBLA",
    description:
      "The official website of Rhode Island FBLA. State conferences, competitive events, chapters, and how to get involved.",
    url: "https://rifbla.vercel.app",
    siteName: "Rhode Island FBLA",
    images: [{ url: "/photos/nlc-delegation.jpg", width: 1600, height: 900 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhode Island FBLA",
    description:
      "The official website of Rhode Island FBLA. State conferences, competitive events, chapters, and how to get involved.",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rhode Island FBLA",
  alternateName: ["RI FBLA", "Rhode Island Future Business Leaders of America"],
  url: "https://rifbla.vercel.app",
  logo: "https://rifbla.vercel.app/photos/rifbla-logo.png",
  email: "rifblaofficial@gmail.com",
  areaServed: "Rhode Island, US",
  parentOrganization: {
    "@type": "Organization",
    name: "Future Business Leaders of America",
    url: "https://www.fbla.org",
  },
  sameAs: [
    "https://www.instagram.com/ri_fbla/",
    "https://www.linkedin.com/groups/13073318/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${archivoBlack.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
