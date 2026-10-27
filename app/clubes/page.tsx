import { CLUBS } from "../data";
import ClubFilter from "./ClubFilter";

export const metadata = { title: "Clubes históricos | FOOTBALL UNIVERSE" };

export default function ClubesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gold">Los gigantes del fútbol</h1>
      <p className="mt-3 max-w-3xl text-gray-300">
        Clubes de Europa, Sudamérica y otros continentes. No existe un ranking único de grandeza: títulos, influencia,
        continuidad y legado miden cosas distintas, y las comparaciones entre épocas tienen limitaciones.
      </p>
      <div className="mt-8">
        <ClubFilter clubs={CLUBS} />
      </div>
    </main>
  );
}
