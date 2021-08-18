import React from "react";
import Story from "./story/story";
import "../../styles/mainSide.css";
import Feed from "./feed/feed";
import Room from "./room/room";
import Post from "./post/post";

function MainSide() {
  return (
    <div className="main_side">
      <Story />
      <Feed />
      <Room />
      <Post />
    </div>
  );
}

export default MainSide;
