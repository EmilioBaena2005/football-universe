import { COMPETITIONS } from "../data";
import MundialPicker from "./MundialPicker";

export const metadata = { title: "Competiciones | FOOTBALL UNIVERSE" };

export default function CompeticionesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gold">Competiciones legendarias</h1>
      <p className="mt-3 max-w-3xl text-gray-300">
        Cada torneo tiene su historia y su formato. Los formatos han cambiado con el tiempo, así que compara ediciones con cuidado.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Mundiales por año</h2>
      <div className="mt-4">
        <MundialPicker />
      </div>

      <h2 className="mt-12 text-2xl font-bold">Torneos</h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {COMPETITIONS.map((c) => (
          <li key={c.id} className="rounded-xl border border-white/10 bg-midnight/60 p-5">
            <h3 className="font-bold">{c.name}</h3>
            <p className="text-sm text-gray-400">Organiza: {c.organizer} · Creada en {c.created}</p>
            <p className="mt-2 text-sm text-gray-300">{c.note}</p>
            <p className="mt-3 text-xs text-gray-500">
              Fuente: <a className="underline" href={c.source.url}>{c.source.name}</a>
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
