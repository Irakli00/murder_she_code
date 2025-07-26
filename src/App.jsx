import CodeForm from "./components/CodeForm";
import Controls from "./components/Controls";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Controls></Controls>
        <CodeForm></CodeForm>
      </main>
    </>
  );
}

export default App;
