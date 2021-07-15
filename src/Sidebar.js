import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";

function Sidebar() {
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

        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p>Who Viewed you</p>
            <p className="sidebar_statNumber">2455</p>
          </div>
          <div className="sidebar_stat">
            <p>Views on post</p>
            <p className="sidebar_statNumber">2448</p>
          </div>
        </div>

        <div className="sidebar_bottom"></div>
      </div>
    </div>
  );
}

export default Sidebar;
