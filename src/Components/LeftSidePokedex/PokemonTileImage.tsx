import { useEffect } from "react";
import "./PokemonTileImage.scss";
import type { fullPokemonData } from "../../Types";
import { useState } from "react";

type pokemonTileImageProps = {
  individualPokemonObject: fullPokemonData | undefined;
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

  useEffect(() => {
    setImage(isShiny, isFront);
  }, [individualPokemonObject, isShiny, isFront]);

  return (
    <div className="imageContainer">
      <img className="pokemonImage" src={pokemonImgSrc} />
      <div className="pokemonImageButtonContainer">
        <button
          className="imageButton"
          onClick={() => {
            toggleIsShiny();
          }}
        >
          {isShiny ? "Non-shiny" : "Shiny"}
        </button>
        <button
          className="imageButton"
          onClick={() => {
            toggleIsFront();
          }}
        >
          {isFront ? "Back view" : "Front view"}
        </button>
      </div>
    </div>
  );
}

export default PokemonTileImage;
