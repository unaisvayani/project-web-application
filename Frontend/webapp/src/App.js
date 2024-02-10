import Home from "../src/Components/Home";
import Data from "./Components/Data";
import Event from "./Components/Event";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Data />
        <Event />
      </header>
    </div>
  );
}

export default App;
