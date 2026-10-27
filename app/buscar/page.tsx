import SearchBox from "./SearchBox";

export const metadata = { title: "Buscar | FOOTBALL UNIVERSE" };

export default function BuscarPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gold">Buscar</h1>
      <p className="mt-3 text-gray-300">Encuentra clubes, leyendas, competiciones y hitos de la historia.</p>
      <div className="mt-8">
        <SearchBox />
      </div>
    </main>
  );
}
