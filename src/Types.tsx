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

export type additionalPokemonData = {
  base_happiness: Number;
  capture_rate: Number;
  color: nameURLObj;
  egg_groups: Array<Object>;
  evolution_chain: { url: string };
  evolves_from_species: Object;
  flavor_text_entries: Array<descriptionObject>;
  form_descriptions: Array<Object>;
  forms_switchable: boolean;
  gender_rate: number;
  genera: Array<Object>;
  generation: nameURLObj;
  growth_rate: nameURLObj;
  habitat: nameURLObj;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Array<Object>;
  order: number;
  pal_park_encounters: Array<Object>;
  pokedex_numbers: Array<Object>;
  shape: nameURLObj;
  varieties: Array<Object>;
};

export type typeObjectWithSlot = {
  slot: number;
  type: nameURLObj;
};

export type nameURLObj = {
  name: string;
  url: string;
};

export type descriptionObject = {
  flavor_text: string;
  language: nameURLObj;
  version: nameURLObj;
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
