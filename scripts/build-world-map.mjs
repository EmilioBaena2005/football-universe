// Genera app/mapa/world-paths.json a partir de world-atlas (Natural Earth, dominio público).
// Ejecutar una vez: node scripts/build-world-map.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { geoNaturalEarth1, geoPath } from "d3-geo";

const require = createRequire(import.meta.url);
const topojson = require("topojson-client");
const world = JSON.parse(readFileSync(require.resolve("world-atlas/countries-110m.json"), "utf8"));

const countries = topojson.feature(world, world.objects.countries);

const projection = geoNaturalEarth1().fitSize([960, 500], countries);
const path = geoPath(projection);

const out = countries.features
  .filter((f) => f.properties && f.properties.name)
  .map((f) => ({ name: f.properties.name, d: path(f) }))
  .filter((f) => f.d);

writeFileSync("app/mapa/world-paths.json", JSON.stringify(out));
console.log(`Países: ${out.length}`);
