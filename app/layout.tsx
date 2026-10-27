import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FOOTBALL UNIVERSE",
  description: "La historia del fútbol: clubes, leyendas y competiciones.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
