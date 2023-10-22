import React from "react";
import "../styles/header.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NorwayIcon from "../images/NorwayIcon.png";
import UnitedKingdomIcon from "../images/UnitedKingdomIcon.png";

interface CustomLinkProps {
  to: string;
  className: string;
  children: React.ReactNode;
}

export default function Header() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: "en", icon: UnitedKingdomIcon },
    { code: "no", icon: NorwayIcon },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="site-title">
        Aas Nordre Tolerud
      </Link>
      <ul>
        <CustomLink to="/about" className="navbar-link">
          {t("about")}
        </CustomLink>
        <CustomLink to="/menu" className="navbar-link">
          {t("menu")}
        </CustomLink>
        <CustomLink to="/contact" className="navbar-link">
          {t("contact")}
        </CustomLink>
      </ul>
      <div className="language-buttons">
        {languages.map((lang) => (
          <div
            key={lang.code}
            className={`language-button ${
              i18n.language === lang.code ? "active" : ""
            }`}
            onClick={() => changeLanguage(lang.code)}
          >
            <img src={lang.icon} className="flag-icon" alt="" />
          </div>
        ))}
      </div>
    </nav>
  );
}

function CustomLink({ to, children, className, ...props }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    </li>
  );
}
