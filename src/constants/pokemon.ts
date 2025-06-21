import type { Pokemon } from "../types/types";

export const POKEMON_STATS: {
  key: keyof Pick<Pokemon, "hp" | "atk" | "def" | "spd">;
  label: string;
}[] = [
  { key: "hp", label: "HP" },
  { key: "atk", label: "ATK" },
  { key: "def", label: "DEF" },
  { key: "spd", label: "SPD" },
];

export const TYPE_COLOR_MAP: Record<string, string> = {
  Fire: "red",
  Water: "blue",
  Grass: "green",
  Electric: "goldenrod",
  Poison: "purple",
  default: "grey",
};

export const LABEL_CAPTURED = "Captured";
export const LABEL_CAPTURING = "Capturing...";
export const LABEL_CAPTURE = "Capture";

export const PAGE_TITLE = "Pokédex";
export const LOGO_URL =
  "https://img.pokemondb.net/sprites/home/normal/pikachu.png";
