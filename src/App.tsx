import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import { usePokemonCapture } from "./hooks/usePokemonCapture";
import { useFilters } from "./hooks/useFilters";
import { useDarkMode } from "./hooks/useDarkMode";
import { useThemeMode } from "./hooks/useThemeMode";
import Filters from "./components/Filters/Filters";
import PokemonGrid from "./components/Pokemon/PokemonGrid";

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const theme = useThemeMode(darkMode);
  const filters = useFilters();
  const { capture, isLoading, capturingName } = usePokemonCapture();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Filters {...filters} />
        <PokemonGrid
          filters={filters}
          onCapture={capture}
          isLoadingCapture={isLoading}
          capturingName={capturingName}
          optimisticCaptured={null}
        />
      </Container>
    </ThemeProvider>
  );
}
export default App;
