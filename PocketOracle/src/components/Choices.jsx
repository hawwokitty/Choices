import React, { useState } from "react";

const Choices = ({ handleAddChoice }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      handleAddChoice(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a choice"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Choice</button>
    </div>
  );
};

export default Choices;