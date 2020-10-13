import React from "react";
import './Aside.css';
const Aside = () => {
    return (
        <aside className = "sidebar">
        <nav>
          <ul className = "links">
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