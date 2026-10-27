import Link from "next/link";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/historia/", label: "Historia" },
  { href: "/clubes/", label: "Clubes" },
  { href: "/comparador/", label: "Comparador" },
  { href: "/rivalidades/", label: "Rivalidades" },
  { href: "/mapa/", label: "Mapa" },
  { href: "/trofeos/", label: "Trofeos" },
  { href: "/estadisticas/", label: "Estadísticas" },
  { href: "/leyendas/", label: "Leyendas" },
  { href: "/top/", label: "Top" },
  { href: "/competiciones/", label: "Competiciones" },
  { href: "/quiz/", label: "Quiz" },
  { href: "/buscar/", label: "Buscar" },
  { href: "/fuentes/", label: "Fuentes" },
];

export default function SiteNav() {
  return (
    <header className="glass sticky top-0 z-50 border-b border-gold/20 shadow-[0_10px_30px_-20px_rgba(212,175,55,0.5)]">
      <nav aria-label="Principal" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="bg-gradient-to-r from-gold to-amber-200 bg-clip-text font-extrabold tracking-tight text-transparent focus-visible:outline-2 focus-visible:outline-gold">
          FOOTBALL UNIVERSE
        </Link>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-300">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:scale-x-0 after:bg-gold after:transition-transform hover:text-gold hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-gold">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
