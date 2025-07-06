import React, { useEffect } from "react";
import "./PokemonTileImage.scss";
import type { criesObject, fullPokemonData } from "../../Types";
import { useState } from "react";

type pokemonTileImageProps = {
  individualPokemonObject: fullPokemonData;
};

function PokemonTileImage({ individualPokemonObject }: pokemonTileImageProps) {
  const [pokemonImgSrc, setPokemonImgSrc] = useState<string>();
  const [isShiny, setIsShiny] = useState<boolean>(false);
  const [isFront, setIsFront] = useState<boolean>(true);

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
    setImage(isShiny, isFront);
  }, [individualPokemonObject, isShiny, isFront]);

  return (
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
  );
}

export default PokemonTileImage;
