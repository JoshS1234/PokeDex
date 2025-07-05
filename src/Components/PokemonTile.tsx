import React from "react";

type Props = {
  individualPokeData: Pokemon;
};

type Pokemon = {
  name: String;
  url: String;
};

function PokemonTile({ individualPokeData }: Props) {
  return (
    <div>
      <h2>{individualPokeData.name}</h2>
      <h3>{individualPokeData.url}</h3>
    </div>
  );
}

export default PokemonTile;
