import React, { useEffect, useState } from "react";
import "./PokemonTile.scss";
import axios from "axios";
import { arrayToString, firstLetterCap } from "../../utils/generalUtils";
import type { fullPokemonData, PokemonWithURL, criesObject } from "../../Types";
import PokemonTileImage from "./PokemonTileImage";
import DescriptionBox from "./DescriptionBox";
import NavigationButtonsContainer from "./NavigationButtonsContainer";
import CentreLeftButtonContainer from "./CentreLeftButtonContainer";

type Props = {
  individualPokeData: PokemonWithURL;
  incrementPokemonId: (increment: number) => void;
};

function PokemonTile({ individualPokeData, incrementPokemonId }: Props) {
  const [individualPokemonObject, setIndividualPokemonObject] =
    useState<fullPokemonData>();
  const [additionalPokemonData, setAdditionalPokemonData] = useState();

  const getPokemonData = async (individualPokeData: PokemonWithURL) => {
    axios
      .get(individualPokeData.url.toString())
      .then((data) => {
        setIndividualPokemonObject(data.data);
        return axios.get(data.data.species.url);
      })
      .then((data) => {
        setAdditionalPokemonData(data.data);
      });
  };

  useEffect(() => {
    if (individualPokeData) {
      getPokemonData(individualPokeData);
    }
  }, [individualPokeData]);

  return (
    <div className="fullTile">
      <div className="pokemonImageContainer">
        <PokemonTileImage individualPokemonObject={individualPokemonObject} />
      </div>
      <div className="bottomLeftContentContainer">
        <CentreLeftButtonContainer
          individualPokemonObject={individualPokemonObject}
        />
        <div className="descriptionContentContainer">
          <DescriptionBox additionalPokemonData={additionalPokemonData} />
          <NavigationButtonsContainer incrementPokemonId={incrementPokemonId} />
        </div>
      </div>
    </div>
  );
}

export default PokemonTile;
