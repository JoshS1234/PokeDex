export type PokemonWithURL = {
  name: string;
  url: string;
};

export type fullPokemonData = {
  abilities: Array<Object>;
  base_experience: Number;
  cries: criesObject;
  forms: Array<Object>;
  game_indices: Array<Object>;
  height: number;
  held_items: Array<Object>;
  id: number;
  id_default: boolean;
  location_area_encounters: string;
  moves: Array<Object>;
  name: string;
  order: number;
  past_abilities: Array<Object>;
  past_types: Array<Object>;
  species: speciesObject;
  sprites: spritesObject;
  stats: Array<Object>;
  types: Array<typeObjectWithSlot>;
  weight: number;
};

export type typeObjectWithSlot = {
  slot: number;
  type: typeObject;
};

export type typeObject = {
  name: string;
  url: string;
};

export type spritesObject = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: {
    dream_world: {
      front_default: string;
      front_female: string;
    };
    home: {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
    "official-artwork": {
      front_default: string;
      front_shiny: string;
    };
    showdown: {
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
  };
};

export type speciesObject = {
  name: string;
  url: string;
};

export type criesObject = {
  legacy: string;
  latest: string;
};
