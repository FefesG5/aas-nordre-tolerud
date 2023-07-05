import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <nav className="navbar">
      <a href="/" className="site-title">
        Ass Nordre Tolerud
      </a>
      <ul>
        <li className="">
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
