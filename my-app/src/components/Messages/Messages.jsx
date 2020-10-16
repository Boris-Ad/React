import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Messages.module.css";

const MessageItem = (props) => {
  return (
    <div className={s.dialogs_item}>
      <NavLink to={"/messages/" + props.id}> {props.name} </NavLink>
    </div>
  );
};

const DialogsTextItem = (props) => {
  return (
    <div className={s.dialogs_text_item}>
      <p>{props.text}</p>
    </div>
  );
};

const Messages = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.dialogs}>
        <MessageItem name="Adam" id="1" />
        <MessageItem name="Eva" id="2" />
        <MessageItem name="Viper" id="3" />
        <MessageItem name="Cat" id="4" />
      </div>
      <div className={s.dialogs_text}>
        <DialogsTextItem text="Hi" />
        <DialogsTextItem text="I want to be yong" />
        <DialogsTextItem text="i am animal" />
      </div>
    </div>
  );
};

export default Messages;
