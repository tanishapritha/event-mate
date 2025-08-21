import React from "react";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>EventMate</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/recommendations">Recommendations</a>
      </nav>
    </header>
  );
};

export default Header;
