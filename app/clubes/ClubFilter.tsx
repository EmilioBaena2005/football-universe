"use client";

import { useMemo, useState } from "react";
import type { Club } from "../data";

// Filtros por continente y país. Las comparaciones de grandeza no se presentan como verdad absoluta.
export default function ClubFilter({ clubs }: { clubs: Club[] }) {
  const [continent, setContinent] = useState("Todos");
  const [country, setCountry] = useState("Todos");

  const continents = ["Todos", ...Array.from(new Set(clubs.map((c) => c.continent)))];
  const countries = ["Todos", ...Array.from(new Set(clubs.map((c) => c.country))).sort()];

  const filtered = useMemo(
    () =>
      clubs.filter(
        (c) =>
          (continent === "Todos" || c.continent === continent) &&
          (country === "Todos" || c.country === country),
      ),
    [clubs, continent, country],
  );

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-4">
        <label className="flex flex-col text-sm text-gray-300">
          Continente
          <select value={continent} onChange={(e) => setContinent(e.target.value)} className="mt-1 rounded-md bg-midnight px-3 py-2 text-gray-100 ring-1 ring-white/20">
            {continents.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <label className="flex flex-col text-sm text-gray-300">
          País
          <select value={country} onChange={(e) => setCountry(e.target.value)} className="mt-1 rounded-md bg-midnight px-3 py-2 text-gray-100 ring-1 ring-white/20">
            {countries.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <p className="self-end text-sm text-gray-400" aria-live="polite">{filtered.length} clubes</p>
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-400">No hay clubes con esos filtros.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <li key={c.id}>
              <article className="h-full rounded-xl border border-white/10 bg-midnight/60 p-5 transition hover:-translate-y-1 hover:border-gold/60">
                <h2 className="text-lg font-bold">{c.name}</h2>
                <dl className="mt-3 grid grid-cols-2 gap-y-1 text-sm text-gray-300">
                  <dt className="text-gray-500">Ciudad</dt><dd>{c.city}, {c.country}</dd>
                  <dt className="text-gray-500">Fundación</dt><dd>{c.founded}</dd>
                  <dt className="text-gray-500">Estadio</dt><dd>{c.stadium}</dd>
                  <dt className="text-gray-500">Colores</dt><dd>{c.colors}</dd>
                </dl>
                <p className="mt-3 text-sm text-gray-300">{c.highlight}</p>
                <p className="mt-3 text-xs text-gray-500">
                  Fuente: <a className="underline" href={c.source.url}>{c.source.name}</a>
                </p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
