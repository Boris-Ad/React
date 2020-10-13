import React from "react";
import s from './Main.module.css';
import Posts from "./Posts/Posts";

const Main = () => {
    return (
        <main className = {s.main}>
        <div className = {s.banner}>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, optio?</h2>
        </div>
        <Posts />
        </main>
        
    );
};

export default Main;