import "./NavigationButtonsContainer.scss";

type Props = {
  incrementPokemonId: (increment: number) => void;
};

function NavigationButtonsContainer({ incrementPokemonId }: Props) {
  return (
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
  );
}

export default NavigationButtonsContainer;
