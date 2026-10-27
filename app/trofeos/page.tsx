export const metadata = { title: "Sala de trofeos | FOOTBALL UNIVERSE" };

type Trophy = {
  name: string;
  competition: string;
  facts: string[];
  source: { name: string; url: string };
};

// Solo datos con fuente. Las medidas, diseños y ediciones detalladas aún no están verificadas
// y no se muestran.
const TROPHIES: Trophy[] = [
  {
    name: "Copa del Mundo de la FIFA",
    competition: "Copa Mundial de la FIFA (masculina)",
    facts: [
      "Trofeo actual en uso desde 1974. Lo diseñó el escultor italiano Silvio Gazzaniga.",
      "Es de oro de 18 quilates. Los campeones reciben una réplica y el original queda en la FIFA.",
      "El nombre de cada campeón se graba en la base.",
    ],
    source: { name: "FIFA", url: "https://www.fifa.com" },
  },
  {
    name: "Copa Jules Rimet",
    competition: "Copa Mundial de la FIFA (masculina), 1930-1970",
    facts: [
      "Trofeo original del Mundial. Se entregó desde 1930 y lleva el nombre del presidente de la FIFA Jules Rimet.",
      "Brasil lo ganó en 1970 por tercera vez y se quedó con él de forma definitiva.",
    ],
    source: { name: "FIFA", url: "https://www.fifa.com" },
  },
  {
    name: "Copa de Europa / UEFA Champions League",
    competition: "UEFA Champions League",
    facts: [
      "La competición se llamó Copa de Europa hasta 1992.",
      "Diseño, medidas y cambios a lo largo del tiempo: pendientes de verificar con la UEFA.",
    ],
    source: { name: "UEFA", url: "https://www.uefa.com" },
  },
];

export default function TrofeosPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gold">Sala de trofeos</h1>
      <p className="mt-3 max-w-3xl text-gray-300">
        Los trofeos más importantes del fútbol. Cada ficha tiene su fuente. Las imágenes se añadirán cuando tengamos
        fotografías con licencia.
      </p>

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {TROPHIES.map((t) => (
          <li key={t.name}>
            <article className="h-full rounded-xl border border-white/10 bg-midnight/60 p-6">
              <h2 className="text-2xl font-bold">{t.name}</h2>
              <p className="mt-1 text-sm text-gray-400">{t.competition}</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-300">
                {t.facts.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                Fuente: <a className="underline" href={t.source.url}>{t.source.name}</a>
              </p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
