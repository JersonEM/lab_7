import React, { useState } from "react";

export const Button = ({ text }) => {
    const [randomNumber, setRandomNumber] = useState(null);
  
    const { text } = props;

    const[count, setCount] = useState(0);

    function handlerButton(){
        setCount(count + 5);
    }
  
    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(newRandomNumber);
    };

    return (
        <button onClick={generateRandomNumber}>
            {text} {randomNumber !== null ? randomNumber : "Generar un numero aleatorio"}
        </button>
    );
};
