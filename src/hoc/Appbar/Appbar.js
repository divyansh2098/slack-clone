import React from "react";
import "./Appbar.css";
import SettingsIcon from "@material-ui/icons/Settings";

const Appbar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-settings">
          <SettingsIcon />
        </div>
      </nav>
      {props.children}
    </React.Fragment>
  );
};

export default Appbar;
