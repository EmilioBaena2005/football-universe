"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CLUBS, LEGENDS, COMPETITIONS, TIMELINE } from "../data";

type Hit = { group: string; label: string; detail: string; href: string };

// Índice único con todo el contenido buscable.
const INDEX: Hit[] = [
  ...CLUBS.map((c) => ({ group: "Clubes", label: c.name, detail: `${c.city}, ${c.country}`, href: "/clubes/" })),
  ...LEGENDS.map((l) => ({ group: "Leyendas", label: l.name, detail: `${l.nationality} · ${l.position}`, href: "/leyendas/" })),
  ...COMPETITIONS.map((c) => ({ group: "Competiciones", label: c.name, detail: c.organizer, href: "/competiciones/" })),
  ...TIMELINE.map((e) => ({ group: "Historia", label: `${e.year} · ${e.title}`, detail: e.text, href: "/historia/" })),
];

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return [];
    return INDEX.filter((h) => `${h.label} ${h.detail}`.toLowerCase().includes(q));
  }, [q]);

  const suggestions = useMemo(() => {
    if (!q) return [];
    return INDEX.filter((h) => h.label.toLowerCase().startsWith(q)).slice(0, 5);
  }, [q]);

  const groups = Array.from(new Set(results.map((r) => r.group)));

  return (
    <div>
      <label htmlFor="buscador" className="sr-only">Buscar en FOOTBALL UNIVERSE</label>
      <input
        id="buscador"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Busca clubes, leyendas, competiciones o años"
        className="w-full rounded-lg bg-midnight px-4 py-3 text-gray-100 ring-1 ring-white/20 focus-visible:outline-2 focus-visible:outline-gold"
        aria-describedby="sugerencias"
      />

      {suggestions.length > 0 && (
        <ul id="sugerencias" className="mt-2 text-sm text-gray-400">
          {suggestions.map((s) => (
            <li key={s.label}>Sugerencia: {s.label}</li>
          ))}
        </ul>
      )}

      {q && results.length === 0 && (
        <p className="mt-6 text-gray-400">No encontramos resultados para &ldquo;{query}&rdquo;. Prueba con otro nombre, país o año.</p>
      )}

      {groups.map((g) => (
        <section key={g} className="mt-8">
          <h2 className="text-lg font-bold text-gold">{g}</h2>
          <ul className="mt-2 space-y-2">
            {results.filter((r) => r.group === g).map((r) => (
              <li key={r.group + r.label}>
                <Link href={r.href} className="block rounded-lg border border-white/10 bg-midnight/60 p-3 hover:border-gold/60">
                  <span className="font-semibold">{r.label}</span>
                  <span className="block text-sm text-gray-400">{r.detail}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
