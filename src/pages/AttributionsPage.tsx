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
      {data.map((attribution) => (
        <AttributionCard
          key={attribution.href}
          href={attribution.href}
          imageSrc={attribution.imageSrc}
          imageKey={attribution.imageKey}
          photographer={attribution.photographer}
        />
      ))}
      <ScrollBtn />
    </div>
  );
}
