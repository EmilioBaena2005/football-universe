import { SOURCES } from "../data";

export const metadata = { title: "Fuentes y metodología | FOOTBALL UNIVERSE" };

export default function FuentesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gold">Fuentes y metodología</h1>

      <h2 className="mt-8 text-2xl font-bold">Fuentes oficiales</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
        {Object.values(SOURCES).map((s) => (
          <li key={s.url}>
            <a className="underline hover:text-gold" href={s.url}>{s.name}</a>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-2xl font-bold">Cómo trabajamos</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
        <li>Cada dato lleva la fuente oficial que lo respalda y, cuando cambia con el tiempo, una fecha de corte.</li>
        <li>No inventamos estadísticas. Si un dato no está verificado, no se publica.</li>
        <li>Los títulos y récords dependen del criterio: nacional o internacional, oficial o amistoso. La web lo indica cuando aplica.</li>
        <li>Las comparaciones entre épocas tienen límites: cambian reglas, formatos y calendarios.</li>
        <li>Los escudos, fotos y marcas pertenecen a sus titulares. Sin licencia, no se usan.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-bold">Pendiente</h2>
      <p className="mt-3 text-gray-300">
        Palmarés completos por club, mapa mundial, rivalidades, noticias en vivo y estadísticas de máximos goleadores
        todavía no están verificados y no se muestran.
      </p>
    </main>
  );
}
