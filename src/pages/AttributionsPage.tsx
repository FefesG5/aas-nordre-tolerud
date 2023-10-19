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
    <div className="attribution-container">
      <h1 className="attribution-title">Image Attributions</h1>
      {data.map(({ href, imageKey, photographer }) => (
        <div key={href} className="attribution-entry">
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
