import { useEffect } from "react";
import "./CentreLeftButtonContainer.scss";
import type { criesObject, fullPokemonData } from "../../Types";

type centreLeftButtonContainerProps = {
  individualPokemonObject: fullPokemonData | undefined;
};

function CentreLeftButtonContainer({
  individualPokemonObject,
}: centreLeftButtonContainerProps) {
  useEffect(() => {}, [individualPokemonObject]);

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

  return (
    <div className="centreLeftButtonContainer">
      <button
        className="centreLeftButton"
        onClick={() => {
          playAudio(individualPokemonObject?.cries, true);
        }}
      >
        Original cry
      </button>
      <button
        className="centreLeftButton"
        onClick={() => {
          playAudio(individualPokemonObject?.cries, false);
        }}
      >
        Modern Cry
      </button>
    </div>
  );
}

export default CentreLeftButtonContainer;
