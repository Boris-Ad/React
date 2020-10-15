import React from "react";
import s from './Music.module.css';
import fot from './../img/trey.jpg';
const Music = (props) => {
    return (
        <div className = {s.container}>
         <img src = {fot} alt = "trey"></img>   
        </div>

    );
};
export default Music;