import React from "react";

import "./App.css";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";



const App = () => {
  return (
    <div className = "container">
    <Header />
    <Aside />
    <Main />
    <Footer />
    </div>
  );
};

export default App;
