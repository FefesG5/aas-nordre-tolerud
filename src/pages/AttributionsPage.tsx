import { useTranslation } from "react-i18next";
import "../styles/attributionsPage.css";

interface AttributionProps {
  data: Array<{
    href: string;
    imageSrc: string;
    imageKey: string;
    photographer: string;
  }>;
}

export default function AttributionPage({ data }: AttributionProps) {
  const { t } = useTranslation();
  return (
    <div className="attribution-container">
      <h1 className="attribution-title">{t("imageAttributions")}</h1>
      {data.map(({ href, imageSrc, imageKey, photographer }) => (
        <div key={href} className="attribution-entry">
          <img
            src={imageSrc}
            width="100px"
            height="100px"
            alt={t(`dishCard.${imageKey}.altText`)}
            className="attribution-thumbnail"
          />
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="attribution-link"
          >
            {t(`dishCard.${imageKey}.name`)} {t("takenBy")} {photographer}
          </a>
        </div>
      ))}
    </div>
  );
}
