import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface AttributionCardProps {
  href: string;
  imageSrc: string;
  imageKey: string;
  photographer: string;
}

const CardContainer = styled.div`
  margin: 20px 0;
  background: #fff;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px;
  border-radius: 50%;
  flex-shrink: 0;
`;

const AttributionLink = styled.a`
  transition: color 0.3s ease;
  font-weight: 500;
  flex-grow: 1;
  margin-left: 15px;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  color: black;
  font-size: 1.2rem;
`;

export default function AttributionCard({
  href,
  imageSrc,
  imageKey,
  photographer,
}: AttributionCardProps) {
  const { t } = useTranslation();
  return (
    <CardContainer>
      <Thumbnail src={imageSrc} alt={t(`dishcard.${imageKey}.altText`)} />
      <AttributionLink
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        {t(`dishCard.${imageKey}.name`)} {t("takenBy")} {photographer}
        {photographer}
      </AttributionLink>
    </CardContainer>
  );
}
