import { useMemo } from "react";
import { createTheme } from "@mui/material";

export const useThemeMode = (darkMode: boolean) =>
  useMemo(
    () =>
      createTheme({
        palette: { mode: darkMode ? "dark" : "light" },
      }),
    [darkMode]
  );