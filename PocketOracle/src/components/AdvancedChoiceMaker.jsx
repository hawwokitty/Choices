import React from "react";

export default function AdvancedChoiceMaker({ choices }) {


    
  return (
    <div>
      {choices.map((item, index) => (
        <div key={index}>
        <p>{item.choice}</p>
        <p>Pros: {item.pros}</p>
        <p>Cons: {item.cons}</p>
        <button>Pick this</button>
        </div>
      ))}
    </div>
  );
}
