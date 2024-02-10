import Home from "../src/Components/Home";
import Data from "./Components/Data";
import Event from "./Components/Event";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<Data />} />
            <Route path="/event" element={<Event />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
