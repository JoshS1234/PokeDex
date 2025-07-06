import React, { useEffect } from "react";
import "./CentreLeftButtonContainer.scss";
import type { criesObject, fullPokemonData } from "../../Types";

type centreLeftButtonContainerProps = {
  individualPokemonObject: fullPokemonData;
};

function CentreLeftButtonContainer({
  individualPokemonObject,
}: centreLeftButtonContainerProps) {
  useEffect(() => {}, [individualPokemonObject]);

  return (
    <div className="centreLeftButtonContainer">
      <button className="centreLeftButton">Random</button>
    </div>
  );
}

export default CentreLeftButtonContainer;
