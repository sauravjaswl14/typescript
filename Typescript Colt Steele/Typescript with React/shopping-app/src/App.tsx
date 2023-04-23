import React from "react";
import Greeter from "./components/Greeter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Greeter person="colt" />
      <Greeter person="blue" />
      <Greeter person="Elton" />
    </div>
  );
}

export default App;
