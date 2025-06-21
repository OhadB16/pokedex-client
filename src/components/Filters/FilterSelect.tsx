import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";

export interface Option<T = string | number> {
  label: string;
  value: T;
}

interface FilterSelectProps<T extends string | number = string> {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: Option<T>[];
  selectId?: string;
}

const FilterSelect = <T extends string | number = string>({
  label,
  value,
  onChange,
  options,
  selectId,
}: FilterSelectProps<T>) => {
  const id = selectId || `${label.toLowerCase()}-select`;

  return (
    <Box minWidth={180}>
      <FormControl fullWidth>
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <Select<T>
          labelId={`${id}-label`}
          id={id}
          value={value}
          onChange={(e: SelectChangeEvent<T>) => {
            const castValue =
              typeof value === "number"
                ? (Number(e.target.value) as T)
                : (e.target.value as T);
            onChange(castValue);
          }}
          label={label}
        >
          {options.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterSelect;
