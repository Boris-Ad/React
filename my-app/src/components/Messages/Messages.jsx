import React from "react";
import s from "./Messages.module.css";
const Messages = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.dialogs}>
        <div className = {s.dialogs_item}><a href = "/">Adam</a></div>
        <div className = {s.dialogs_item}><a href = "/">Eva</a></div>
        <div className = {s.dialogs_item}><a href = "/">Viper</a></div>
      </div>
      <div className={s.dialogs_text}>
      <div className = {s.dialogs_text_item}><p>Hi</p></div>
      <div className = {s.dialogs_text_item}><p>I want to be yong</p></div>
      <div className = {s.dialogs_text_item}><p>i am animal</p></div>
      </div>
    </div>
  );
};

export default Messages;
