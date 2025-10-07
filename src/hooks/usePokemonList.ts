import { useQuery } from '@apollo/client/react';
import { GET_POKEMON_LIST } from '../queries/queries';
import { PokemonListResult } from '../types/types';

const PAGE_LIMIT = 20;
const TOTAL_POKEMON_COUNT = 151;

export const usePokemonList = () => {
  const { data, loading, error, fetchMore } = useQuery<PokemonListResult>(
    GET_POKEMON_LIST,
    {
      variables: { limit: PAGE_LIMIT, offset: 0 },
    },
  );
  const pokemons = data?.pokemon || [];

  const loadMorePokemons = () => {
    if (!data || loading) return;

    const currentLength = pokemons.length;
    if (currentLength >= TOTAL_POKEMON_COUNT) return;

    const remaining = TOTAL_POKEMON_COUNT - currentLength;
    const limitForNextFetch = Math.min(PAGE_LIMIT, remaining);

    fetchMore({
      variables: {
        offset: currentLength,
        limit: limitForNextFetch,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          pokemon: [...prev.pokemon, ...fetchMoreResult.pokemon],
        };
      },
    });
  };

  const hasMore = pokemons.length < TOTAL_POKEMON_COUNT;
  return { pokemons, loading, error, hasMore, loadMorePokemons };
};
