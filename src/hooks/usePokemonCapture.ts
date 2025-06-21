import { useState } from "react";
import { usePokemonApi } from "../api/usePokemonApi";
import { useQueryClient } from "@tanstack/react-query";

export const usePokemonCapture = () => {
  const { useToggleCapture } = usePokemonApi();
  const mutation = useToggleCapture();
  const queryClient = useQueryClient();

  const [capturingName, setCapturingName] = useState<string | null>(null);

  const handleCapture = async (name: string) => {
    if (capturingName !== null) return;

    setCapturingName(name);

    try {
      await mutation.mutateAsync(name);
      await queryClient.invalidateQueries({ queryKey: ["pokemons"] });
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (err) {
      console.error("Failed to capture Pokémon:", err);
    } finally {
      setCapturingName(null);
    }
  };

  return {
    capture: handleCapture,
    isLoading: mutation.isPending || capturingName !== null,
    capturingName,
  };
};
