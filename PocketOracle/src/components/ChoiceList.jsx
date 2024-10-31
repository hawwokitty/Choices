import React from "react";
import Choices from "./Choices";

const ChoiceList = ({ choices, handleChoices }) => {
  return (
    <div>
      <Choices handleAddChoice={handleChoices} />
      {choices.map((choice, index) => (
        <p key={index}>{choice}</p>
      ))}
      <button onClick={() => handleChoices("")}>Add more +</button>
    </div>
  );
};

export default ChoiceList;
