import { Box, useTheme } from "@mui/material";
import FilterSelect from "./FilterSelect";
import {
  SORT_OPTIONS,
  TYPE_OPTIONS,
  LIMIT_OPTIONS,
} from "../../constants/filters";

interface FiltersProps {
  sort: "asc" | "desc";
  setSort: (val: "asc" | "desc") => void;
  typeFilter: string;
  setTypeFilter: (val: string) => void;
  limit: number;
  setLimit: (val: number) => void;
}

const Filters = ({
  sort,
  setSort,
  typeFilter,
  setTypeFilter,
  limit,
  setLimit,
}: FiltersProps) => {
  const theme = useTheme();

  return (
    <Box
      p={3}
      mb={4}
      borderRadius={3}
      bgcolor={
        theme.palette.mode === "light"
          ? "#f9f9f9"
          : theme.palette.background.paper
      }
      boxShadow={2}
    >
      <Box display="flex" flexWrap="wrap" gap={2}>
        <FilterSelect
          label="Sort"
          value={sort}
          onChange={setSort}
          options={SORT_OPTIONS}
        />
        <FilterSelect
          label="Type"
          value={typeFilter}
          onChange={setTypeFilter}
          options={[...TYPE_OPTIONS]}
        />
        <FilterSelect
          label="Limit"
          value={limit}
          onChange={setLimit}
          options={[...LIMIT_OPTIONS]}
        />
      </Box>
    </Box>
  );
};

export default Filters;
