import { createContext, useState } from "react";

import prettier from "prettier";
import * as babelParser from "prettier/parser-babel";
import * as parserEstree from "prettier/plugins/estree";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export function AppProvider({ children }) {
  const [inputCode, setInputCode] = useState(`function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    if (item.price && item.quantity) {
      total += item.price * item.quantity;
    }
  }
  return total;
}

const cart = [
  { name: "Apple", price: 1.5, quantity: 3 },
  { name: "Banana", price: 0.8, quantity: 6 },
];

console.log("Total:", calculateTotal(cart));`);
  const [outputCode, setOutputCode] = useState("");
  const [displayDanceBtn, setDisplayDanceBtn] = useState(false);

  const formatCode = async (code, options) => {
    return await prettier.format(code, {
      parser: "babel",
      plugins: [babelParser, parserEstree],
      ...options,
    });
  };

  async function noIndentations(code) {
    if (!code.trim()) {
      setOutputCode("Nothing to improve");
      return;
    }

    try {
      const result = await formatCode(code, {
        printWidth: 1,
        tabWidth: 0,
        useTabs: false,
        semi: false,
        singleQuote: true,
        bracketSpacing: false,
        arrowParens: "always",
      });
      setOutputCode(result);
    } catch (error) {
      const errorMsg = `No Indentbutchering failed: ${error.message}`;
      setOutputCode(`It's butchered enough`);
      throw new Error(errorMsg);
    }
  }

  function rapGod(code) {
    if (!code.trim()) {
      setOutputCode("Nothing to improve");
      return;
    }

    try {
      let result = code
        .replace(/\s+/g, " ") // whitespace to single space
        //no spaces -->
        .replace(/;\s*/g, ";")
        .replace(/{\s*/g, "{")
        .replace(/}\s*/g, "}")
        .replace(/,\s*/g, ",")
        .replace(/\(\s*/g, "(")
        .replace(/\s*\)/g, ")")
        .replace(/=\s*/g, "=")
        .replace(/\s*==\s*/g, "==")
        .replace(/\s*===\s*/g, "===")
        .replace(/\s*&&\s*/g, "&&")
        .replace(/\s*\|\|\s*/g, "||")
        .replace(/\s*\+\s*/g, "+")
        .replace(/\s*\*\s*/g, "*")
        .replace(/\s*-\s*/g, "-")
        .replace(/\s*\/\s*/g, "/")
        .replace(/\[\s*/g, "[")
        .replace(/\s*\]/g, "]")
        .replace(/:\s*/g, ":")
        .trim();

      setOutputCode(result);
    } catch (error) {
      const errorMsg = `Monster lines butchering failed: ${error.message}`;
      setOutputCode(`It's butchered enough`);
      throw new Error(errorMsg);
    }
  }

  function scramble(code) {
    if (!code.trim()) {
      setOutputCode("Nothing to improve");
      return;
    }

    try {
      const result = code
        .split("\n")
        .map((line, i) => {
          if (line.trim() === "" || i === 0) return line;

          const trimmed = line.trimStart();

          const numTabs = Math.floor(Math.random() * 9);
          let tabString = "";

          for (let i = 0; i < numTabs; i++) {
            const tabLength = Math.floor(Math.random() * 12) + 1;
            tabString += " ".repeat(tabLength);
          }

          return tabString + trimmed;
        })
        .join("\n");

      setOutputCode(result);
    } catch (error) {
      const errorMsg = `Random tab chaos failed: ${error.message}`;
      setOutputCode(`It's butchered enough`);
      throw new Error(errorMsg);
    }
  }

  function scrambleDance() {
    const intervalId = setInterval(() => scramble(inputCode), 400);

    setTimeout(() => {
      clearInterval(intervalId);
      setDisplayDanceBtn(true);
    }, 4000);
  }

  function schizoAttack(code) {
    if (!code.trim()) {
      setOutputCode("Nothing to improve");
      return;
    }

    setOutputCode(inputCode);
  }

  const handleButtonClick = (buttonType, code) => {
    switch (buttonType) {
      case "noIndent":
        noIndentations(code);
        setDisplayDanceBtn(false);
        break;
      case "rapGod":
        rapGod(code);
        setDisplayDanceBtn(false);
        break;
      case "scramble":
        code.trim() && setDisplayDanceBtn(true);
        scramble(code);
        break;
      case "clear":
        setDisplayDanceBtn(false);
        setInputCode("");
        setOutputCode("");
        break;
      case "schizo":
        schizoAttack(code);
        setDisplayDanceBtn(false);

        break;
    }
  };

  return (
    <AppContext.Provider
      value={{
        inputCode,
        setInputCode,
        outputCode,
        setOutputCode,
        formatCode,

        handleButtonClick,
        scrambleDance,
        displayDanceBtn,
        setDisplayDanceBtn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
