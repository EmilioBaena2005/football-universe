"use client";

import { useState } from "react";
import { QUIZ } from "../data";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [done, setDone] = useState(false);

  const question = QUIZ[index];

  function choose(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (i === question.answer) {
      const nextStreak = streak + 1;
      setScore((s) => s + 1);
      setStreak(nextStreak);
      setBestStreak((b) => Math.max(b, nextStreak));
    } else {
      setStreak(0);
    }
  }

  function next() {
    if (index + 1 >= QUIZ.length) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setPicked(null);
    }
  }

  function restart() {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setDone(false);
  }

  if (done) {
    return (
      <div className="rounded-xl border border-white/10 bg-midnight/60 p-6">
        <h2 className="text-2xl font-bold text-gold">Resultado final</h2>
        <p className="mt-3 text-lg">Aciertos: {score} de {QUIZ.length}</p>
        <p className="text-gray-300">Mejor racha: {bestStreak}</p>
        <button onClick={restart} className="mt-6 rounded-lg bg-gold px-5 py-2 font-semibold text-night focus-visible:outline-2 focus-visible:outline-white">
          Volver a jugar
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-midnight/60 p-6">
      <div className="mb-4 flex flex-wrap justify-between gap-2 text-sm text-gray-400">
        <span>Pregunta {index + 1} de {QUIZ.length} · {question.level}</span>
        <span>Puntos: {score} · Racha: {streak}</span>
      </div>
      <h2 className="text-xl font-semibold">{question.q}</h2>
      <div role="group" aria-label="Respuestas" className="mt-5 grid gap-3 sm:grid-cols-2">
        {question.options.map((opt, i) => {
          const isCorrect = i === question.answer;
          const stateClass =
            picked === null
              ? "border-white/20 hover:border-gold"
              : isCorrect
                ? "border-pitch bg-pitch/20"
                : i === picked
                  ? "border-red-500 bg-red-500/20"
                  : "border-white/10 opacity-60";
          return (
            <button
              key={opt}
              onClick={() => choose(i)}
              disabled={picked !== null}
              className={`rounded-lg border px-4 py-3 text-left transition focus-visible:outline-2 focus-visible:outline-gold ${stateClass}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="mt-5" aria-live="polite">
          <p className={picked === question.answer ? "font-semibold text-pitch" : "font-semibold text-red-400"}>
            {picked === question.answer ? "¡Acierto!" : "Fallaste."}
          </p>
          <p className="mt-1 text-gray-300">{question.explain}</p>
          <button onClick={next} className="mt-4 rounded-lg bg-gold px-5 py-2 font-semibold text-night focus-visible:outline-2 focus-visible:outline-white">
            {index + 1 >= QUIZ.length ? "Ver resultado" : "Siguiente"}
          </button>
        </div>
      )}
    </div>
  );
}
