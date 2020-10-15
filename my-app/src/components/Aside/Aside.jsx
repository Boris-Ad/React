import React from "react";
import s from './Aside.module.css';
const Aside = () => {
    return (
        <aside className = {s.sidebar}>
        <nav>
          <ul className = {s.links}>
            <li><a href = "/profile">Profile</a></li>
            <li><a href = "/messages">Messages</a></li>
            <li><a href = "/news">News</a></li>
            <li><a href = "/music">Music</a></li>
            <li><a href = "/setting">Setting</a></li>
          </ul>
        </nav>
      </aside>
    );
   
};

export default Aside;