import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { BASE_URL } from './baseURL';

const apiClient = new ApolloClient({
  link: new HttpLink({ uri: `${BASE_URL}` }),
  cache: new InMemoryCache(),
});

export default apiClient;
