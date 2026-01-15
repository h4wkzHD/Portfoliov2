import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dylan Hacquard | Administrateur Réseaux & Système",
  description:
    "Portfolio de Dylan Hacquard - Administrateur Réseaux & Système passionné par la cybersécurité et les infrastructures IT. BTS SIO SISR, recherche alternance.",
  keywords: [
    "administrateur",
    "réseaux",
    "système",
    "cisco",
    "cybersécurité",
    "pentest",
    "portfolio",
    "Dylan Hacquard",
    "BTS SIO",
    "SISR",
  ],
  authors: [{ name: "Dylan Hacquard" }],
  creator: "Dylan Hacquard",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://hawkzhd.ovh",
    title: "Dylan Hacquard | Administrateur Réseaux & Système",
    description:
      "Portfolio de Dylan Hacquard - Administrateur Réseaux & Système passionné par la cybersécurité et les infrastructures IT.",
    siteName: "Dylan Hacquard Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dylan Hacquard | Administrateur Réseaux & Système",
    description:
      "Portfolio de Dylan Hacquard - Administrateur Réseaux & Système passionné par la cybersécurité et les infrastructures IT.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
