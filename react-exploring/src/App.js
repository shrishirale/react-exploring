import "./App.css";
import ContextEx from "./components/ContextEx/ContextEx";
import Context from "./components/ContextEx/Context";

function App() {
  return (
    <div>
      <Context.Provider value="Shrikant">
        <ContextEx />
      </Context.Provider>
    </div>
  );
}

export default App;
