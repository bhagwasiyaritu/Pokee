import { GET_POKEMON_DETAILS } from '../queries/queries';
import { useQuery } from '@apollo/client/react';
import { PokemonDetailsData } from '../types/types';

export const usePokemonDetails = (pokemonId: number) => {
  const { data, loading, error, refetch } = useQuery<PokemonDetailsData>(
    GET_POKEMON_DETAILS,
    {
      variables: { where: { id: { _eq: pokemonId } } },
      skip: !pokemonId,
    },
  );

  return {
    loading,
    error,
    details: data?.pokemon[0] ?? null,
    refetch,
  };
};
