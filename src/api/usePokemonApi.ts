import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { Pokemon } from "../types/types";

export const BASE_API_URL = "http://localhost:8080/api";

const getPokemons = async (
  page: number,
  limit: number,
  sort: "asc" | "desc",
  typeFilter: string
): Promise<Pokemon[]> => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    sort,
  });

  if (typeFilter) params.append("type", typeFilter);

  const res = await axios.get(`${BASE_API_URL}/pokemon?${params}`);
  return res.data;
};

const postCapture = async (name: string): Promise<void> => {
  await axios.post(`${BASE_API_URL}/capture/${name}`);
};

export const usePokemonApi = () => {
  const queryClient = useQueryClient();

  const usePokemonsQuery = (
    page: number,
    limit: number,
    sort: "asc" | "desc",
    typeFilter: string
  ) => {
    return useQuery({
      queryKey: ["pokemons", page, limit, sort, typeFilter],
      queryFn: () => getPokemons(page, limit, sort, typeFilter),
      staleTime: 1000 * 60 * 5,
      keepPreviousData: true,
    } as import("@tanstack/react-query").UseQueryOptions<Pokemon[], Error, Pokemon[], (string | number)[]>);
  };

  const useToggleCapture = () => {
    return useMutation({
      mutationFn: postCapture,

      onMutate: async (name: string) => {
        await queryClient.cancelQueries({ queryKey: ["pokemons"] });

        const previousData = queryClient.getQueryData<Pokemon[]>(["pokemons"]);

        queryClient.setQueryData<Pokemon[]>(
          ["pokemons"],
          (oldData) =>
            oldData?.map((pokemon) =>
              pokemon.name === name
                ? { ...pokemon, captured: !pokemon.captured }
                : pokemon
            ) ?? []
        );

        return { previousData };
      },

      onError: (_err, _name, context) => {
        if (context?.previousData) {
          queryClient.setQueryData(["pokemons"], context.previousData);
        }
      },

      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["pokemons"] });
      },
    });
  };

  return { usePokemonsQuery, useToggleCapture };
};
