import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function Controls() {
  const { inputCode, setOutputCode } = useContext(AppContext);
  function noLines(code) {
    // Ultra narrow formatting - everything wraps at ~15 characters
    const output = code
      .replace(/\s+/g, " ") // Normalize spaces
      .replace(/{\s*/g, "{\n") // Opening braces
      .replace(/;\s*/g, ";\n") // Semicolons
      .replace(/,\s*/g, ",\n") // Commas
      .replace(/}\s*/g, "\n}\n") // Closing braces
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line)
      .map((line) => {
        // Break long lines at ~15 characters
        if (line.length > 15) {
          return line.match(/.{1,15}/g).join("\n");
        }
        return line;
      })
      .join("\n")
      .replace(/\n+/g, "\n"); // Remove multiple newlines

    setOutputCode(output);
  }

  return (
    <section className="button-container">
      <button className="btn btn-primary" onClick={() => noLines(inputCode)}>
        Remove Lines
      </button>
      <button className="btn btn-primary">Monster Lines</button>
      <button className="btn btn-primary">Pure Chaos</button>
      <button className="btn btn-evil">EVIL MODE</button>
      <button className="btn btn-clear">Clear</button>
    </section>
  );
}

export default Controls;
