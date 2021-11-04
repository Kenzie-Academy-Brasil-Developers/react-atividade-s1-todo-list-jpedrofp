import { useState } from "react";
import "./styles.css";

const Form = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");

  function handleClick(handler) {
    addTodo(handler);
    setUserInput([]);
  }

  return (
    <div className="container">
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />

      <button type="button" onClick={() => handleClick(userInput)}>
        Enviar
      </button>
    </div>
  );
};

export default Form;
