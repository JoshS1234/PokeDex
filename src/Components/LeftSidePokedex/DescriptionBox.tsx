import React, { useEffect, useState } from "react";
import type { additionalPokemonData, descriptionObject } from "../../Types";
import "./DescriptionBox.scss";
import {
  cleanDescriptionString,
  firstLetterCap,
} from "../../utils/generalUtils";

type pokemonTileDescriptionProps = {
  additionalPokemonData: additionalPokemonData;
};

function DescriptionBox({
  additionalPokemonData,
}: pokemonTileDescriptionProps) {
  const [engDescription, setEngDescription] = useState<string>("");
  const [name, setName] = useState("");

  const findEnglishDescription = (pokemonDataArray: additionalPokemonData) => {
    const flavorTexts: Array<descriptionObject> =
      pokemonDataArray.flavor_text_entries;
    return flavorTexts.filter((flavor_text) => {
      return flavor_text.language.name == "en";
    });
  };

  useEffect(() => {
    if (additionalPokemonData) {
      if (additionalPokemonData?.flavor_text_entries[0]?.flavor_text) {
        const engDescriptions = findEnglishDescription(additionalPokemonData);
        const firstEngDescriptionString = engDescriptions[0].flavor_text;
        if (engDescriptions.length != 0) {
          setEngDescription(cleanDescriptionString(firstEngDescriptionString));
        }
      }
      if (additionalPokemonData?.name) {
        setName(firstLetterCap(additionalPokemonData.name));
      }
    }
  }, [additionalPokemonData]);

  return (
    <div className="descriptionBox">
      <h3 className="descName">{name}</h3>
      <h4 className="descText">{engDescription}</h4>
    </div>
  );
}

export default DescriptionBox;
