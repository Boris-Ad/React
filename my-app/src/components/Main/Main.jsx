import React from "react";
import s from "./Main.module.css";
import Posts from "./Posts/Posts";
import Profile from "./Posts/Profile/Profile";

const Main = () => {
  return (
    <main className={s.main}>
      <div className={s.banner}>
        
        <Profile />
      </div>

      <Posts />
    </main>
  );
};

export default Main;
