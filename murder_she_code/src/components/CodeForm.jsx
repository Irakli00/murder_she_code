import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function CodeForm() {
  const { inputCode, setInputCode, outputCode } = useContext(AppContext);

  return (
    <div className="editor-container">
      <section className="input-section">
        <h3 className="section-title">Original Code</h3>
        <div className="code-textarea-wrapper">
          <div className="line-numbers"></div>

          <textarea
            id="input-code"
            className="code-textarea"
            placeholder="Paste your code here..."
            aria-describedby="input-help"
            defaultValue={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          ></textarea>
        </div>
      </section>

      <section className="output-section">
        <h3 className="section-title">Butchered Code</h3>
        <div className="code-textarea-wrapper">
          <div className="line-numbers"></div>

          <textarea
            id="output-code"
            className="code-textarea"
            readOnly
            placeholder="Your butchered code will appear here..."
            aria-describedby="output-help"
            value={outputCode}
          ></textarea>
        </div>
      </section>
    </div>
  );
}

export default CodeForm;
