// Estadísticas de clubes para el comparador.
// Regla: null = dato no verificado en esta versión. Nunca se rellena con estimaciones.
// Fecha de corte de todas las cifras: 2025. Fuentes: UEFA (Champions League) y CONMEBOL (Libertadores).
// Los títulos de liga nacional son parciales: solo se incluyen los que se han verificado.

export const STATS_CUTOFF = "2025";

export type ClubStats = {
  id: string;
  championsLeague: number | null; // Copas de Europa / Champions League (UEFA)
  libertadores: number | null; // Copa Libertadores (CONMEBOL), solo clubes sudamericanos
  leagueTitles: number | null; // Títulos de liga nacional, solo si está verificado
  strengths: string;
};

export const CLUB_STATS: ClubStats[] = [
  { id: "real-madrid", championsLeague: 15, libertadores: null, leagueTitles: 36, strengths: "Récord de Copas de Europa y títulos de liga." },
  { id: "barcelona", championsLeague: 5, libertadores: null, leagueTitles: null, strengths: "Referente de juego de posesión. Liga pendiente de verificar." },
  { id: "atletico", championsLeague: 0, libertadores: null, leagueTitles: 11, strengths: "Dos finales de Champions en la década de 2010, sin título europeo." },
  { id: "athletic", championsLeague: 0, libertadores: null, leagueTitles: 8, strengths: "Identidad vasca en la plantilla. Sin título europeo." },
  { id: "man-utd", championsLeague: 3, libertadores: null, leagueTitles: 20, strengths: "Tres Copas de Europa y gran número de ligas." },
  { id: "liverpool", championsLeague: 6, libertadores: null, leagueTitles: null, strengths: "Seis Copas de Europa. Liga pendiente de verificar." },
  { id: "arsenal", championsLeague: 0, libertadores: null, leagueTitles: 13, strengths: "Liga nacional sólida. Sin Copa de Europa." },
  { id: "chelsea", championsLeague: 2, libertadores: null, leagueTitles: 6, strengths: "Dos Champions y varias ligas." },
  { id: "man-city", championsLeague: 1, libertadores: null, leagueTitles: null, strengths: "Champions en 2023. Liga pendiente de verificar." },
  { id: "milan", championsLeague: 7, libertadores: null, leagueTitles: 19, strengths: "Siete Copas de Europa y 19 ligas." },
  { id: "inter", championsLeague: 3, libertadores: null, leagueTitles: null, strengths: "Triplete en 2010. Liga pendiente de verificar." },
  { id: "juventus", championsLeague: 2, libertadores: null, leagueTitles: 36, strengths: "Récord de títulos de la Serie A." },
  { id: "bayern", championsLeague: 6, libertadores: null, leagueTitles: null, strengths: "Seis Copas de Europa. Liga pendiente de verificar." },
  { id: "dortmund", championsLeague: 1, libertadores: null, leagueTitles: null, strengths: "Una Copa de Europa, 1997. Liga pendiente de verificar." },
  { id: "psg", championsLeague: 1, libertadores: null, leagueTitles: null, strengths: "Primera Champions en 2025. Liga pendiente de verificar." },
  { id: "marsella", championsLeague: 1, libertadores: null, leagueTitles: null, strengths: "Primera Champions francesa en 1993. Liga pendiente de verificar." },
  { id: "boca", championsLeague: null, libertadores: 6, leagueTitles: null, strengths: "Seis Copas Libertadores." },
  { id: "river", championsLeague: null, libertadores: 4, leagueTitles: null, strengths: "Cuatro Copas Libertadores." },
  { id: "santos", championsLeague: null, libertadores: 3, leagueTitles: null, strengths: "Tres Copas Libertadores y la época de Pelé." },
  { id: "flamengo", championsLeague: null, libertadores: null, leagueTitles: null, strengths: "Palmarés pendiente de verificar." },
  { id: "sao-paulo", championsLeague: null, libertadores: 3, leagueTitles: null, strengths: "Tres Copas Libertadores." },
  { id: "penarol", championsLeague: null, libertadores: 5, leagueTitles: null, strengths: "Cinco Copas Libertadores, incluida la primera de 1960." },
  { id: "nacional", championsLeague: null, libertadores: 3, leagueTitles: null, strengths: "Tres Copas Libertadores." },
  { id: "independiente", championsLeague: null, libertadores: 7, leagueTitles: null, strengths: "Siete Copas Libertadores." },
];
