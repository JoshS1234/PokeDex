import PokemonTile from "../Components/PokemonTile";
import "./MainPage.scss";
import React, { useEffect } from "react";
import { useState } from "react";

type MainPageProps = {
  pokeData: Array<Pokemon>;
};

type Pokemon = {
  name: String;
  url: String;
};

const MainPage = ({ pokeData }: MainPageProps) => {
  console.log(pokeData);

  return (
    <div className="mainPageContainer">
      <h1 className="headerContainer">MainPageHeader</h1>
      <li>
        {pokeData.map((pokemon: Pokemon) => {
          return <PokemonTile individualPokeData={pokemon} />;
        })}
      </li>
    </div>
  );
};

export default MainPage;
