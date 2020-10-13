import React from "react";

import "./App.css";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className = "container">
    <Header />
    <Aside />
    <Main />
    </div>
  );
};

export default App;
