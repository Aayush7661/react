import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Add from "./Add";
import Show from "./Show";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Add />
      <Show />
    </div>
  );
}

export default App;
