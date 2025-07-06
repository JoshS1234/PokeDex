import PokemonTile from "../Components/PokemonTile";
import "./MainPage.scss";
import React, { useEffect } from "react";
import { useState } from "react";
import type { PokemonWithURL } from "../Types";

type MainPageProps = {
  pokeData: Array<PokemonWithURL>;
};

const MainPage = ({ pokeData }: MainPageProps) => {
  const [currentIndex, setcurrentIndex] = useState<number>(0);

  const incrementPokemonId = (increment: number) => {
    console.log(currentIndex);
    setcurrentIndex((currentIndex + increment + 151) % 151);
    console.log(currentIndex);
  };

  useEffect(() => {}, [currentIndex]);

  return (
    <div className="mainPageContainer">
      <div className="contentContainer">
        <div className="pokedexSide pokedexSide_left">
          <div className="pokedexSideHeader pokedexSideHeader_left">
            <h4 className="headerButtons headerButtons_big">PokeDex</h4>
            <h4 className="headerButtons headerButtons_small">blah</h4>
            <h4 className="headerButtons headerButtons_small">blah</h4>
          </div>
          <div className="pokemonContentContainer">
            <PokemonTile
              individualPokeData={pokeData[currentIndex]}
              incrementPokemonId={incrementPokemonId}
            />
          </div>
        </div>

        <div className="pokedexSide pokedexSide_right">
          <div className="pokedexSideHeader pokedexSideHeader_right"></div>
          blankContent
        </div>
      </div>
    </div>
  );
};

export default MainPage;
