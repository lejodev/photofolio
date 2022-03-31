import React from "react";
import "./_navigation.scss";

const Navigation = () => {
  return (
    <header className="navigation">
      <div className="logo">Photofolio</div>
      <nav className="nav-bar">
        <ul className="links">
          <li className="link">ABOUT</li>
          <li className="link">GALLERY</li>
          <li className="link">CONTACT</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
