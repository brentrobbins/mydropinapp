import React from "react";
import { Menu as Nav, Icon, Button } from "element-react";
import { NavLink } from "react-router-dom";
import logo from '../logo.svg';

const Navbar = ({ user, handleSignout }) => (
  <Nav mode="horizontal"  defaultActive="1">
    <div className="nav-container">
      {/* App Title / Icon */}
      <Nav.Item index="1">
        <NavLink to="/">
          <span className="app-title">
            <img
              src={logo}
              alt="App Icon"
              className="app-icon"
            />
          </span>
        </NavLink>
      </Nav.Item>

      {/* Navbar Items */}
      <div className="nav-itms">
        <Nav.Item index="2">
          <span className="app-user">Hello, {user.attributes.email}</span>
        </Nav.Item>

        <Nav.Item index="3">
          <NavLink to="/profile" className="nav-link">
            <Icon name="setting" />
            Profile
          </NavLink>
        </Nav.Item>

        <Nav.Item index="4">
          <Button type="warning" onClick={handleSignout}>
            Sign Out
          </Button>
        </Nav.Item>
      </div>
    </div>
  </Nav>
);

export default Navbar;
