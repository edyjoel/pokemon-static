// Generated by https://quicktype.io

export interface PokemonListResponse {
  count:    number;
  next?:     string;
  previous?: null;
  results:  SmallPokemon[];
}

export interface SmallPokemon {
  name: string;
  url:  string;
  id?: number;
  img?: string;
}
