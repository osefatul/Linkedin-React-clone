import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcons from "@material-ui/icons/Notifications";
import profilePic from "./me.jpg";
import { useDispatch } from "react-redux";
import HeaderOption from "./HeaderOption";
import { logout } from "./features/counter/userSlice";
import { auth } from "./Firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />
        <div className="header_search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcons} title="Notifications" />
        <HeaderOption avatar={profilePic} title="me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
