import React, { useState, useEffect } from 'react'
import CoinFlip from './FlipCoin/FlipCoin.jsx'

const BasicChoiceMaker = (choices) => {
    const [currentPairs, setCurrentPairs] = useState([]);
    const [nextRoundChoices, setNextRoundChoices] = useState(choices)

    useEffect(() => {
        pairChoices(nextRoundChoices);
    }, [nextRoundChoices]);

    const pairChoices = (choicesArray) => {
        const pairs = [];
        for (let i = 0; i < choicesArray.length; i += 2) {
            if (choicesArray[i + 1]) {
                pairs.push(choicesArray[i], choicesArray[i + 1])
            } else {
                pairs.push(choicesArray[i])
            }
        }
        setCurrentPairs(pairs)
    }

    const handleWinner = (winner, loser) => {
        setNextRoundChoices((prev) => [...prev, winner]);
        if (loser) {

        }

        if (currentPairs.length === 1 && currentPairs[0].length === 1) {
            return <div>The winner is {currentPairs[0][0].choices}!</div>
        }
    }

    return (
        <div>
           {currentPairs.map((pair, index) => (
            <div key={index}>
                {pair.length === 2 ? (
                    <CoinFlip 
                        choice1={pair[0]}
                        choice2={pair[1]}
                        onDecision={(winner, loser) => handleWinner(winner, loser)}
                    />
                ) : (
                    <p>{pair[0].choices} automatically advances to the next round</p>
                )}
            </div>
           ))} 
        </div>
    );
};

export default BasicChoiceMaker;