import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "./Navbar.css";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <Link className="nav-links" to="/">
          Home
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
