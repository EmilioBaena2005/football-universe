import Quiz from "./Quiz";

export const metadata = { title: "Quiz de fútbol | FOOTBALL UNIVERSE" };

export default function QuizPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gold">Quiz de fútbol</h1>
      <p className="mt-3 text-gray-300">Preguntas de historia, clubes, Mundiales y competiciones. Cada respuesta tiene su explicación.</p>
      <div className="mt-8">
        <Quiz />
      </div>
    </main>
  );
}
