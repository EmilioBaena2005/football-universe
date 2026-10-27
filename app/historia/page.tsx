import { TIMELINE } from "../data";

export const metadata = { title: "Historia del fútbol | FOOTBALL UNIVERSE" };

const ERAS = [
  { name: "Los orígenes", text: "Antiguas civilizaciones jugaban con pelota, pero con reglas muy distintas al fútbol moderno. Mezclaban la fuerza, la religión y el juego." },
  { name: "El nacimiento del fútbol moderno", text: "En Inglaterra, en el siglo XIX, las escuelas y clubes fijaron reglas comunes. La FA se fundó en 1863 y redactó las primeras reglas de asociación." },
  { name: "La expansión internacional", text: "Marinos, estudiantes e inmigrantes llevaron el fútbol a Europa, Sudamérica, África y Asia en pocas décadas." },
  { name: "El nacimiento de la FIFA", text: "La FIFA se fundó en París en 1904 para coordinar las federaciones nacionales y organizar el deporte a escala internacional." },
  { name: "Los primeros Mundiales", text: "Uruguay organizó el primer Mundial en 1930 y lo ganó. Fue el primer gran torneo entre selecciones." },
  { name: "La evolución táctica", text: "Del WM de los años 30 al catenaccio italiano, el fútbol total holandés, el 4-4-2 y la presión alta de hoy." },
  { name: "La era de la televisión y la globalización", text: "La televisión, los fichajes internacionales, la sentencia Bosman y las competiciones continentales transformaron el negocio del fútbol." },
  { name: "El fútbol contemporáneo", text: "El VAR, el análisis de datos, la preparación física y el crecimiento del fútbol femenino marcan la etapa actual." },
];

export default function HistoriaPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gold">Historia del fútbol</h1>
      <p className="mt-3 text-gray-300">
        Del juego de pelota a la industria global. Cada etapa tiene su contexto. Las fechas proceden de FIFA, UEFA y la FA.
      </p>

      <figure className="mt-8 overflow-hidden rounded-xl border border-white/10">
        <img src="../fotos/maracana-2022.jpg" alt="Vista aérea del estadio del Maracanã en Río de Janeiro" className="h-auto w-full object-cover" />
        <figcaption className="px-4 py-2 text-xs text-gray-500">
          Foto: autor del archivo, Wikimedia Commons · CC BY-SA 3.0 (declarada por el autor; pendiente de confirmar en la página del archivo)
        </figcaption>
      </figure>

      <h2 className="mt-12 text-2xl font-bold">Etapas</h2>
      <ol className="mt-4 space-y-6">
        {ERAS.map((era, i) => (
          <li key={era.name}>
            <details className="group rounded-xl border border-white/10 bg-midnight/60 p-5" open={i === 0}>
              <summary className="cursor-pointer text-lg font-semibold text-gold focus-visible:outline-2 focus-visible:outline-gold">
                {i + 1}. {era.name}
              </summary>
              <p className="mt-3 text-gray-300">{era.text}</p>
            </details>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 text-2xl font-bold">Cronología</h2>
      <ol className="mt-4 space-y-4 border-l border-gold/40 pl-6">
        {TIMELINE.map((e) => (
          <li key={e.year + e.title}>
            <details className="rounded-lg bg-midnight/40 p-3">
              <summary className="cursor-pointer">
                <span className="font-bold text-gold">{e.year}</span>{" "}
                <span className="font-semibold">{e.title}</span>{" "}
                <span className="text-xs text-gray-500">({e.era})</span>
              </summary>
              <p className="mt-2 text-sm text-gray-300">{e.text}</p>
            </details>
          </li>
        ))}
      </ol>
    </main>
  );
}
