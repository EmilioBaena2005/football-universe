// Estadísticas de clubes para el comparador.
// Regla: null = dato no verificado en esta versión. Nunca se rellena con estimaciones.
// Fecha de corte: octubre de 2026. La Copa Libertadores 2026 sigue en curso (final prevista el 28-nov-2026),
// así que sus cifras son las de la edición 2025.
// Fuentes: UEFA (Champions League), CONMEBOL (Libertadores), federaciones y liga nacional (ver app/fuentes).
// Títulos de liga = total de campeonatos de primera división, incluidos los anteriores a la Premier League o a LaLiga
// cuando el club los conserva en su palmarés oficial.

export const STATS_CUTOFF = "octubre de 2026";

export type ClubStats = {
  id: string;
  championsLeague: number | null; // Copas de Europa / Champions League (UEFA)
  libertadores: number | null; // Copa Libertadores (CONMEBOL), solo clubes sudamericanos
  leagueTitles: number | null; // Títulos de liga nacional de primera división
  strengths: string;
};

export const CLUB_STATS: ClubStats[] = [
  { id: "real-madrid", championsLeague: 15, libertadores: null, leagueTitles: 36, strengths: "Récord de Copas de Europa y títulos de liga." },
  { id: "barcelona", championsLeague: 5, libertadores: null, leagueTitles: 29, strengths: "Referente de juego de posesión. Campeón de LaLiga 2025-26." },
  { id: "atletico", championsLeague: 0, libertadores: null, leagueTitles: 11, strengths: "Dos finales de Champions en la década de 2010, sin título europeo." },
  { id: "athletic", championsLeague: 0, libertadores: null, leagueTitles: 8, strengths: "Identidad vasca en la plantilla. Sin título europeo." },
  { id: "man-utd", championsLeague: 3, libertadores: null, leagueTitles: 20, strengths: "Tres Copas de Europa y 20 ligas, la cifra compartida como récord inglés." },
  { id: "liverpool", championsLeague: 6, libertadores: null, leagueTitles: 20, strengths: "Seis Copas de Europa y 20 ligas, la cifra compartida como récord inglés." },
  { id: "arsenal", championsLeague: 0, libertadores: null, leagueTitles: 14, strengths: "Campeón de la Premier League 2025-26 tras 22 años. Finalista de la Champions 2026, sin título europeo." },
  { id: "chelsea", championsLeague: 2, libertadores: null, leagueTitles: 6, strengths: "Dos Champions y seis ligas." },
  { id: "man-city", championsLeague: 1, libertadores: null, leagueTitles: 10, strengths: "Champions en 2023 y diez ligas, incluidas dos anteriores a la Premier League." },
  { id: "milan", championsLeague: 7, libertadores: null, leagueTitles: 19, strengths: "Siete Copas de Europa y 19 ligas." },
  { id: "inter", championsLeague: 3, libertadores: null, leagueTitles: 21, strengths: "Triplete en 2010 y 21 ligas." },
  { id: "juventus", championsLeague: 2, libertadores: null, leagueTitles: 36, strengths: "Récord de títulos de la Serie A." },
  { id: "bayern", championsLeague: 6, libertadores: null, leagueTitles: 34, strengths: "Seis Copas de Europa y 34 ligas alemanas." },
  { id: "dortmund", championsLeague: 1, libertadores: null, leagueTitles: 8, strengths: "Una Copa de Europa, 1997, y ocho ligas alemanas." },
  { id: "psg", championsLeague: 2, libertadores: null, leagueTitles: 14, strengths: "Campeón de la Champions 2025 y 2026, y 14 ligas francesas." },
  { id: "marsella", championsLeague: 1, libertadores: null, leagueTitles: 9, strengths: "Primera Champions francesa en 1993 y nueve ligas." },
  { id: "boca", championsLeague: null, libertadores: 6, leagueTitles: null, strengths: "Seis Copas Libertadores." },
  { id: "river", championsLeague: null, libertadores: 4, leagueTitles: null, strengths: "Cuatro Copas Libertadores." },
  { id: "santos", championsLeague: null, libertadores: 3, leagueTitles: null, strengths: "Tres Copas Libertadores y la época de Pelé." },
  { id: "flamengo", championsLeague: null, libertadores: 3, leagueTitles: null, strengths: "Tres Copas Libertadores: 1981, 2019 y 2025." },
  { id: "sao-paulo", championsLeague: null, libertadores: 3, leagueTitles: null, strengths: "Tres Copas Libertadores." },
  { id: "penarol", championsLeague: null, libertadores: 5, leagueTitles: null, strengths: "Cinco Copas Libertadores, incluida la primera de 1960." },
  { id: "nacional", championsLeague: null, libertadores: 3, leagueTitles: null, strengths: "Tres Copas Libertadores." },
  { id: "independiente", championsLeague: null, libertadores: 7, leagueTitles: null, strengths: "Siete Copas Libertadores." },
];
