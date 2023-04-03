import React from "react";
import Header from "../Header";
import "./App.css";
import FoodList from "../food/FoodList";

function App() {
  return (
    <div className="App">
      <Header slogan="Man, you MUST be sick of hearing my voice by now!" />
      <FoodList />
    </div>
  );
}

export default App;
