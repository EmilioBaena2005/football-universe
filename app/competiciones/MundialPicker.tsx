"use client";

import { useState } from "react";
import { WORLD_CUP_MEN } from "../data";

export default function MundialPicker() {
  const [year, setYear] = useState(WORLD_CUP_MEN[WORLD_CUP_MEN.length - 1].year);
  const edition = WORLD_CUP_MEN.find((e) => e.year === year) ?? WORLD_CUP_MEN[WORLD_CUP_MEN.length - 1];

  return (
    <div className="rounded-xl border border-white/10 bg-midnight/60 p-6">
      <label className="flex flex-col gap-2 text-sm text-gray-300">
        Elige una edición
        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="w-fit rounded-md bg-night px-3 py-2 text-gray-100 ring-1 ring-white/20"
        >
          {[...WORLD_CUP_MEN].reverse().map((e) => (
            <option key={e.year} value={e.year}>{e.year}</option>
          ))}
        </select>
      </label>
      <dl className="mt-6 grid gap-4 sm:grid-cols-3">
        <div>
          <dt className="text-sm text-gray-500">Sede</dt>
          <dd className="text-lg font-semibold">{edition.host}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">Campeón</dt>
          <dd className="text-lg font-semibold text-gold">{edition.champion}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">Subcampeón</dt>
          <dd className="text-lg font-semibold">{edition.runnerUp}</dd>
        </div>
      </dl>
      <p className="mt-4 text-xs text-gray-500">Fuente: FIFA (fifa.com). Datos de la Copa Mundial masculina.</p>
    </div>
  );
}
