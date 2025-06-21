import { useSearchParams } from "react-router-dom";
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  EMPTY_STR,
  LIMIT_STR,
  PAGE_STR,
  SORT_STR,
  TYPE_STR,
} from "../constants/filters";

export const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = <T extends string>(key: string, fallback: T): T =>
    (searchParams.get(key) as T) || fallback;

  const page = Number(getParam(PAGE_STR, DEFAULT_PAGE?.toString()));
  const limit = Number(getParam(LIMIT_STR, DEFAULT_LIMIT?.toString()));
  const sort = getParam(SORT_STR, "asc") as "asc" | "desc";
  const typeFilter = getParam(TYPE_STR, EMPTY_STR);

  const setParam = (key: string, value: string | number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, String(value));
    setSearchParams(newParams);
  };

  return {
    page,
    setPage: (val: number) => setParam(PAGE_STR, val),
    limit,
    setLimit: (val: number) => setParam(LIMIT_STR, val),
    sort,
    setSort: (val: "asc" | "desc") => setParam(SORT_STR, val),
    typeFilter,
    setTypeFilter: (val: string) => setParam(TYPE_STR, val),
  };
};
