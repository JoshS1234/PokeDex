import React, { useEffect, useState } from "react";
import "./PokemonTile.scss";
import axios from "axios";
import { arrayToString, firstLetterCap } from "../utils/generalUtils";
import type { fullPokemonData, PokemonWithURL, criesObject } from "../Types";

type Props = {
  individualPokeData: PokemonWithURL;
  incrementPokemonId: (increment: number) => void;
};

function PokemonTile({ individualPokeData, incrementPokemonId }: Props) {
  const [individualPokemonObject, setIndividualPokemonObject] =
    useState<fullPokemonData>();
  const [isShiny, setIsShiny] = useState<boolean>(false);
  const [isFront, setIsFront] = useState<boolean>(true);
  const [pokemonImgSrc, setPokemonImgSrc] = useState<string>();

  const setImage = (isShiny: boolean, isFront: boolean) => {
    let img = "src/assets/questionMark.svg";
    if (isShiny && isFront && individualPokemonObject?.sprites.front_shiny) {
      img = individualPokemonObject?.sprites.front_shiny;
    } else if (
      isShiny &&
      !isFront &&
      individualPokemonObject?.sprites.back_shiny
    ) {
      img = individualPokemonObject?.sprites.back_shiny;
    } else if (
      !isShiny &&
      isFront &&
      individualPokemonObject?.sprites.front_default
    ) {
      img = individualPokemonObject?.sprites.front_default;
    } else if (
      !isShiny &&
      !isFront &&
      individualPokemonObject?.sprites.back_default
    ) {
      img = individualPokemonObject?.sprites.back_default;
    }
    setPokemonImgSrc(img);
  };

  const getPokemonData = async (individualPokeData: PokemonWithURL) => {
    axios.get(individualPokeData.url.toString()).then((data) => {
      setIndividualPokemonObject(data.data);
      setImage(isShiny, isFront);
    });
  };

  const toggleIsShiny = () => {
    setIsShiny(!isShiny);
    setImage(isShiny, isFront);
  };

  const toggleIsFront = () => {
    setIsFront(!isFront);
    setImage(isShiny, isFront);
  };

  function playAudio(cries: criesObject | undefined, isLegacy: boolean) {
    if (cries) {
      let url;
      if (isLegacy) {
        url = cries.legacy;
      } else {
        url = cries.latest;
      }
      new Audio(url).play();
    }
  }

  useEffect(() => {
    if (individualPokeData) {
      getPokemonData(individualPokeData);
    }
  }, [individualPokeData, individualPokemonObject, isShiny, isFront]);

  return (
    <div className="fullTile">
      <div className="pokemonImageContainer">
        <div className="pokemonImageButtonContainer">
          <h6
            className="imageButton"
            onClick={() => {
              playAudio(individualPokemonObject?.cries, true);
            }}
          >
            Original cry
          </h6>
          <h6
            className="imageButton"
            onClick={() => {
              playAudio(individualPokemonObject?.cries, false);
            }}
          >
            Modern Cry
          </h6>
        </div>
        <img className="pokemonImage" src={pokemonImgSrc} />
        <div className="pokemonImageButtonContainer">
          <h6
            className="imageButton"
            onClick={() => {
              toggleIsShiny();
            }}
          >
            {isShiny ? "Non-shiny" : "Shiny"}
          </h6>
          <h6
            className="imageButton"
            onClick={() => {
              toggleIsFront();
            }}
          >
            {isFront ? "Back view" : "Front view"}
          </h6>
        </div>
      </div>
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
