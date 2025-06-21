import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const getInitialMode = () => {
    const stored = localStorage.getItem("theme");
    return stored ? stored === "dark" : prefersDarkMode;
  };

  const [darkMode, setDarkMode] = useState(getInitialMode);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
};
