import React from "react";
import "../../../styles/menu.css";
// import { Link } from "react-router";
function Menu() {
  return (
    <div className="menu">
      <ul>
        <li className="isActive">
          <a href="/">
            <span className="material-icons">home</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="material-icons">explore</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="material-icons">group</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
