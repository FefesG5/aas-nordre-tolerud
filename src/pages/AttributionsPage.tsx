import "../styles/attributionsPage.css";
import { useTranslation } from "react-i18next";

interface AttributionProps {
  data: Array<{
    href: string;
    imageKey: string;
    photographer: string;
  }>;
}

export default function AttributionPage({ data }: AttributionProps) {
  const { t } = useTranslation();
  return (
    <div>
      <h1>Image Attributions</h1>
      {data.map((item, index) => (
        <div key={index} className="attribution-item">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="attribution-link"
          >
            {t(`dishCard.${item.imageKey}.name`)} {t("takenBy")}{" "}
            {item.photographer}
          </a>
        </div>
      ))}
    </div>
  );
}
