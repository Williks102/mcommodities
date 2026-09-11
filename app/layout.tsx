import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moses Commodities | Cacao & Café de Côte d'Ivoire",
  description: "Moses Commodities — coopérative agricole ivoirienne engagée dans la production, la collecte et la commercialisation de cacao et de café.",
  openGraph: {
    title: "Moses Commodities | Cacao & Café de Côte d'Ivoire",
    description: "De nos producteurs aux marchés du monde.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}