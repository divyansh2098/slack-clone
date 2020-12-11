import React from "react";
import "./Appbar.css";
import SettingsIcon from "@material-ui/icons/Settings";

const Appbar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-icon">
          <img
            className="slack-image"
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt=""
          />
        </div>
        <div className="navbar-heading">slack-clone</div>
        <div className="navbar-settings">
          <SettingsIcon />
        </div>
      </nav>
      {props.children}
    </React.Fragment>
  );
};

export default Appbar;
