import React from "react";
import "./Appbar.css";
import SettingsIcon from "@material-ui/icons/Settings";
import Image from '../../assets/images/UndrawNotification.svg'

const Appbar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-icon">
          <img
            className="slack-image"
            src={Image}
            alt=""
          />
        </div>
        <div className="navbar-heading">WUPHF</div>
        <div className="navbar-settings">
          <SettingsIcon />
        </div>
      </nav>
      {props.children}
    </React.Fragment>
  );
};

export default Appbar;
