import React from "react";

import "./App.css";
import Aside from "./components/Aside/Aside";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter, Route } from "react-router-dom";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import News from "./components/News/News";

const App = (props) => {
  return (
    <BrowserRouter>
    
      <div className="wrapper">
        <Header />
        <Aside />

        <div className="wrapper_content_main">
          <Route path="/messages" component={Messages} />
          <Route path="/profile" component={Main} />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
        </div>

        <Footer />
      </div>
      
    </BrowserRouter>
  );
};

export default App;
