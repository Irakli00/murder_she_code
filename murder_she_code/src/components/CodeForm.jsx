function CodeForm() {
  return (
    <div className="editor-container">
      <section className="input-section">
        <h3 className="section-title">Original Code</h3>

        <textarea
          id="input-code"
          className="code-textarea"
          placeholder="Paste your beautiful code here..."
          aria-describedby="input-help"
        ></textarea>
      </section>

      <section className="output-section">
        <h3 className="section-title">Butchered Code</h3>

        <textarea
          id="output-code"
          className="code-textarea"
          readOnly
          placeholder="Your butchered code will appear here..."
          aria-describedby="output-help"
        ></textarea>
      </section>
    </div>
  );
}

export default CodeForm;
// function calculateTotal(items) {
//   let total = 0;
//   for (const item of items) {
//     if (item.price && item.quantity) {
//       total += item.price * item.quantity;
//     }
//   }
//   return total;
// }

// const cart = [
//   { name: "Apple", price: 1.5, quantity: 3 },
//   { name: "Banana", price: 0.8, quantity: 6 },
// ];

// console.log("Total:", calculateTotal(cart));
