import { useState, useCallback } from 'react';
import apiClient from '../services/apiClient';
import { PokemonDetail } from '../types/types';

export const usePokemonDetails = () => {
  const [details, setDetails] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchDetails = useCallback(async (id: number) => {
    if (!id) return;

    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.get<PokemonDetail>(`/${id}`);
      setDetails(response.data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { details, loading, error, fetchDetails };
};