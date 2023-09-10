import { useTranslation } from "react-i18next";
import "../styles/iconAttribution.css";

interface IconAttributionProps {
  href: string;
  title: string;
  icon: string;
}

export default function IconAttribution({
  href,
  title,
  icon,
}: IconAttributionProps) {
  const { t } = useTranslation();

  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className="flaticon-link"
    >
      <img src={icon} className="footer-flag-icon" alt="" />
    </a>
  );
}
