import React, { useState } from 'react';
import './FlipCoin.css';

const CoinToss = ({ choice1, choice2, onDecision }) => {
    const defaultImageUrl = 'https://media.geeksforgeeks.org/wp-content/uploads/20231016151806/tails.png'; // Default image
    const [coinFace, setCoinFace] = useState(defaultImageUrl); // Initialize with default image
    const [resultText, setResultText] = useState('');
    const [isFlipping, setIsFlipping] = useState(false);

    const tossCoin = () => {
        if (isFlipping) return; // Prevent multiple clicks
        setIsFlipping(true);
        const randomVal = Math.random();
        const decidingWinner = randomVal < 0.5 ? choice1 : choice2;
        const decidingLoser = decidingWinner == choice1 ? choice2 : choice1;
        const decidingChoice = [decidingWinner, decidingLoser];
        console.log("decidingChoice: " + decidingChoice[0].choice, decidingChoice[1].choice )
        const faceCoin = randomVal < 0.5 ? 'Heads' : 'Tails';
        const imageUrl = faceCoin === 'Heads' ? 
            'https://media.geeksforgeeks.org/wp-content/uploads/20231016151817/heads.png' : 
            'https://media.geeksforgeeks.org/wp-content/uploads/20231016151806/tails.png';

        setTimeout(() => {
            setCoinFace(imageUrl);
            setIsFlipping(false);
            setTimeout(() => {
                setResultText(`Result: ${faceCoin}`);
                onDecision(decidingWinner, decidingLoser)
            }, 500);
        }, 1000);
    };

    return (
        <div className="coin-container">
            <h1 className="title">Coin Flip</h1>
            <h3>Let the coin decide your fate!</h3>
            <p>Choice 1: {choice1.choice}</p>
            <p>Choice 2: {choice2.choice}</p>
            <br />
            <div className={`coin ${isFlipping ? 'flip' : ''}`} onClick={tossCoin}>
                <img src={coinFace} alt={coinFace.includes('heads') ? 'Heads' : 'Tails'} />
            </div>
            <p className="result" style={{ opacity: resultText ? 1 : 0 }}>
                {resultText}
            </p>
        </div>
    );
}

export default CoinToss;