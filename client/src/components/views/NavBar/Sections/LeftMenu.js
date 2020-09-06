import React from "react";
import { Menu } from "antd";
import "./Navbar.css";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a className="nav-links" href="/">
          Home
        </a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
