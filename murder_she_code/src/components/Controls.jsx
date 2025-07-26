import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";

function Controls() {
  const { inputCode, handleButtonClick } = useContext(AppContext);

  return (
    <section className="button-container">
      <button
        className="btn btn-primary"
        onClick={() => handleButtonClick("noIndent", inputCode)}
      >
        Remove Indentations
      </button>

      <button
        className="btn btn-primary"
        onClick={() => handleButtonClick("rapGod", inputCode)}
      >
        Single breath
      </button>
      <button
        className="btn btn-primary"
        onClick={() => handleButtonClick("scramble", inputCode)}
      >
        Scramble it
      </button>
      <button
        className="btn btn-evil"
        onClick={() => handleButtonClick("schizo", inputCode)}
      >
        Change Something
      </button>
      <button
        className="btn btn-clear"
        onClick={() => handleButtonClick("clear", inputCode)}
      >
        Clear
      </button>
    </section>
  );
}

export default Controls;
