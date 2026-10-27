import Link from "next/link";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/historia/", label: "Historia" },
  { href: "/clubes/", label: "Clubes" },
  { href: "/comparador/", label: "Comparador" },
  { href: "/rivalidades/", label: "Rivalidades" },
  { href: "/leyendas/", label: "Leyendas" },
  { href: "/competiciones/", label: "Competiciones" },
  { href: "/quiz/", label: "Quiz" },
  { href: "/buscar/", label: "Buscar" },
  { href: "/fuentes/", label: "Fuentes" },
];

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/85 backdrop-blur">
      <nav aria-label="Principal" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-extrabold tracking-tight text-gold focus-visible:outline-2 focus-visible:outline-gold">
          FOOTBALL UNIVERSE
        </Link>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-300">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-gold focus-visible:outline-2 focus-visible:outline-gold">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
