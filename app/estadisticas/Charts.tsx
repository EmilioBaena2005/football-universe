"use client";

import { useMemo, useState } from "react";
import { WORLD_CUP_MEN, CLUBS } from "../data";
import { CLUB_STATS, STATS_CUTOFF } from "../comparador/stats";

type Bar = { label: string; value: number };

function BarChart({ title, bars, unit, note, source }: { title: string; bars: Bar[]; unit: string; note: string; source: string }) {
  const max = Math.max(1, ...bars.map((b) => b.value));
  return (
    <figure className="rounded-xl border border-white/10 bg-midnight/60 p-6">
      <figcaption className="font-bold">{title}</figcaption>
      <p className="mt-1 text-xs text-gray-400">{note}</p>
      {bars.length === 0 ? (
        <p className="mt-4 text-sm text-gray-400">Sin datos para este periodo.</p>
      ) : (
        <>
          <ul className="mt-4 space-y-2" aria-hidden="true">
            {bars.map((b) => (
              <li key={b.label}>
                <div className="flex justify-between text-sm">
                  <span>{b.label}</span>
                  <span className="text-gold">{b.value}</span>
                </div>
                <div className="mt-1 h-3 rounded bg-white/10">
                  <div className="h-3 rounded bg-pitch" style={{ width: `${(b.value / max) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
          <table className="sr-only">
            <caption>{title}</caption>
            <thead><tr><th scope="col">Nombre</th><th scope="col">{unit}</th></tr></thead>
            <tbody>
              {bars.map((b) => (
                <tr key={b.label}><td>{b.label}</td><td>{b.value}</td></tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      <p className="mt-4 text-xs text-gray-500">{source}</p>
    </figure>
  );
}

const PERIODS = [
  { id: "todos", label: "Todos los años", from: 0, to: 9999 },
  { id: "1930-1969", label: "1930-1969", from: 1930, to: 1969 },
  { id: "1970-2022", label: "1970-2022", from: 1970, to: 2022 },
];

// Las selecciones "Alemania Occidental" y "Alemania" se cuentan como una sola federación.
function worldCupByCountry(from: number, to: number): Bar[] {
  const counts = new Map<string, number>();
  WORLD_CUP_MEN.filter((e) => e.year >= from && e.year <= to).forEach((e) => {
    const name = e.champion.replace("Alemania Occidental", "Alemania");
    counts.set(name, (counts.get(name) ?? 0) + 1);
  });
  return Array.from(counts, ([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value);
}

function clubTitles(key: "championsLeague" | "libertadores" | "leagueTitles"): Bar[] {
  return CLUB_STATS.filter((s) => s[key] !== null && (s[key] as number) > 0)
    .map((s) => ({
      label: CLUBS.find((c) => c.id === s.id)?.name ?? s.id,
      value: s[key] as number,
    }))
    .sort((a, b) => b.value - a.value);
}

export default function Charts() {
  const [period, setPeriod] = useState("todos");
  const p = PERIODS.find((x) => x.id === period) ?? PERIODS[0];
  const wc = useMemo(() => worldCupByCountry(p.from, p.to), [p.from, p.to]);

  return (
    <div className="space-y-8">
      <div>
        <label className="flex flex-col gap-2 text-sm text-gray-300">
          Periodo para los Mundiales
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="w-fit rounded-md bg-midnight px-3 py-2 text-gray-100 ring-1 ring-white/20"
          >
            {PERIODS.map((x) => <option key={x.id} value={x.id}>{x.label}</option>)}
          </select>
        </label>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <BarChart
          title="Mundiales masculinos ganados por país"
          bars={wc}
          unit="Títulos"
          note={`Periodo: ${p.label}. Cuenta cada edición ganada por la selección.`}
          source="Fuente: FIFA (fifa.com). Ediciones de 1930 a 2022. Alemania suma las de Alemania Occidental."
        />
        <BarChart
          title="Copas de Europa / Champions League por club"
          bars={clubTitles("championsLeague")}
          unit="Títulos"
          note="Solo clubes con al menos un título."
          source={`Fuente: UEFA (uefa.com). Cifras a fecha de corte ${STATS_CUTOFF}.`}
        />
        <BarChart
          title="Copas Libertadores por club"
          bars={clubTitles("libertadores")}
          unit="Títulos"
          note="Solo clubes con al menos un título. La Libertadores 2026 sigue en curso."
          source={`Fuente: CONMEBOL (conmebol.com). Cifras a fecha de corte ${STATS_CUTOFF}.`}
        />
        <BarChart
          title="Títulos de liga nacional por club (solo Europa)"
          bars={clubTitles("leagueTitles")}
          unit="Títulos"
          note="Solo clubes con cifra verificada. Los clubes sudamericanos quedan fuera hasta tener datos oficiales."
          source={`Fuentes: ligas nacionales y Wikipedia. Cifras a fecha de corte ${STATS_CUTOFF}.`}
        />
      </div>

      <section className="rounded-xl border border-white/10 bg-midnight/60 p-6">
        <h2 className="text-xl font-bold">Cómo se calcula</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-300">
          <li>Cada gráfico cuenta títulos oficiales de la competición indicada, sin amistosos.</li>
          <li>Los clubes sin cifra verificada no aparecen. No se rellena ningún valor.</li>
          <li>Las cifras de Champions y Libertadores cambian cuando termina una edición. Revisa la fecha de corte de cada gráfico.</li>
        </ul>
      </section>
    </div>
  );
}
