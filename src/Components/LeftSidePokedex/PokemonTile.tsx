import React, { useEffect, useState } from "react";
import "./PokemonTile.scss";
import axios from "axios";
import { arrayToString, firstLetterCap } from "../../utils/generalUtils";
import type { fullPokemonData, PokemonWithURL, criesObject } from "../../Types";
import PokemonTileImage from "./PokemonTileImage";

type Props = {
  individualPokeData: PokemonWithURL;
  incrementPokemonId: (increment: number) => void;
};

function PokemonTile({ individualPokeData, incrementPokemonId }: Props) {
  const [individualPokemonObject, setIndividualPokemonObject] =
    useState<fullPokemonData>();

  const getPokemonData = async (individualPokeData: PokemonWithURL) => {
    axios.get(individualPokeData.url.toString()).then((data) => {
      setIndividualPokemonObject(data.data);
    });
  };

  useEffect(() => {
    if (individualPokeData) {
      getPokemonData(individualPokeData);
    }
  }, [individualPokeData]);

  return (
    <div className="fullTile">
      <PokemonTileImage individualPokemonObject={individualPokemonObject} />
      <div className="selectionArrowContainer">
        <img
          src="src/assets/leftArrow.svg"
          className="selectionArrow"
          onClick={() => incrementPokemonId(-1)}
        />
        <img
          src="src/assets/rightArrow.svg"
          className="selectionArrow"
          onClick={() => incrementPokemonId(1)}
        />
      </div>
    </div>
  );
}

export default PokemonTile;
