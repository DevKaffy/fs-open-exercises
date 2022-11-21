import React from "react";

const Button = ({ text, anecdotes, setSelected }) => {
  function randomNumber() {
    return setSelected(Math.floor(Math.random() * anecdotes.length));
  }
  return <button onClick={randomNumber}>{text}</button>;
};

export default Button;
