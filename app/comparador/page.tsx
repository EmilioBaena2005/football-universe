import Comparator from "./Comparator";

export const metadata = { title: "Comparador de clubes | FOOTBALL UNIVERSE" };

export default function ComparadorPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gold">Comparador de clubes</h1>
      <p className="mt-3 max-w-3xl text-gray-300">
        Compara clubes por criterio. No hay un ganador absoluto: cada criterio mide algo distinto.
      </p>
      <div className="mt-8">
        <Comparator />
      </div>
    </main>
  );
}
