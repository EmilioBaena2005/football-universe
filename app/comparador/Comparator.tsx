"use client";

import { useMemo, useState } from "react";
import { CLUBS } from "../data";
import { CLUB_STATS, STATS_CUTOFF } from "./stats";

type Criterion = "championsLeague" | "libertadores" | "leagueTitles";

const CRITERIA: { key: Criterion; label: string; note: string }[] = [
  { key: "championsLeague", label: "Copas de Europa / Champions", note: "Fuente: UEFA. Competición oficial de clubes europeos." },
  { key: "libertadores", label: "Copas Libertadores", note: "Fuente: CONMEBOL. Solo clubes sudamericanos." },
  { key: "leagueTitles", label: "Títulos de liga nacional", note: "Solo clubes europeos. Cifras comprobadas en octubre de 2026 con la web oficial del club o de la liga, y con Wikipedia para los títulos históricos." },
];

const MAX_CLUBS = 4;

export default function Comparator() {
  const [selected, setSelected] = useState<string[]>(["real-madrid", "milan"]);
  const [criterion, setCriterion] = useState<Criterion>("championsLeague");

  const rows = useMemo(
    () =>
      selected
        .map((id) => {
          const club = CLUBS.find((c) => c.id === id);
          const stats = CLUB_STATS.find((s) => s.id === id);
          return club && stats ? { club, stats } : null;
        })
        .filter((r): r is NonNullable<typeof r> => r !== null),
    [selected],
  );

  const active = CRITERIA.find((c) => c.key === criterion)!;
  const maxValue = Math.max(1, ...rows.map((r) => r.stats[criterion] ?? 0));

  function toggle(id: string) {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= MAX_CLUBS) return prev;
      return [...prev, id];
    });
  }

  return (
    <div className="space-y-8">
      <fieldset>
        <legend className="mb-3 font-semibold">Elige entre 2 y {MAX_CLUBS} clubes ({selected.length} seleccionados)</legend>
        <div className="flex flex-wrap gap-2">
          {CLUBS.map((c) => {
            const on = selected.includes(c.id);
            const disabled = !on && selected.length >= MAX_CLUBS;
            return (
              <label
                key={c.id}
                className={`cursor-pointer rounded-full border px-3 py-1 text-sm ${
                  on ? "border-gold bg-gold/15 text-gold" : "border-white/20 text-gray-300"
                } ${disabled ? "opacity-40" : ""}`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={on}
                  disabled={disabled}
                  onChange={() => toggle(c.id)}
                />
                {c.name}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <p className="mb-3 font-semibold">Criterio</p>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Criterio de comparación">
          {CRITERIA.map((c) => (
            <button
              key={c.key}
              role="radio"
              aria-checked={criterion === c.key}
              onClick={() => setCriterion(c.key)}
              className={`rounded-md border px-4 py-2 text-sm focus-visible:outline-2 focus-visible:outline-gold ${
                criterion === c.key ? "border-gold bg-gold text-night" : "border-white/20 text-gray-300"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-400">{active.note} Cifras a fecha de corte {STATS_CUTOFF}.</p>
      </div>

      {rows.length < 2 ? (
        <p className="text-gray-400">Selecciona al menos dos clubes para comparar.</p>
      ) : (
        <>
          <section aria-labelledby="barras">
            <h2 id="barras" className="text-xl font-bold">{active.label}</h2>
            <ul className="mt-4 space-y-3">
              {rows.map(({ club, stats }) => {
                const value = stats[criterion];
                return (
                  <li key={club.id}>
                    <div className="flex justify-between text-sm">
                      <span>{club.name}</span>
                      <span className="text-gold">{value === null ? "Pendiente de verificar" : value}</span>
                    </div>
                    <div className="mt-1 h-3 rounded bg-white/10" role="presentation">
                      {value !== null && (
                        <div
                          className="h-3 rounded bg-pitch"
                          style={{ width: `${(value / maxValue) * 100}%` }}
                        />
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          <section aria-labelledby="tabla">
            <h2 id="tabla" className="text-xl font-bold">Tabla comparativa</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="text-gray-400">
                  <tr>
                    <th scope="col" className="py-2">Club</th>
                    <th scope="col">Fundación</th>
                    <th scope="col">Estadio</th>
                    <th scope="col">Copas de Europa</th>
                    <th scope="col">Libertadores</th>
                    <th scope="col">Liga</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(({ club, stats }) => (
                    <tr key={club.id} className="border-t border-white/10">
                      <th scope="row" className="py-2 font-semibold">{club.name}</th>
                      <td>{club.founded}</td>
                      <td>{club.stadium}</td>
                      <td>{stats.championsLeague ?? "—"}</td>
                      <td>{stats.libertadores ?? "—"}</td>
                      <td>{stats.leagueTitles ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              — = dato no verificado o no aplicable. Competiciones oficiales únicamente. No incluye amistosos.
            </p>
          </section>

          <section aria-labelledby="fortalezas">
            <h2 id="fortalezas" className="text-xl font-bold">Fortalezas de cada club</h2>
            <ul className="mt-3 space-y-2 text-gray-300">
              {rows.map(({ club, stats }) => (
                <li key={club.id}><span className="font-semibold">{club.name}:</span> {stats.strengths}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              Esta comparación no declara un ganador. Cada criterio mide algo distinto, y los clubes de épocas, países y
              competiciones distintas no son directamente comparables.
            </p>
          </section>
        </>
      )}
    </div>
  );
}
