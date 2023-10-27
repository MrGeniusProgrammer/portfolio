import type { Polygon } from "$lib/types";

export { default as SkillContainer } from "./skill-container.svelte";
export { default as SkillSquare } from "./skill-square.svelte";

export type MainContext = {
  addSqaure: (square: Polygon, text: string) => void;
  addPolygon: (polygon: Polygon, stopIndex: number) => void;
  setStopIndex: (n: number) => void;
  getStopIndex: () => number;
  getLatestPolygon: () => Polygon
}