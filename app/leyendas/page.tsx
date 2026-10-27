import { LEGENDS } from "../data";

export const metadata = { title: "Leyendas del fútbol | FOOTBALL UNIVERSE" };

export default function LeyendasPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gold">Leyendas del fútbol</h1>
      <p className="mt-3 max-w-3xl text-gray-300">
        Jugadores de distintas épocas y países. Comparar a jugadores de épocas distintas es difícil: cambian las reglas, las
        competiciones y los estilos de juego.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LEGENDS.map((l) => (
          <li key={l.id}>
            <article className="h-full rounded-xl border border-white/10 bg-midnight/60 p-5 transition hover:-translate-y-1 hover:border-gold/60">
              <h2 className="text-lg font-bold">{l.name}</h2>
              <p className="text-sm text-gray-400">{l.nationality} · {l.position} · {l.era}</p>
              <p className="mt-2 text-sm text-gray-500">Clubes: {l.clubs.join(", ")}</p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-300">
                {l.facts.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <p className="mt-3 text-xs text-gray-500">
                Fuente: <a className="underline" href={l.source.url}>{l.source.name}</a>
              </p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
