import Charts from "./Charts";

export const metadata = { title: "Estadísticas | FOOTBALL UNIVERSE" };

export default function EstadisticasPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gold">Estadísticas del fútbol</h1>
      <p className="mt-3 max-w-3xl text-gray-300">
        Gráficos con datos verificados. Cada uno indica qué mide, qué periodo cubre y de dónde procede.
      </p>
      <div className="mt-8">
        <Charts />
      </div>
    </main>
  );
}
