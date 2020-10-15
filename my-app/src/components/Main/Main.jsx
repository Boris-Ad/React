import React from "react";
import s from './Main.module.css';
import Posts from "./Posts/Posts";

const Main = () => {
    return (
        <main className = {s.main}>
        <div className = {s.banner}>
            <h1>Lorem ipsum dolor sit amet </h1>
            <h1>consectetur adipisicing elit. Delectus, optio?</h1>
        </div>
        <Posts />
        </main>
        
    );
};

export default Main;