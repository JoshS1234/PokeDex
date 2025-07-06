import React from "react";
import "./NumberInterface.scss";

type Props = {
  setCurrentIndex: (index: number) => void;
};

function NumberInterface({ setCurrentIndex }: Props) {
  return (
    <div className="numberInterfaceContainer">
      <div>Screen</div>
      <div>inputs</div>
      <div>Delete</div>
      <div>BackSpace</div>
      <div>Enter</div>
    </div>
  );
}

export default NumberInterface;
