"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CLUBS, LEGENDS } from "../data";
import worldPaths from "./world-paths.json";

// Continente de cada país incluido en la base de datos.
const CONTINENT: Record<string, "Europa" | "Sudamérica" | "Norteamérica" | "África" | "Asia"> = {
  España: "Europa",
  Inglaterra: "Europa",
  Italia: "Europa",
  Alemania: "Europa",
  Francia: "Europa",
  Portugal: "Europa",
  "Países Bajos": "Europa",
  Argentina: "Sudamérica",
  Brasil: "Sudamérica",
  Uruguay: "Sudamérica",
  "Estados Unidos": "Norteamérica",
};

// Nombre en nuestra base de datos -> nombre en Natural Earth (world-atlas).
// Inglaterra se dibuja con el Reino Unido completo: la silueta incluye Escocia y Gales.
const MAP_NAME: Record<string, string> = {
  España: "Spain",
  Inglaterra: "United Kingdom",
  Italia: "Italy",
  Alemania: "Germany",
  Francia: "France",
  Portugal: "Portugal",
  "Países Bajos": "Netherlands",
  Argentina: "Argentina",
  Brasil: "Brazil",
  Uruguay: "Uruguay",
  "Estados Unidos": "United States of America",
};
const FROM_MAP = Object.fromEntries(Object.entries(MAP_NAME).map(([k, v]) => [v, k]));

// Los nombres de nacionalidad pueden tener varios países ("Argentina / España").
function countriesOf(nationality: string): string[] {
  return nationality.split("/").map((s) => s.trim());
}

export default function CountryMap() {
  const [continent, setContinent] = useState("Todos");
  const [selected, setSelected] = useState<string | null>("España");

  const countries = useMemo(() => {
    const set = new Set<string>();
    CLUBS.forEach((c) => set.add(c.country));
    LEGENDS.forEach((l) => countriesOf(l.nationality).forEach((n) => set.add(n)));
    return Array.from(set).filter((c) => CONTINENT[c]).sort();
  }, []);

  const visible = countries.filter((c) => continent === "Todos" || CONTINENT[c] === continent);
  const clubs = selected ? CLUBS.filter((c) => c.country === selected) : [];
  const legends = selected ? LEGENDS.filter((l) => countriesOf(l.nationality).includes(selected)) : [];

  return (
    <div className="grid gap-8">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-midnight/60 p-2">
        <svg
          viewBox="0 0 960 500"
          role="img"
          aria-label="Mapa del mundo. Los países con datos en la base aparecen resaltados y se pueden seleccionar."
          className="h-auto w-full"
        >
          {worldPaths.map((p) => {
            const ours = FROM_MAP[p.name];
            const hasData = Boolean(ours && CONTINENT[ours]);
            const isSelected = ours === selected;
            const fill = isSelected ? "#d4af37" : hasData ? "#1f8a4c" : "#1f2937";
            return (
              <path
                key={p.name}
                d={p.d}
                fill={fill}
                stroke="#05070d"
                strokeWidth={0.5}
                className={hasData ? "cursor-pointer transition-colors hover:opacity-80" : ""}
                onClick={() => hasData && setSelected(ours!)}
              >
                <title>{ours ?? p.name}</title>
              </path>
            );
          })}
        </svg>
        <p className="px-2 pb-2 pt-1 text-xs text-gray-500">
          Silueta: Natural Earth (dominio público). Verde = país con datos en la base. Haz clic para ver su ficha.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <label className="flex flex-col text-sm text-gray-300">
            Continente
            <select
              value={continent}
              onChange={(e) => setContinent(e.target.value)}
              className="mt-1 w-fit rounded-md bg-midnight px-3 py-2 text-gray-100 ring-1 ring-white/20"
            >
              {["Todos", "Europa", "Sudamérica", "Norteamérica", "África", "Asia"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>

          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="Países">
            {visible.map((c) => (
              <li key={c}>
                <button
                  onClick={() => setSelected(c)}
                  aria-pressed={selected === c}
                  className={`w-full rounded-lg border px-3 py-3 text-left text-sm transition focus-visible:outline-2 focus-visible:outline-gold ${
                    selected === c ? "border-gold bg-gold/15 text-gold" : "border-white/15 hover:border-gold/60"
                  }`}
                >
                  {c}
                  <span className="block text-xs text-gray-500">{CONTINENT[c]}</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-500">
            Solo aparecen países con datos en la base. Inglaterra se dibuja con el Reino Unido completo.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-midnight/60 p-6" aria-live="polite">
          {selected ? (
            <>
              <h2 className="text-2xl font-bold text-gold">{selected}</h2>
              <h3 className="mt-5 font-semibold">Clubes</h3>
              {clubs.length === 0 ? (
                <p className="mt-1 text-sm text-gray-400">No hay clubes de este país en la base de datos.</p>
              ) : (
                <ul className="mt-2 space-y-2 text-sm">
                  {clubs.map((c) => (
                    <li key={c.id}><span className="font-semibold">{c.name}</span> · {c.city}, fundado en {c.founded}</li>
                  ))}
                </ul>
              )}

              <h3 className="mt-5 font-semibold">Leyendas</h3>
              {legends.length === 0 ? (
                <p className="mt-1 text-sm text-gray-400">No hay leyendas de este país en la base de datos.</p>
              ) : (
                <ul className="mt-2 space-y-2 text-sm">
                  {legends.map((l) => (
                    <li key={l.id}><span className="font-semibold">{l.name}</span> · {l.position} · {l.era}</li>
                  ))}
                </ul>
              )}

              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <Link href="/clubes/" className="text-gold underline">Ver clubes</Link>
                <Link href="/leyendas/" className="text-gold underline">Ver leyendas</Link>
              </div>
            </>
          ) : (
            <p className="text-gray-400">Elige un país para ver su ficha.</p>
          )}
        </div>
      </div>
    </div>
  );
}
