import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function Navigation() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const { t } = useTranslation();
  return (
    <ul>
      <CustomLink to="/about">{t("About")}</CustomLink>
      <CustomLink to="/menu">{t("Menu")}</CustomLink>
      <CustomLink to="/contact">{t("Contact")}</CustomLink>
    </ul>
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
