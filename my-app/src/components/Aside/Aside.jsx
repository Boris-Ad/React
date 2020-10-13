import React from "react";
import s from './Aside.module.css';
const Aside = () => {
    return (
        <aside className = {s.sidebar}>
        <nav>
          <ul className = {s.links}>
            <li><a href = "/">Главная</a></li>
            <li><a href = "/">Условия</a></li>
            <li><a href = "/">Цены</a></li>
            <li><a href = "/">О нас</a></li>
          </ul>
        </nav>
      </aside>
    );
   
};

export default Aside;