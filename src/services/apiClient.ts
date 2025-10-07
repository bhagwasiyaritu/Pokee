import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;