export const metadata = { title: "Grandes rivalidades | FOOTBALL UNIVERSE" };

type Rivalry = {
  name: string;
  context: string;
  matches: string[];
  h2h: string;
};

// Solo se listan partidos que se pueden verificar con fuentes oficiales.
// Las estadísticas de enfrentamientos directos aún no están verificadas: se marcan como pendientes.
const RIVALRIES: Rivalry[] = [
  {
    name: "Real Madrid contra FC Barcelona (El Clásico)",
    context: "Dos de los clubes más laureados de España. La rivalidad mezcla competición deportiva con diferencias históricas, culturales y políticas entre Madrid y Cataluña.",
    matches: ["Pendiente de verificar partidos emblemáticos con fuente oficial."],
    h2h: "Pendiente de verificar (fecha de corte por definir).",
  },
  {
    name: "Boca Juniors contra River Plate (Superclásico)",
    context: "Dos clubes de Buenos Aires con seguidores en toda Argentina. Es uno de los enfrentamientos con más carga emocional del fútbol sudamericano.",
    matches: ["Final de la Copa Libertadores de 2018: River Plate fue campeón."],
    h2h: "Pendiente de verificar (fecha de corte por definir).",
  },
  {
    name: "Liverpool contra Manchester United",
    context: "Dos de los clubes ingleses más laureados, de ciudades industriales del noroeste de Inglaterra. La rivalidad es sobre todo deportiva y de identidad regional.",
    matches: ["Pendiente de verificar partidos emblemáticos con fuente oficial."],
    h2h: "Pendiente de verificar (fecha de corte por definir).",
  },
  {
    name: "AC Milan contra Inter de Milán (Derby della Madonnina)",
    context: "Los dos clubes de Milán comparten estadio, San Siro. El derbi lleva el nombre de la estatua de la Madonnina, símbolo de la ciudad.",
    matches: ["Pendiente de verificar partidos emblemáticos con fuente oficial."],
    h2h: "Pendiente de verificar (fecha de corte por definir).",
  },
  {
    name: "Celtic contra Rangers (Old Firm)",
    context: "Dos clubes de Glasgow. La rivalidad tiene una fuerte dimensión religiosa, social y política, además de la deportiva.",
    matches: ["Pendiente de verificar partidos emblemáticos con fuente oficial."],
    h2h: "Pendiente de verificar (fecha de corte por definir).",
  },
  {
    name: "Brasil contra Argentina",
    context: "Las dos selecciones más fuertes de Sudamérica en la historia de los Mundiales. Su rivalidad es sobre todo de selecciones.",
    matches: ["Pendiente de verificar partidos emblemáticos con fuente oficial."],
    h2h: "Pendiente de verificar (fecha de corte por definir).",
  },
  {
    name: "Alemania contra Italia",
    context: "Enfrentamientos de alto nivel en Mundiales, con varias semifinales históricas.",
    matches: [
      "Semifinal del Mundial 1970 (México): Italia ganó 4-3 tras la prórroga.",
      "Semifinal del Mundial 2006 (Alemania): Italia ganó 2-0.",
    ],
    h2h: "Pendiente de verificar (fecha de corte por definir).",
  },
];

export default function RivalidadesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gold">Grandes rivalidades y partidos históricos</h1>
      <p className="mt-3 max-w-3xl text-gray-300">
        Cada rivalidad tiene su contexto propio. Los enfrentamientos directos y sus estadísticas se publicarán cuando
        estén verificados con fuente oficial. No se presentan cifras sin comprobar.
      </p>

      <ul className="mt-10 space-y-6">
        {RIVALRIES.map((r) => (
          <li key={r.name}>
            <article className="rounded-xl border border-white/10 bg-midnight/60 p-6">
              <h2 className="text-2xl font-bold">{r.name}</h2>
              <p className="mt-2 text-gray-300">{r.context}</p>

              <h3 className="mt-4 font-semibold text-gold">Partidos emblemáticos</h3>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-300">
                {r.matches.map((m) => <li key={m}>{m}</li>)}
              </ul>

              <h3 className="mt-4 font-semibold text-gold">Enfrentamientos directos</h3>
              <p className="mt-2 text-sm text-gray-400">{r.h2h}</p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
