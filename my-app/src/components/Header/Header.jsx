import React from "react";
import s from './Header.module.css';
const Header = () => {
    return(
        <header className={s.header}>
        <div><img src="./../logo192.png" alt="logo"></img></div>
        <h2>React</h2>
      </header>
    );
};
export default Header;