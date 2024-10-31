import React, { useState } from "react";

function ProsAndCons(props) {
  const choice = props.choice;
  const [pros, setPros] = useState(0);
  const [cons, setCons] = useState(0);

  const handleAddPros = () => {
    setPros((prevPros) => prevPros + 1);
  };

  const handleAddCons = () => {
    setCons((prevCons) => prevCons + 1);
  };
  return (
    <>
      <p>Please enter how many pros and cons each choice has:</p>

      <div>
        <p>{choice}</p>
        <div>
          {pros}
          <button onClick={handleAddPros}>add pros</button>
        </div>
        <div>
          {cons}
          <button onClick={handleAddCons}>add cons</button>
        </div>
        <button>reset p&c</button>
      </div>
    </>
  );
}

export default ProsAndCons;
