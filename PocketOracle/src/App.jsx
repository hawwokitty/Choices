// En app hvor bruker legger inn flere valg, og så splitter programmet det inn i flere små valg (1 mot 1),
// Brukeren kan velge om de vil ta valget selv, eller kaste en mynt som velger for dem, og går videre, til det bare er ett valg igjen
// Brukeren registrerer antall pros and cons

import { useState } from "react";
import ProsAndCons from "./components/ProsAndCons";
import ChoiceList from "./components/ChoiceList";

import "./App.css";

function App() {
  const [choices, setChoices] = useState([]);

  const handleChoices = (newChoice) => {
    setChoices((prevChoices) => [...prevChoices, { choice: newChoice, pros: 0, cons: 0 }]);
  };

  const updateProsAndCons = (index, pros, cons) => {
    setChoices((prevChoices) =>
      prevChoices.map((item, idx) =>
        idx === index ? { ...item, pros: pros, cons: cons } : item
      )
    );
  };

  return (
    <>
      <button>Advanced</button>
      <button>Coin flip</button>
      <ChoiceList handleChoices={handleChoices} />
      {choices.map((item, index) => (
        <ProsAndCons
          key={index}
          choiceData={item}
          updateProsAndCons={(pros, cons) => updateProsAndCons(index, pros, cons)}
        />
      ))}
      <p>Picked choices: {choices.map(item => item.choice).join(", ")}</p>
    </>
  );
}

export default App;

