import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function CodeForm() {
  const {
    inputCode,
    setInputCode,
    outputCode,
    displayDanceBtn,
    setDisplayDanceBtn,
    scrambleDance,
  } = useContext(AppContext);

  return (
    <div className="editor-container">
      <section className="input-section">
        <div className="input-header">
          <h3 className="section-title">Original Code</h3>
        </div>
        <div className="code-textarea-wrapper">
          <div className="line-numbers"></div>

          <textarea
            id="input-code"
            className="code-textarea"
            placeholder="Paste your code here..."
            aria-describedby="input-help"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          ></textarea>
        </div>
      </section>

      <section className="output-section">
        <div className="output-header">
          <h3 className="section-title">Butchered Code</h3>
          {displayDanceBtn && (
            <button
              onClick={() => {
                setDisplayDanceBtn(false);
                scrambleDance();
              }}
            >
              Make it dance
            </button>
          )}
        </div>
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
