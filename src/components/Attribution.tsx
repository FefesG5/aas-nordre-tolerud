import "../styles/attribution.css";
import { useTranslation } from "react-i18next";

interface AttributionProps {
  href: string;
  translationKey: string;
  dishName: string;
  photographer: string;
}

export default function Attribution({
  href,
  dishName,
  photographer,
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
        {dishName} {t("takenBy")} {photographer}
      </a>
    </>
  );
}
