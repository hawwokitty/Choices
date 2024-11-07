import React, { useState, useEffect } from 'react';
import FlipCoin from './FlipCoin/FlipCoin.jsx'

const BasicChoiceMaker = ({choices}) => {
    // console.log(choices)
    const [currentPairs, setCurrentPairs] = useState([]);
    const [nextRoundChoices, setNextRoundChoices] = useState(choices)

    useEffect(() => {
        // console.log("useEffect: nextRoundChoices" + nextRoundChoices[0].choice)
        pairChoices(nextRoundChoices);
        
    }, [nextRoundChoices]);

    const pairChoices = (choicesArray) => {
        const pairs = [];
        // console.log("choiceArray:" + choicesArray)
        for (let i = 0; i < choicesArray.length; i += 2) {
            if (choicesArray[i + 1]) {
                pairs.push([choicesArray[i], choicesArray[i + 1]]);
                // console.log("if: " + pairs)
            } else {
                pairs.push(choicesArray[i])
                // console.log("else: " + pairs)
            }
        }
        setCurrentPairs(pairs)
        // console.log("pairs are:", pairs)
    }

    const handleWinner = (winner, loser) => {
        setNextRoundChoices((prev) => [...prev.filter(choice => choice !== loser), winner]);
        
        if (nextRoundChoices.length === 2) {
            if (currentPairs.length === 1 && currentPairs[0].length === 1) {
                console.log("the overall winner is: ", winner.choice);
            } else {
                pairChoices(nextRoundChoices)
            }
        }
    };

    return (
        <div>
           
            <div key="coinflip">
                {currentPairs.length === 2 ? (
                    <FlipCoin
                        choice1={currentPairs[0][0]}
                        choice2={currentPairs[0][1]}
                        onDecision={(winner, loser) => handleWinner(winner, loser)}
                    />
                ) : (
                    <p>{currentPairs[0]} automatically advances to the next round</p>
                )}
                {/* {console.log(currentPairs[0][0])} */}
            </div>
            
           <p>test</p>
        </div>
    );
};

export default BasicChoiceMaker;