import React, { useState } from "react";

function ProsAndCons(props) {
  const { choiceData, updateProsAndCons } = props;
  const [pros, setPros] = useState(choiceData.pros);
  const [cons, setCons] = useState(choiceData.cons);

  const handleAddPros = () => {
    const updatedPros = pros + 1;
    setPros(updatedPros);
    updateProsAndCons(choiceData.id, updatedPros, cons);
  };

  const handleAddCons = () => {
    const updatedCons = cons + 1;
    setCons(updatedCons);
    updateProsAndCons(choiceData.id, pros, updatedCons);
  };

  const resetProsAndCons = () => {
    setPros(0);
    setCons(0);
    updateProsAndCons(choiceData.id, 0, 0);
  };

  return (
    <>
      <p>Please enter how many pros and cons each choice has:</p>
      <div>
        <p>{choiceData.choice}</p>
        <div>
          Pros: {pros}
          <button onClick={handleAddPros}>add pros</button>
        </div>
        <div>
          Cons: {cons}
          <button onClick={handleAddCons}>add cons</button>
        </div>
        <button onClick={resetProsAndCons}>reset p&c</button>
      </div>
    </>
  );
}

export default ProsAndCons;
