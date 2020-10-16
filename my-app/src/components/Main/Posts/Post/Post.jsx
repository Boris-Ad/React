import React from "react";

import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className = {s.post_top}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuo0My1HA1FkEUlWalJwn3Isxnu5LXzl8VLw&usqp=CAU"
        alt="avatar"
      ></img>
        <span>{props.message}</span>
      </div>
      <button>
        Like<span>{" " + props.like}</span>
      </button>
    </div>
  );
};

export default Post;
