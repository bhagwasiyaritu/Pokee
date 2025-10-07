export interface PokemonType {
  type_id: number;
}
export interface Pokemon {
  name: string;
  id: number;
  pokemontypes: PokemonType[];
}

export interface PokemonListResult {
  pokemon: Pokemon[];
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  pokemontypes: PokemonType[];
  pokemonstats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}
export interface PokemonDetailsData {
  pokemon: PokemonDetail[];
}
