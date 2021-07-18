import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";
import { selectUser } from "./features/counter/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  //get user from the data base and then pull its information.
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://i.pinimg.com/originals/da/79/ef/da79ef416fb150d86d1a4c3f20055215.jpg"
          alt=""
        />
        <Avatar src={user.photoURL} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar__stat">
          <p>Who Viewed you</p>
          <p className="sidebar_statNumber">2455</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post </p>
          <p className="sidebar_statNumber">2448</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("react.js")}
        {recentItem("programming")}
        {recentItem("SoftwareDeveloping")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
