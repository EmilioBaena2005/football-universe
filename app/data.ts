// Datos base de FOOTBALL UNIVERSE.
// Regla del proyecto: cada dato tiene fuente. Las cifras que cambian con el tiempo
// llevan fecha de corte. Lo que no está verificado no se incluye.

export type Source = { name: string; url: string };

export const SOURCES: Record<string, Source> = {
  fifa: { name: "FIFA", url: "https://www.fifa.com" },
  uefa: { name: "UEFA", url: "https://www.uefa.com" },
  conmebol: { name: "CONMEBOL", url: "https://www.conmebol.com" },
  fa: { name: "The Football Association", url: "https://www.thefa.com" },
};

export type Club = {
  id: string;
  name: string;
  country: string;
  city: string;
  founded: number;
  stadium: string;
  colors: string;
  highlight: string;
  continent: "Europa" | "Sudamérica" | "Norteamérica" | "África" | "Asia";
  source: Source;
};

export const CLUBS: Club[] = [
  { id: "real-madrid", name: "Real Madrid CF", country: "España", city: "Madrid", founded: 1902, stadium: "Santiago Bernabéu", colors: "Blanco", highlight: "Club con más Copas de Europa / Champions League (15 a fecha de corte octubre 2026).", continent: "Europa", source: SOURCES.uefa },
  { id: "barcelona", name: "FC Barcelona", country: "España", city: "Barcelona", founded: 1899, stadium: "Spotify Camp Nou", colors: "Blaugrana", highlight: "Escuela de juego de posesión en los años 2000 y 2010.", continent: "Europa", source: SOURCES.uefa },
  { id: "atletico", name: "Club Atlético de Madrid", country: "España", city: "Madrid", founded: 1903, stadium: "Cívitas Metropolitano", colors: "Rojiblanco", highlight: "Dos finales de Champions League en la década de 2010.", continent: "Europa", source: SOURCES.uefa },
  { id: "athletic", name: "Athletic Club", country: "España", city: "Bilbao", founded: 1898, stadium: "San Mamés", colors: "Rojiblanco", highlight: "Su política de fichajes prioriza a jugadores nacidos o formados en Euskadi.", continent: "Europa", source: SOURCES.uefa },
  { id: "man-utd", name: "Manchester United FC", country: "Inglaterra", city: "Manchester", founded: 1878, stadium: "Old Trafford", colors: "Rojo", highlight: "Tres Copas de Europa; la de 1999 con el triplete nacional.", continent: "Europa", source: SOURCES.uefa },
  { id: "liverpool", name: "Liverpool FC", country: "Inglaterra", city: "Liverpool", founded: 1892, stadium: "Anfield", colors: "Rojo", highlight: "Seis Copas de Europa, entre ellas la de 1977 y la de 2005.", continent: "Europa", source: SOURCES.uefa },
  { id: "arsenal", name: "Arsenal FC", country: "Inglaterra", city: "Londres", founded: 1886, stadium: "Emirates Stadium", colors: "Rojo y blanco", highlight: "Invicto en la Premier League 2003-04.", continent: "Europa", source: SOURCES.fa },
  { id: "chelsea", name: "Chelsea FC", country: "Inglaterra", city: "Londres", founded: 1905, stadium: "Stamford Bridge", colors: "Azul", highlight: "Campeón de la Champions League en 2012 y 2021.", continent: "Europa", source: SOURCES.uefa },
  { id: "man-city", name: "Manchester City FC", country: "Inglaterra", city: "Manchester", founded: 1880, stadium: "Etihad Stadium", colors: "Celeste", highlight: "Campeón de la Champions League en 2023.", continent: "Europa", source: SOURCES.uefa },
  { id: "milan", name: "AC Milan", country: "Italia", city: "Milán", founded: 1899, stadium: "San Siro (Giuseppe Meazza)", colors: "Rojo y negro", highlight: "Siete Copas de Europa.", continent: "Europa", source: SOURCES.uefa },
  { id: "inter", name: "Inter de Milán", country: "Italia", city: "Milán", founded: 1908, stadium: "San Siro (Giuseppe Meazza)", colors: "Azul y negro", highlight: "Triplete en 2010 con José Mourinho.", continent: "Europa", source: SOURCES.uefa },
  { id: "juventus", name: "Juventus FC", country: "Italia", city: "Turín", founded: 1897, stadium: "Allianz Stadium", colors: "Blanco y negro", highlight: "Récord de títulos de la Serie A.", continent: "Europa", source: SOURCES.uefa },
  { id: "bayern", name: "FC Bayern München", country: "Alemania", city: "Múnich", founded: 1900, stadium: "Allianz Arena", colors: "Rojo", highlight: "Seis Copas de Europa.", continent: "Europa", source: SOURCES.uefa },
  { id: "dortmund", name: "Borussia Dortmund", country: "Alemania", city: "Dortmund", founded: 1909, stadium: "Signal Iduna Park", colors: "Amarillo y negro", highlight: "Su grada sur es la mayor de Europa.", continent: "Europa", source: SOURCES.uefa },
  { id: "psg", name: "Paris Saint-Germain", country: "Francia", city: "París", founded: 1970, stadium: "Parc des Princes", colors: "Azul y rojo", highlight: "Campeón de la Champions League en 2025 y 2026.", continent: "Europa", source: SOURCES.uefa },
  { id: "marsella", name: "Olympique de Marsella", country: "Francia", city: "Marsella", founded: 1899, stadium: "Stade Vélodrome", colors: "Blanco y azul celeste", highlight: "Primer club francés en ganar la Champions League (1993).", continent: "Europa", source: SOURCES.uefa },
  { id: "boca", name: "Boca Juniors", country: "Argentina", city: "Buenos Aires", founded: 1905, stadium: "La Bombonera", colors: "Azul y oro", highlight: "Varias Copas Libertadores; su estadio tiene las gradas pegadas al campo.", continent: "Sudamérica", source: SOURCES.conmebol },
  { id: "river", name: "River Plate", country: "Argentina", city: "Buenos Aires", founded: 1901, stadium: "Estadio Monumental", colors: "Blanco y rojo", highlight: "Campeón de la Copa Libertadores en 1986 y 2015, entre otras.", continent: "Sudamérica", source: SOURCES.conmebol },
  { id: "santos", name: "Santos FC", country: "Brasil", city: "Santos", founded: 1912, stadium: "Vila Belmiro", colors: "Blanco", highlight: "Club de Pelé durante gran parte de su carrera.", continent: "Sudamérica", source: SOURCES.conmebol },
  { id: "flamengo", name: "CR Flamengo", country: "Brasil", city: "Río de Janeiro", founded: 1895, stadium: "Maracanã", colors: "Rojo y negro", highlight: "Uno de los clubes con más aficionados de Brasil.", continent: "Sudamérica", source: SOURCES.conmebol },
  { id: "sao-paulo", name: "São Paulo FC", country: "Brasil", city: "São Paulo", founded: 1930, stadium: "Morumbi", colors: "Blanco, rojo y negro", highlight: "Campeón de la Copa Libertadores en 1992 y 1993.", continent: "Sudamérica", source: SOURCES.conmebol },
  { id: "penarol", name: "Club Atlético Peñarol", country: "Uruguay", city: "Montevideo", founded: 1891, stadium: "Estadio Campeón del Siglo", colors: "Negro y amarillo", highlight: "Campeón de la primera Copa Libertadores en 1960.", continent: "Sudamérica", source: SOURCES.conmebol },
  { id: "nacional", name: "Club Nacional de Football", country: "Uruguay", city: "Montevideo", founded: 1899, stadium: "Gran Parque Central", colors: "Blanco", highlight: "Campeón de la Copa Libertadores en 1971, 1980 y 1988.", continent: "Sudamérica", source: SOURCES.conmebol },
  { id: "independiente", name: "Club Atlético Independiente", country: "Argentina", city: "Avellaneda", founded: 1905, stadium: "Libertadores de América", colors: "Rojo", highlight: "Siete Copas Libertadores.", continent: "Sudamérica", source: SOURCES.conmebol },
];

