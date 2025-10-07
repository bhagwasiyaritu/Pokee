import { useState, useCallback } from 'react';
import apiClient from '../services/apiClient';
import { Pokemon, PokemonListResponse } from '../types/types';

const IMAGE_BASE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const PAGE_LIMIT = 10;
const TOTAL_POKEMON_COUNT = 151;

export const usePokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadMorePokemons = useCallback(async () => {
    if (loading || !hasMore) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.get<PokemonListResponse>('/', {
        params: { limit: PAGE_LIMIT, offset },
      });

      const newPokemons = response.data.results.map(p => {
        const id = p.url.split('/').filter(Boolean).pop() || '';
        return {
          ...p,
          id,
          imageUrl: `${IMAGE_BASE_URL}${id}.png`,
        };
      });

      setPokemons(prevPokemons => [...prevPokemons, ...newPokemons]);

      const nextOffset = offset + PAGE_LIMIT;
      setOffset(nextOffset);

      if (nextOffset >= TOTAL_POKEMON_COUNT) {
        setHasMore(false);
      }
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, offset]);

  return { pokemons, loading, error, hasMore, loadMorePokemons };
};
