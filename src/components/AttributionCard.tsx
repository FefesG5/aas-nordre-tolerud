import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface AttributionCardProps {
  href: string;
  dishName: string;
  photographer: string;
  imageSrc: string;
  imageKey: string;
}

const CardEntry = styled.div`
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

const CardThumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px;
  border-radius: 50%;
  flex-shrink: 0;
`;

const CardLink = styled.a`
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
  photographer,
  imageSrc,
  imageKey,
}: AttributionCardProps) {
  const { t } = useTranslation();
  return (
    <CardEntry>
      <CardThumbnail
        src={imageSrc}
        width="80px"
        height="80px"
        alt={t(`dishCard.${imageKey}.altText`)}
      />
      <CardLink href={href} target="_blank" rel="noopener noreferrer nofollow">
        {t(`dishCard.${imageKey}.name`)} {t("takenBy")} {photographer}
      </CardLink>
    </CardEntry>
  );
}
