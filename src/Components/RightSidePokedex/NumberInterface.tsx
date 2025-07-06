import { useState } from "react";
import "./NumberInterface.scss";

type Props = {
  setCurrentIndex: (index: number) => void;
};

function NumberInterface({ setCurrentIndex }: Props) {
  const [currentlyTypedNum, setCurrentlyTypedNum] = useState<string>(
    "Search by ID, 1-151"
  );

  const inputValue = (num: number) => {
    let numToBe;
    if (currentlyTypedNum == "Search by ID, 1-151") {
      console.log("original text");

      numToBe = parseInt("" + num.toString());
    } else {
      console.log("new text");

      numToBe = parseInt(currentlyTypedNum + num.toString());
    }
    if (numToBe <= 151 && numToBe > 0) {
      setCurrentlyTypedNum(numToBe.toString());
    }
  };

  const handleBackspace = () => {
    if (currentlyTypedNum == "Search by ID, 1-151") {
      handleClear();
    } else {
      if (currentlyTypedNum.length >= 1) {
        setCurrentlyTypedNum(
          currentlyTypedNum.slice(0, currentlyTypedNum.length - 1)
        );
      }
    }
  };

  const handleClear = () => {
    setCurrentlyTypedNum("Search by ID, 1-151");
  };

  const handleEnter = () => {
    if (currentlyTypedNum.length > 0) {
      setCurrentIndex(parseInt(currentlyTypedNum) - 1);
      handleClear();
    }
  };

  return (
    <div className="numberInterfaceContainer">
      <div className="numberDisplayScreen">
        <h1>{currentlyTypedNum}</h1>
      </div>
      <div className="numberButtonContainer">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => {
          return (
            <button className="numberButton" onClick={() => inputValue(num)}>
              {num}
            </button>
          );
        })}
      </div>
      <div className="functionButtonContainer">
        <button
          className="functionButton"
          onClick={() => {
            handleClear();
          }}
        >
          Clear
        </button>
        <button
          className="functionButton"
          onClick={() => {
            handleBackspace();
          }}
        >
          BackSpace
        </button>
        <button
          className="functionButton"
          onClick={() => {
            handleEnter();
          }}
        >
          Enter
        </button>
      </div>
    </div>
  );
}

export default NumberInterface;