export type Legend = {
  id: string;
  name: string;
  nationality: string;
  position: string;
  era: string;
  clubs: string[];
  facts: string[];
  source: Source;
  // Foto con licencia libre, solo si está verificada. Sin este campo se muestran iniciales.
  photo?: { file: string; credit: string; license: string; licenseUrl: string };
};

export const LEGENDS: Legend[] = [
  { id: "pele", name: "Pelé", nationality: "Brasil", position: "Delantero", era: "1956-1977", clubs: ["Santos FC", "New York Cosmos"], facts: ["Campeón del Mundo en 1958, 1962 y 1970."], source: SOURCES.fifa, photo: { file: "../fotos/pele.jpg", credit: "John Mathew Smith, Wikimedia Commons", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/" } },
  { id: "maradona", name: "Diego Armando Maradona", nationality: "Argentina", position: "Centrocampista", era: "1976-1997", clubs: ["Boca Juniors", "FC Barcelona", "SSC Napoli"], facts: ["Campeón del Mundo en 1986 con Argentina."], source: SOURCES.fifa, photo: { file: "../fotos/maradona.jpg", credit: "soccer.ru, Wikimedia Commons", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" } },
  { id: "messi", name: "Lionel Messi", nationality: "Argentina", position: "Delantero", era: "2004-presente", clubs: ["FC Barcelona", "Paris Saint-Germain", "Inter Miami"], facts: ["Campeón del Mundo en 2022 con Argentina."], source: SOURCES.fifa },
  { id: "cristiano", name: "Cristiano Ronaldo", nationality: "Portugal", position: "Delantero", era: "2002-presente", clubs: ["Sporting CP", "Manchester United", "Real Madrid", "Juventus"], facts: ["Cinco Copas de Europa: una con el Manchester United y cuatro con el Real Madrid."], source: SOURCES.uefa },
  { id: "di-stefano", name: "Alfredo Di Stéfano", nationality: "Argentina / España", position: "Delantero", era: "1945-1966", clubs: ["River Plate", "Real Madrid"], facts: ["Cinco Copas de Europa consecutivas con el Real Madrid (1956-1960)."], source: SOURCES.uefa },
  { id: "cruyff", name: "Johan Cruyff", nationality: "Países Bajos", position: "Delantero", era: "1964-1984", clubs: ["Ajax", "FC Barcelona"], facts: ["Subcampeón del Mundo en 1974 y 1978 con Países Bajos."], source: SOURCES.fifa },
  { id: "beckenbauer", name: "Franz Beckenbauer", nationality: "Alemania", position: "Defensa", era: "1964-1982", clubs: ["Bayern de Múnich", "New York Cosmos"], facts: ["Campeón del Mundo en 1974 como capitán."], source: SOURCES.fifa },
  { id: "zidane", name: "Zinedine Zidane", nationality: "Francia", position: "Centrocampista", era: "1988-2006", clubs: ["AS Cannes", "Girondins de Burdeos", "Juventus", "Real Madrid"], facts: ["Campeón del Mundo en 1998 con Francia."], source: SOURCES.fifa },
  { id: "ronaldo-n", name: "Ronaldo Nazário", nationality: "Brasil", position: "Delantero", era: "1993-2011", clubs: ["PSV", "FC Barcelona", "Inter", "Real Madrid"], facts: ["Campeón del Mundo en 1994 y 2002 con Brasil."], source: SOURCES.fifa },
  { id: "ronaldinho", name: "Ronaldinho", nationality: "Brasil", position: "Centrocampista", era: "1998-2015", clubs: ["Grêmio", "Paris Saint-Germain", "FC Barcelona", "AC Milan"], facts: ["Balón de Oro en 2005."], source: SOURCES.fifa },
  { id: "eusebio", name: "Eusébio", nationality: "Portugal", position: "Delantero", era: "1961-1975", clubs: ["Benfica"], facts: ["Balón de Oro en 1965."], source: SOURCES.uefa },
  { id: "garrincha", name: "Garrincha", nationality: "Brasil", position: "Extremo", era: "1953-1973", clubs: ["Botafogo"], facts: ["Campeón del Mundo en 1958 y 1962."], source: SOURCES.fifa },
  { id: "maldini", name: "Paolo Maldini", nationality: "Italia", position: "Defensa", era: "1985-2009", clubs: ["AC Milan"], facts: ["Jugó toda su carrera de club en el AC Milan."], source: SOURCES.uefa },
  { id: "xavi", name: "Xavi Hernández", nationality: "España", position: "Centrocampista", era: "1998-2015", clubs: ["FC Barcelona", "Al Sadd"], facts: ["Campeón del Mundo con España en 2010."], source: SOURCES.fifa },
  { id: "iniesta", name: "Andrés Iniesta", nationality: "España", position: "Centrocampista", era: "2002-2018", clubs: ["FC Barcelona", "Vissel Kobe"], facts: ["Marcó el gol de la final del Mundial 2010."], source: SOURCES.fifa },
  { id: "marta", name: "Marta", nationality: "Brasil", position: "Delantera", era: "1997-presente", clubs: ["Umeå IK", "Los Angeles Sol", "Orlando Pride"], facts: ["Seis Balones de Oro femeninos (2006-2010 y 2018)."], source: SOURCES.fifa },
  { id: "mia-hamm", name: "Mia Hamm", nationality: "Estados Unidos", position: "Delantera", era: "1987-2004", clubs: ["Washington Freedom"], facts: ["Campeona del Mundo femenina en 1991 y 1999."], source: SOURCES.fifa },
  { id: "birgit-prinz", name: "Birgit Prinz", nationality: "Alemania", position: "Delantera", era: "1994-2011", clubs: ["FSV Frankfurt", "1. FFC Frankfurt"], facts: ["Campeona del Mundo femenina en 2003 y 2007."], source: SOURCES.fifa },
];

export type Competition = {
  id: string;
  name: string;
  organizer: string;
  created: number;
  note: string;
  source: Source;
};

export const COMPETITIONS: Competition[] = [
  { id: "mundial", name: "Copa Mundial de la FIFA (masculina)", organizer: "FIFA", created: 1930, note: "Se disputa cada cuatro años. Primera edición: Uruguay 1930.", source: SOURCES.fifa },
  { id: "mundial-f", name: "Copa Mundial Femenina de la FIFA", organizer: "FIFA", created: 1991, note: "Primera edición: China 1991.", source: SOURCES.fifa },
  { id: "champions", name: "UEFA Champions League", organizer: "UEFA", created: 1955, note: "Antes llamada Copa de Europa. Cambió de nombre en 1992.", source: SOURCES.uefa },
  { id: "libertadores", name: "Copa Libertadores", organizer: "CONMEBOL", created: 1960, note: "Primera edición ganada por Peñarol en 1960.", source: SOURCES.conmebol },
  { id: "copa-america", name: "Copa América", organizer: "CONMEBOL", created: 1916, note: "Torneo continental de selecciones de Sudamérica.", source: SOURCES.conmebol },
  { id: "eurocopa", name: "Campeonato Europeo de la UEFA (Eurocopa)", organizer: "UEFA", created: 1960, note: "Primera edición: 1960, con la Unión Soviética campeona.", source: SOURCES.uefa },
  { id: "premier", name: "Premier League", organizer: "Premier League", created: 1992, note: "Creada como liga independiente tras la reestructuración de 1992.", source: SOURCES.fa },
  { id: "laliga", name: "LaLiga", organizer: "RFEF / LaLiga", created: 1929, note: "Primera edición en la temporada 1928-29.", source: SOURCES.fifa },
  { id: "serie-a", name: "Serie A", organizer: "Lega Serie A", created: 1898, note: "Primer campeonato: 1898.", source: SOURCES.fifa },
  { id: "bundesliga", name: "Bundesliga", organizer: "DFL", created: 1963, note: "Creada en 1963.", source: SOURCES.fifa },
  { id: "ligue1", name: "Ligue 1", organizer: "LFP", created: 1932, note: "Campeonato profesional francés desde 1932.", source: SOURCES.fifa },
];

// Campeones y subcampeones de la Copa Mundial masculina (FIFA).
export const WORLD_CUP_MEN: { year: number; host: string; champion: string; runnerUp: string }[] = [
  { year: 1930, host: "Uruguay", champion: "Uruguay", runnerUp: "Argentina" },
  { year: 1934, host: "Italia", champion: "Italia", runnerUp: "Checoslovaquia" },
  { year: 1938, host: "Francia", champion: "Italia", runnerUp: "Hungría" },
  { year: 1950, host: "Brasil", champion: "Uruguay", runnerUp: "Brasil" },
  { year: 1954, host: "Suiza", champion: "Alemania Occidental", runnerUp: "Hungría" },
  { year: 1958, host: "Suecia", champion: "Brasil", runnerUp: "Suecia" },
  { year: 1962, host: "Chile", champion: "Brasil", runnerUp: "Checoslovaquia" },
  { year: 1966, host: "Inglaterra", champion: "Inglaterra", runnerUp: "Alemania Occidental" },
  { year: 1970, host: "México", champion: "Brasil", runnerUp: "Italia" },
  { year: 1974, host: "Alemania Occidental", champion: "Alemania Occidental", runnerUp: "Países Bajos" },
  { year: 1978, host: "Argentina", champion: "Argentina", runnerUp: "Países Bajos" },
  { year: 1982, host: "España", champion: "Italia", runnerUp: "Alemania Occidental" },
  { year: 1986, host: "México", champion: "Argentina", runnerUp: "Alemania Occidental" },
  { year: 1990, host: "Italia", champion: "Alemania Occidental", runnerUp: "Argentina" },
  { year: 1994, host: "Estados Unidos", champion: "Brasil", runnerUp: "Italia" },
  { year: 1998, host: "Francia", champion: "Francia", runnerUp: "Brasil" },
  { year: 2002, host: "Corea del Sur / Japón", champion: "Brasil", runnerUp: "Alemania" },
  { year: 2006, host: "Alemania", champion: "Italia", runnerUp: "Francia" },
  { year: 2010, host: "Sudáfrica", champion: "España", runnerUp: "Países Bajos" },
  { year: 2014, host: "Brasil", champion: "Alemania", runnerUp: "Argentina" },
  { year: 2018, host: "Rusia", champion: "Francia", runnerUp: "Croacia" },
  { year: 2022, host: "Qatar", champion: "Argentina", runnerUp: "Francia" },
];

export type TimelineEvent = { year: string; title: string; text: string; era: string };

export const TIMELINE: TimelineEvent[] = [
  { year: "1857", era: "Orígenes", title: "Nace Sheffield FC", text: "Uno de los clubes de fútbol más antiguos del mundo, en Inglaterra." },
  { year: "1863", era: "Fútbol moderno", title: "Reglas de la Football Association", text: "La FA se funda en Londres y fija las reglas básicas del fútbol de asociación." },
  { year: "1872", era: "Fútbol moderno", title: "Primer partido internacional", text: "Escocia e Inglaterra empatan 0-0 en Glasgow." },
  { year: "1904", era: "Organización", title: "Se funda la FIFA", text: "Siete países crean la FIFA en París el 21 de mayo de 1904." },
  { year: "1930", era: "Mundiales", title: "Primer Mundial", text: "Uruguay gana en casa la primera Copa Mundial, con Argentina como subcampeona." },
  { year: "1955", era: "Europa", title: "Primera Copa de Europa", text: "Se disputa la primera edición de la competición de clubes europeos, antecesora de la Champions League." },
  { year: "1960", era: "Sudamérica", title: "Primera Copa Libertadores", text: "Peñarol gana la primera edición del torneo continental de clubes." },
  { year: "1991", era: "Mundiales", title: "Primer Mundial femenino", text: "China acoge la primera Copa Mundial Femenina de la FIFA." },
  { year: "1992", era: "Competiciones", title: "Nace la Premier League", text: "La liga inglesa se reorganiza como competición independiente." },
  { year: "1995", era: "Sociedad", title: "Sentencia Bosman", text: "El Tribunal de Justicia de la UE permite a los jugadores de la UE cambiar de club sin pago de traspaso al final de su contrato." },
  { year: "2010", era: "Mundiales", title: "España campeona en Sudáfrica", text: "Primer título mundial de España, con el gol de Iniesta en la prórroga." },
  { year: "2018", era: "Tecnología", title: "VAR en un Mundial", text: "Rusia 2018 es el primer Mundial con videoarbitraje." },
  { year: "2022", era: "Mundiales", title: "Argentina campeona en Qatar", text: "Primer Mundial que se disputa en noviembre y diciembre; Argentina gana la final a Francia." },
];

export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number;
  explain: string;
  level: "fácil" | "media" | "difícil";
};

export const QUIZ: QuizQuestion[] = [
  { level: "fácil", q: "¿Qué país acogió la primera Copa Mundial de la FIFA en 1930?", options: ["Italia", "Uruguay", "Brasil", "Argentina"], answer: 1, explain: "Uruguay organizó y ganó el primer Mundial en 1930." },
  { level: "fácil", q: "¿En qué año se fundó la FIFA?", options: ["1863", "1888", "1904", "1930"], answer: 2, explain: "La FIFA se fundó en París en 1904." },
  { level: "fácil", q: "¿Qué club es el más laureado de la Champions League, con 15 títulos a fecha de corte octubre 2026?", options: ["FC Barcelona", "AC Milan", "Liverpool", "Real Madrid"], answer: 3, explain: "El Real Madrid tiene 15 Copas de Europa a fecha de corte octubre 2026 (UEFA)." },
  { level: "media", q: "¿Quién marcó el gol de la final del Mundial 2010?", options: ["David Villa", "Andrés Iniesta", "Xavi Hernández", "Fernando Torres"], answer: 1, explain: "Iniesta marcó en la prórroga de la final contra Países Bajos." },
  { level: "media", q: "¿Qué país ganó la primera Copa Libertadores en 1960?", options: ["Brasil", "Argentina", "Uruguay", "Chile"], answer: 2, explain: "Peñarol, de Uruguay, ganó la primera edición en 1960." },
  { level: "media", q: "¿En qué Mundiales ganó Brasil con Pelé en el equipo?", options: ["1950, 1954, 1958", "1958, 1962, 1970", "1962, 1966, 1970", "1994, 1998, 2002"], answer: 1, explain: "Brasil ganó en 1958, 1962 y 1970. Pelé jugó en los tres." },
  { level: "media", q: "¿En qué año se disputó el primer Mundial femenino de la FIFA?", options: ["1985", "1988", "1991", "1995"], answer: 2, explain: "China acogió la primera edición en 1991." },
  { level: "difícil", q: "¿Qué selección ganó el Mundial de 1982?", options: ["Alemania Occidental", "Italia", "Argentina", "Francia"], answer: 1, explain: "Italia ganó en 1982. Alemania Occidental fue subcampeona." },
  { level: "difícil", q: "¿Qué club francés fue el primero en ganar la Champions League?", options: ["Paris Saint-Germain", "Olympique de Marsella", "AS Mónaco", "Olympique de Lyon"], answer: 1, explain: "El Marsella ganó la Champions en 1993." },
  { level: "difícil", q: "¿En qué año se fundó la Football Association (FA) inglesa?", options: ["1857", "1863", "1872", "1888"], answer: 1, explain: "La FA se fundó en 1863 y fijó las primeras reglas del fútbol de asociación." },
];
