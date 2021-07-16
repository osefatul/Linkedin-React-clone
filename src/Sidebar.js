import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="siebar_hash">#</span>
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
        <Avatar className="sidebar_avatar" />
        <h2>Sefatullah Omar</h2>
        <h4>sefaullahomar2@gmail.com</h4>
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
