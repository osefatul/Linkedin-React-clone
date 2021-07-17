import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import InputOption from "./InputOption";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h2>Sefatullah Omar</h2>
          <p>Description</p>
        </div>
      </div>

      <div className="post_body">
        <p>Message goes here</p>
      </div>

      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
      </div>
    </div>
  );
}

export default Post;
