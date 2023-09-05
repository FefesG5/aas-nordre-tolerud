import "../styles/attribution.css";
import { useTranslation } from "react-i18next";

interface AttributionProps {
  href: string;
  translationKey: string;
}

export default function Attribution({
  href,
  translationKey,
}: AttributionProps) {
  const { t } = useTranslation();
  return (
    <>
      <a
        href={href}
        className="attribution-link"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        {t(translationKey)}
      </a>
    </>
  );
}
