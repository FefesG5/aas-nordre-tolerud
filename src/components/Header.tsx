import React from "react";
import "../styles/header.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NorwayIcon from "../images/NorwayIcon.png";
import UnitedKingdomIcon from "../images/UnitedKingdomIcon.png";

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <Link to="/" className="site-title">
        Aas Nordre Tolerud
      </Link>
      <ul>
        <CustomLink to="/about">{t("About")}</CustomLink>
        <CustomLink to="/menu">{t("Menu")}</CustomLink>
        <CustomLink to="/contact">{t("Contact")}</CustomLink>
      </ul>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="language-buttons">
        <div
          className={`language-button ${
            i18n.language === "en" ? "active" : ""
          }`}
          onClick={() => changeLanguage("en")}
        >
          <img src={UnitedKingdomIcon} className="flag-icon" alt="" />
        </div>
        <div
          className={`language-button ${
            i18n.language === "no" ? "active" : ""
          }`}
          onClick={() => changeLanguage("no")}
        >
          {" "}
          <img src={NorwayIcon} className="flag-icon" alt="" />
        </div>
      </div>
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
