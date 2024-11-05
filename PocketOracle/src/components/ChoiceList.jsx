import React from "react";
import Choices from "./Choices";

const ChoiceList = ({ choices, handleChoices }) => {
  return (
    <div>
      <Choices handleAddChoice={handleChoices} />
      {/* {choices.map((choiceObj, index) => (
        <p key={index}>{choiceObj.choice}</p>
      ))} */}
    </div>
  );
};

export default ChoiceList;
