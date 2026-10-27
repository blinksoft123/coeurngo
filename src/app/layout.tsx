import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_DATA } from "@/data/siteData";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_DATA.name} | ${SITE_DATA.legalType} - Yaoundé, Cameroun`,
    template: `%s | ${SITE_DATA.name}`,
  },
  description:
    "Coeur Sans Frontière est une organisation humanitaire d'assistance et de bienfaisance au Cameroun (reconnue Décision n° 001733/RDA/J06/BAPP). Réinsertion en milieu carcéral, parrainage scolaire d'enfants et orphelinats, ateliers savonnerie et couture, santé.",
  keywords: [
    "Coeur Sans Frontière",
    "association humanitaire Cameroun",
    "ONG Cameroun",
    "association humanitaire Yaoundé",
    "assistance enfants Cameroun",
    "assistance prisonniers Cameroun",
    "association bienfaisance Cameroun",
    "orphelinat Cameroun",
    "réinsertion prison Yaoundé",
    "savonnerie réinsertion"
  ],
  authors: [{ name: "Coeur Sans Frontière" }],
  creator: "Coeur Sans Frontière",
  publisher: "Coeur Sans Frontière",
  metadataBase: new URL("https://coeursansfrontieres.org"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://coeursansfrontieres.org",
    title: "COEUR SANS FRONTIÈRE | Organisation Humanitaire au Cameroun",
    description: "Un cœur pour chaque personne. Une action pour chaque besoin. Organisation humanitaire reconnue pour l'assistance et la bienfaisance au Cameroun.",
    siteName: "Coeur Sans Frontière",
    images: [
      {
        url: "/images/logo_original.jpeg",
        width: 800,
        height: 800,
        alt: "Logo officiel Coeur Sans Frontière",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "COEUR SANS FRONTIÈRE | ONG Cameroun",
    description: "Organisation Humanitaire pour l'Assistance et la Bienfaisance au Cameroun.",
    images: ["/images/logo_original.jpeg"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE_DATA.name,
    legalName: `${SITE_DATA.name} - ${SITE_DATA.legalType}`,
    description: SITE_DATA.editorialPresentation.intro,
    url: "https://coeursansfrontieres.org",
    logo: "https://coeursansfrontieres.org/images/logo.png",
    foundingDate: "2009",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mballa II / Nkozoa",
      postOfficeBoxNumber: "BP 7017",
      addressLocality: "Yaoundé",
      addressCountry: "CM",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+237699886055",
        contactType: "customer support",
        availableLanguage: ["French", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+237675589311",
        contactType: "technical support",
        availableLanguage: ["French", "English"],
      },
    ],
    email: SITE_DATA.email,
  };

  return (
    <html lang="fr" className={`${jakarta.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900 min-h-screen flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
