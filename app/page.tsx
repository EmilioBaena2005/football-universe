import Link from "next/link";
import Counter from "./components/Counter";
import { CLUBS, LEGENDS, COMPETITIONS, TIMELINE, SOURCES } from "./data";

const STATS = [
  { value: 22, label: "Ediciones de la Copa Mundial masculina (1930-2022)", source: SOURCES.fifa, date: "Corte: 2022" },
  { value: 32, label: "Selecciones en la fase final del Mundial 2022", source: SOURCES.fifa, date: "Corte: 2022" },
  { value: 15, label: "Copas de Europa del Real Madrid, el club con más títulos", source: SOURCES.uefa, date: "Corte: octubre 2026" },
];

const MOMENTS = [
  "Maracanazo: Uruguay gana en Río de Janeiro en 1950.",
  "Mano de Dios y gol del siglo: Argentina, México 1986.",
  "Milagro de Berna: Alemania Occidental gana el Mundial 1954.",
  "Final de Estambul: Liverpool remonta al AC Milan en 2005.",
];

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center gap-6 overflow-hidden px-4 py-20 text-center">
        <div aria-hidden className="absolute inset-0 -z-20 overflow-hidden">
          <img src="fotos/bombonera-noche.jpg" alt="" className="h-full w-full object-cover opacity-40" />
        </div>
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-night/40 via-night/80 to-night" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-pitch/30 to-transparent" />
        <p className="absolute bottom-2 right-3 text-[10px] text-gray-500">
          Foto: Ministerio de Cultura de la Nación, Wikimedia Commons · CC BY-SA 2.0
        </p>
        <svg aria-hidden viewBox="0 0 800 500" className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-auto -translate-x-1/2 -translate-y-1/2 text-white/[0.06]" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="20" y="20" width="760" height="460" rx="4" />
          <line x1="400" y1="20" x2="400" y2="480" />
          <circle cx="400" cy="250" r="70" />
          <circle cx="400" cy="250" r="3" fill="currentColor" />
          <rect x="20" y="130" width="120" height="240" />
          <rect x="660" y="130" width="120" height="240" />
        </svg>
        <h1 className="fade-up text-5xl font-extrabold tracking-tight text-gold md:text-7xl">FOOTBALL UNIVERSE</h1>
        <p className="fade-up-delay text-xl text-gray-200 md:text-2xl">Más de un siglo de pasión. Miles de historias. Un solo deporte.</p>
        <p className="fade-up-delay-2 max-w-2xl text-gray-400">
          Explora la evolución del fútbol, los clubes más históricos, sus grandes jugadores y los momentos que cambiaron el deporte.
        </p>
        <div className="fade-up-delay-2 flex flex-wrap justify-center gap-4">
          <Link href="/historia/" className="rounded-lg bg-gold px-6 py-3 font-semibold text-night hover:brightness-110 focus-visible:outline-2 focus-visible:outline-white">
            Explorar la historia
          </Link>
          <Link href="/clubes/" className="rounded-lg border border-gold px-6 py-3 font-semibold text-gold hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-white">
            Descubrir los grandes clubes
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-3xl font-bold">El fútbol en cifras</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-midnight/60 p-6">
              <p className="text-5xl font-extrabold text-gold"><Counter value={s.value} /></p>
              <p className="mt-2 text-gray-300">{s.label}</p>
              <p className="mt-3 text-xs text-gray-500">
                Fuente: <a className="underline" href={s.source.url}>{s.source.name}</a> · {s.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-3xl font-bold">Clubes históricos destacados</h2>
          <Link href="/clubes/" className="text-gold underline">Ver todos</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CLUBS.slice(0, 4).map((c) => (
            <article key={c.id} className="card-premium rounded-xl p-5">
              <h3 className="font-bold">{c.name}</h3>
              <p className="text-sm text-gray-400">{c.city}, {c.country}</p>
              <p className="mt-2 text-sm text-gray-300">{c.highlight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-3xl font-bold">Grandes leyendas</h2>
          <Link href="/leyendas/" className="text-gold underline">Ver todas</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LEGENDS.slice(0, 4).map((l) => (
            <article key={l.id} className="card-premium rounded-xl p-5">
              <h3 className="font-bold">{l.name}</h3>
              <p className="text-sm text-gray-400">{l.nationality} · {l.position}</p>
              <p className="mt-2 text-sm text-gray-300">{l.facts[0]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-3xl font-bold">Competiciones legendarias</h2>
        <div className="flex flex-wrap gap-3">
          {COMPETITIONS.map((c) => (
            <Link key={c.id} href="/competiciones/" className="rounded-full border border-white/15 px-4 py-2 text-sm hover:border-gold hover:text-gold">
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-3xl font-bold">Momentos inolvidables</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {MOMENTS.map((m) => (
            <li key={m} className="rounded-lg border-l-4 border-pitch bg-midnight/60 p-4 text-gray-200">{m}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-3xl font-bold">Cronología</h2>
        <ol className="space-y-3 border-l border-gold/40 pl-6">
          {TIMELINE.map((e) => (
            <li key={e.year + e.title}>
              <span className="font-bold text-gold">{e.year}</span> · <span className="font-semibold">{e.title}</span>
              <p className="text-sm text-gray-400">{e.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
