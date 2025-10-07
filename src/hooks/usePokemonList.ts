import { useState, useCallback } from 'react';
import apiClient from '../services/apiClient';
import { Pokemon, PokemonListResponse } from '../types/types';

const IMAGE_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export const usePokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchList = useCallback(async (limit: number = 10, offset: number = 0) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.get<PokemonListResponse>('/', {
        params: { limit, offset },
      });

      const enhancedResults: Pokemon[] = response.data.results.map(p => {
        const id = p.url.split('/').filter(Boolean).pop() || '';
        return {
          ...p,
          id,
          imageUrl: `${IMAGE_BASE_URL}${id}.png`,
        };
      });

      setPokemons(enhancedResults);

    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { pokemons, loading, error, fetchList };
};