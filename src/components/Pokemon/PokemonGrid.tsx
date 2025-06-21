import { Box, Pagination, CircularProgress, Typography } from "@mui/material";
import PokemonCard from "./PokemonCard";
import { usePokemonApi } from "../../api/usePokemonApi";
import type { Pokemon } from "../../types/types";

interface PokemonGridProps {
  filters: {
    page: number;
    setPage: (page: number) => void;
    limit: number;
    sort: "asc" | "desc";
    typeFilter: string;
  };
  onCapture: (name: string) => void;
  isLoadingCapture: boolean;
  capturingName: string | null;
}

const PokemonGrid = ({
  filters,
  onCapture,
  isLoadingCapture,
  capturingName,
}: PokemonGridProps) => {
  const { usePokemonsQuery } = usePokemonApi();
  const { page, limit, sort, typeFilter } = filters;
  const {
    data: pokemons = [],
    isLoading,
    isError,
    error,
  } = usePokemonsQuery(page, limit, sort, typeFilter);

  if (isError) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <Typography color="error">
          Failed to load Pokémons: {(error as Error).message}
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={3}
        minHeight="60vh"
        position="relative"
      >
        {isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={1}
          >
            <CircularProgress color="primary" size={60} />
          </Box>
        ) : (
          pokemons.map((pokemon: Pokemon) => (
            <Box key={pokemon.id}>
              <PokemonCard
                pokemon={pokemon}
                onCapture={onCapture}
                isCapturing={
                  isLoadingCapture &&
                  capturingName?.toLowerCase() === pokemon.name.toLowerCase()
                }
              />
            </Box>
          ))
        )}
      </Box>

      {!isLoading && (
        <Box mt={4} display="flex" justifyContent="center">
          <Pagination
            count={Math.ceil(100 / limit)}
            page={page}
            onChange={(_, value) => filters.setPage(value)}
            color="primary"
          />
        </Box>
      )}
    </>
  );
};

export default PokemonGrid;
