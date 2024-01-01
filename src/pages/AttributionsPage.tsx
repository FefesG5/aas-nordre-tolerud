import { useTranslation } from "react-i18next";
import ScrollBtn from "../components/ScrollBtn";
import "../styles/attributionsPage.css";
import { useEffect } from "react";
import AttributionCard from "../components/AttributionCard";

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

  useEffect(() => {
    const element = document.querySelector("#attributions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="attribution-container">
      <h1 id="attributions" className="attribution-title">
        {t("imageAttributions")}
      </h1>

      {data.map(({ href, imageSrc, imageKey, photographer }) => (
        <AttributionCard
          key={href}
          href={href}
          imageSrc={imageSrc}
          imageKey={imageKey}
          photographer={photographer}
          dishName={imageKey}
        />
      ))}
      <ScrollBtn />
    </div>
  );
}
