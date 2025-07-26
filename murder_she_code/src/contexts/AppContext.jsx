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

console.log("Total:", calculateTotal(cart));
`);
  const [outputCode, setOutputCode] = useState("");

  const formatCode = async (code, options) => {
    return await prettier.format(code, {
      parser: "babel",
      plugins: [babelParser, parserEstree],
      ...options,
    });
  };

  async function noLines(code) {
    try {
      const result = await formatCode(code, {
        printWidth: 15,
        tabWidth: 1,
        useTabs: false,
        semi: false,
        singleQuote: true,
        bracketSpacing: false,
        arrowParens: "always",
      });
      setOutputCode(result);
      return result;
    } catch (error) {
      const errorMsg = `Tiny lines butchering failed: ${error.message}`;
      setOutputCode(`// ${errorMsg}`);
      throw new Error(errorMsg);
    }
  }

  return (
    <AppContext.Provider
      value={{
        inputCode,
        setInputCode,
        outputCode,
        setOutputCode,
        formatCode,

        noLines,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
