import CountryMap from "./CountryMap";

export const metadata = { title: "Mapa del fútbol | FOOTBALL UNIVERSE" };

export default function MapaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gold">Mapa mundial del fútbol</h1>
      <p className="mt-3 max-w-3xl text-gray-300">
        Elige un país para ver sus clubes y leyendas de la base de datos. La cobertura es parcial y crece con cada fase.
      </p>
      <div className="mt-8">
        <CountryMap />
      </div>
    </main>
  );
}
