import React from "react";
import { Link } from "react-router-dom";
import Menu from "../menu/Menu";

const Navigation: React.FC = () => (
  <nav>
    <Link to="/new" style={{ textDecoration: "none" }}>
      <Menu label="New" />
    </Link>
    <Link to="/load" style={{ textDecoration: "none" }}>
      <Menu label="Load" />
    </Link>
    <Link to="/settings" style={{ textDecoration: "none" }}>
      <Menu label="Settings" />
    </Link>
    <Link to="/guide" style={{ textDecoration: "none" }}>
      <Menu label="Guide" />
    </Link>
    <Link to="/exit" style={{ textDecoration: "none" }}>
      <Menu label="Exit" />
    </Link>
  </nav>
);

export default Navigation;
