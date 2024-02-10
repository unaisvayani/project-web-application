import React from "react";
import Home from "../src/Components/Home";
import Data from "./Components/Data";
import Event from "./Components/Event";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul className="navbar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/data">Data</Link>
              </li>
              <li>
                <Link to="/event">Event</Link>
              </li>
            </ul>
          </nav>
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
