import { gql } from '@apollo/client';

export const GET_POKEMON_LIST = gql`
  query PokemonListQuery($offset: Int, $limit: Int) {
    pokemon(offset: $offset, limit: $limit) {
      name
      id
      pokemontypes {
        type_id
      }
    }
  }
`;

export const GET_POKEMON_DETAILS = gql`
  query PokemonDetailsQuery($where: pokemon_bool_exp) {
    pokemon(where: $where) {
      name
      id
      height
      weight
      pokemontypes {
        type_id
      }
      pokemonstats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`;
