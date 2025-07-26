import { createContext, useState } from "react";

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

  return (
    <AppContext.Provider
      value={{
        inputCode,
        setInputCode,
        outputCode,
        setOutputCode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
