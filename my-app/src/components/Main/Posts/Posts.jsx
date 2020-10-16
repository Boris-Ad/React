import React from "react";
import Post from "./Post/Post";
import s from "./Posts.module.css";

const Posts = (props) => {
  return (
    <div className={s.posts}>
      <form>
        <p>
          <b>Введите ваш отзыв:</b>
        </p>
        <p>
          <textarea rows="2" cols="30" name="text"></textarea>
        </p>
        <p>
          <input type="submit" value="Отправить"></input>
        </p>
      </form>
      <Post message="Hello, how are you?" like = "1"/>
      <Post message="I em fine!" like = "0" />
    </div>
  );
};
export default Posts;
