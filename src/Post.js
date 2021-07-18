import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import InputOption from "./InputOption";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";

function Post({ name, description, message, photoUrl }) {
  const user = useSelector(selectUser);
  return (
    <div className="post">
      <div className="post_header">
        <Avatar src={user.photoUrl}>{user.email[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Like" color="gray" />
      </div>
    </div>
  );
}

export default Post;
