import React from "react";
import "../styles/header.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="site-title">
        Ass Nordre Tolerud
      </Link>
      <ul>
        <CustomLink to="/menu">Menu</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Header;
