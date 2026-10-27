import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "./components/SiteNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "FOOTBALL UNIVERSE",
  description: "La historia del fútbol: clubes, leyendas, competiciones y cronología.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:p-2">
          Saltar al contenido
        </a>
        <SiteNav />
        <div id="contenido" className="flex-1">{children}</div>
        <footer className="mt-16 border-t border-white/10 px-4 py-8 text-center text-sm text-gray-400">
          <p>FOOTBALL UNIVERSE. Proyecto educativo, no oficial. No está afiliado a FIFA, UEFA ni a ningún club.</p>
          <p className="mt-2">
            <Link href="/fuentes/" className="underline hover:text-gold">Fuentes y metodología</Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
