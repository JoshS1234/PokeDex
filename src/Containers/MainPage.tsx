import PokemonTile from "../Components/LeftSidePokedex/PokemonTile";
import "./MainPage.scss";
import { useEffect } from "react";
import { useState } from "react";
import type { PokemonWithURL } from "../Types";
import NumberInterface from "../Components/RightSidePokedex/NumberInterface";
import Speakers from "../Components/RightSidePokedex/Speakers";

type MainPageProps = {
  pokeData: Array<PokemonWithURL>;
};

const MainPage = ({ pokeData }: MainPageProps) => {
  const [currentIndex, setcurrentIndex] = useState<number>(0);

  const incrementPokemonId = (increment: number) => {
    setcurrentIndex((currentIndex + increment + 151) % 151);
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
          <div className="pokemonContentContainer pokemonContentContainer_left">
            <PokemonTile
              individualPokeData={pokeData[currentIndex]}
              incrementPokemonId={incrementPokemonId}
            />
          </div>
        </div>

        <div className="pokedexSide pokedexSide_right">
          <div className="pokedexSideHeader pokedexSideHeader_right"></div>
          <div className="pokemonContentContainer pokemonContentContainer_right">
            <NumberInterface setCurrentIndex={setcurrentIndex} />
            <Speakers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
