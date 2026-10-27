export const metadata = { title: "Top de leyendas | FOOTBALL UNIVERSE" };

// No hay un ranking objetivo de los mejores jugadores. Aquí cada lista usa un único criterio, dicho explícitamente.
// Los datos se limitan a jugadores de la base de datos del proyecto. No es una lista completa de la historia.

const CHAMPIONS_AS_PLAYER = [
  { name: "Alfredo Di Stéfano", count: 5, years: "1956-1960, con el Real Madrid" },
  { name: "Cristiano Ronaldo", count: 5, years: "2008 (Manchester United); 2014, 2016, 2017, 2018 (Real Madrid)" },
  { name: "Xavi Hernández", count: 4, years: "2006, 2009, 2011, 2015, con el FC Barcelona" },
  { name: "Andrés Iniesta", count: 4, years: "2006, 2009, 2011, 2015, con el FC Barcelona" },
  { name: "Franz Beckenbauer", count: 3, years: "1974, 1975, 1976, con el Bayern de Múnich" },
  { name: "Johan Cruyff", count: 3, years: "1971, 1972, 1973, con el Ajax" },
  { name: "Ronaldinho", count: 1, years: "2006, con el FC Barcelona" },
];

const BALLON_DOR = [
  { name: "Lionel Messi", count: 8, years: "2009, 2010, 2011, 2012, 2015, 2019, 2021, 2023" },
  { name: "Cristiano Ronaldo", count: 5, years: "2008, 2013, 2014, 2016, 2017" },
  { name: "Johan Cruyff", count: 3, years: "1971, 1973, 1974" },
  { name: "Franz Beckenbauer", count: 2, years: "1972, 1976" },
  { name: "Ronaldo Nazário", count: 2, years: "1997, 2002" },
  { name: "Alfredo Di Stéfano", count: 2, years: "1957, 1959" },
  { name: "Zinedine Zidane", count: 1, years: "1998" },
  { name: "Ronaldinho", count: 1, years: "2005" },
  { name: "Eusébio", count: 1, years: "1965" },
];

const WORLD_CUPS_AS_PLAYER = [
  { name: "Pelé", count: 3, years: "1958, 1962, 1970" },
  { name: "Garrincha", count: 2, years: "1958, 1962" },
  { name: "Ronaldo Nazário", count: 2, years: "1994, 2002" },
  { name: "Maradona", count: 1, years: "1986" },
  { name: "Lionel Messi", count: 1, years: "2022" },
  { name: "Zinedine Zidane", count: 1, years: "1998" },
  { name: "Franz Beckenbauer", count: 1, years: "1974 (como capitán)" },
  { name: "Xavi Hernández", count: 1, years: "2010" },
  { name: "Andrés Iniesta", count: 1, years: "2010" },
];

function Ranking({ title, criterion, rows, source }: { title: string; criterion: string; rows: { name: string; count: number; years: string }[]; source: string }) {
  return (
    <section className="rounded-xl border border-white/10 bg-midnight/60 p-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-1 text-sm text-gray-400">Criterio: {criterion}</p>
      <ol className="mt-4 space-y-2">
        {rows.map((r) => (
          <li key={r.name} className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-2">
            <span className="font-semibold">{r.name}</span>
            <span className="text-right text-sm text-gray-300">
              <span className="font-bold text-gold">{r.count}</span> · {r.years}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs text-gray-500">Fuente: {source}</p>
    </section>
  );
}

export default function TopPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gold">Top de leyendas por criterio</h1>
      <p className="mt-3 text-gray-300">
        Estas listas usan un solo criterio cada una. No suman puntos ni dan un ganador general. Comparar jugadores de
        épocas, posiciones y competiciones distintas no es directo.
      </p>

      <div className="mt-10 grid gap-6">
        <Ranking
          title="Copas de Europa ganadas como jugador"
          criterion="Número de Copas de Europa / Champions League ganadas como jugador de plantilla que disputó la competición."
          rows={CHAMPIONS_AS_PLAYER}
          source="UEFA (uefa.com). Recuento pendiente de contrastar con uefa.com antes de darlo por definitivo."
        />
        <Ranking
          title="Balones de Oro masculinos"
          criterion="Número de Balones de Oro ganados (premio individual de France Football)."
          rows={BALLON_DOR}
          source="Wikipedia (Ballon d'Or) y ESPN, fecha de corte octubre de 2026. Contrastar con France Football."
        />
        <Ranking
          title="Mundiales ganados como jugador"
          criterion="Número de Copas del Mundo de la FIFA ganadas como jugador de la plantilla campeona."
          rows={WORLD_CUPS_AS_PLAYER}
          source="FIFA (fifa.com). Lista parcial: solo jugadores de la base de datos del proyecto."
        />
      </div>

      <p className="mt-8 text-sm text-gray-400">
        Otros criterios posibles, como títulos de clubes, goles o influencia, no están incluidos porque no tienen una
        fuente verificada para todos los jugadores de la lista.
      </p>
    </main>
  );
}
