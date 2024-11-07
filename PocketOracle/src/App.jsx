// En app hvor bruker legger inn flere valg, og så splitter programmet det inn i flere små valg (1 mot 1),
// Brukeren kan velge om de vil ta valget selv, eller kaste en mynt som velger for dem, og går videre, til det bare er ett valg igjen
// Brukeren registrerer antall pros and cons

import { useState } from "react";
import ProsAndCons from "./components/ProsAndCons";
import ChoiceList from "./components/ChoiceList";
import AdvancedChoiceMaker from "./components/AdvancedChoiceMaker";
import BasicChoiceMaker from "./components/BasicChoiceMaker";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

function App() {
  const [choices, setChoices] = useState([]);
  const [advanced, setAdvanced] = useState(false);
  const [basic, setBasic] = useState(false);

  const handleChoices = (newChoice) => {
    const newChoiceObject = {
      id: uuidv4(),
      choice: newChoice,
      pros: 0,
      cons: 0,
    };
    setChoices((prevChoices) => [...prevChoices, newChoiceObject]);
  };

  const updateProsAndCons = (index, addPros, addCons) => {
    setChoices((prevChoices) =>
      prevChoices.map((item) =>
        item.id === index ? { ...item, pros: addPros, cons: addCons } : item
      )
    );
  };

  const setAdvancedState = () => {
    setAdvanced(true);
  };
  const setBasicState = () => {
    setBasic(true);
  };

  return (
    <>
      <button onClick={setAdvancedState}>Advanced</button>
      <button onClick={setBasicState}>Coin flip</button>
      <ChoiceList choices={choices} handleChoices={handleChoices} />
      {advanced
        ? choices.map((item) => (
            <ProsAndCons
              key={item.id}
              choiceData={item}
              updateProsAndCons={updateProsAndCons}
            />
          ))
        : null}
      {advanced ? <AdvancedChoiceMaker choices={choices} /> : null}

      <p>Picked choices: {choices.map((item) => item.choice).join(", ")}</p>
      {basic ? <BasicChoiceMaker choices={choices} /> : null}
    </>
  );
}

export default App;
