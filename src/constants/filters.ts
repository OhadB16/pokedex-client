export interface Option<T = string | number> {
  label: string;
  value: T;
}

export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 10;

export const LIMIT_STR = "limit";
export const PAGE_STR = "page";
export const TYPE_STR = "type";
export const SORT_STR = "sort";
export const ASC_STR = "asc";
export const EMPTY_STR = ""

export const SORT_OPTIONS: Option<"asc" | "desc">[] = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" },
];

export const TYPE_OPTIONS = [
  { label: "All", value: "" },
  { label: "Fire", value: "Fire" },
  { label: "Water", value: "Water" },
  { label: "Grass", value: "Grass" },
  { label: "Electric", value: "Electric" },
  { label: "Poison", value: "Poison" },
] as const;

export const LIMIT_OPTIONS = [
  { label: "5 per page", value: 5 },
  { label: "10 per page", value: 10 },
  { label: "20 per page", value: 20 },
] as const;
