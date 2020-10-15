import React from "react";
import { NavLink } from "react-router-dom";
import s from './Aside.module.css';
const Aside = () => {
    return (
        <aside className = {s.sidebar}>
        <nav>
          <ul className = {s.links}>
            <li><NavLink to = "/profile">Profile</NavLink></li>
            <li><NavLink to = "/messages">Messages</NavLink></li>
            <li><NavLink to = "/news">News</NavLink></li>
            <li><NavLink to = "/music">Music</NavLink></li>
            <li><NavLink to = "/setting">Setting</NavLink></li>
          </ul>
        </nav>
      </aside>
    );
   
};

export default Aside;