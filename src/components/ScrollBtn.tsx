import { useEffect, useState } from "react";
import UpArrow from "../images/icons/UpArrow.webp";
import { debounce } from "../utils/debounce";
import "../styles/scrollBtn.css";
import styled from "styled-components";

const scrollPositionYThreshold = 400;

const ScrollButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 15px;
  z-index: 20;

  background-color: rgba(240, 240, 240, 0.7);
  border: 2px solid #fff;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background: #fff;
    border: 2px solid grey;
  }

  @media (max-width: 600px) {
    height: 50px;
    width: 50px;
  }
`;

const IconImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;

  @media (max-width: 600px) {
    .scroll-button-icon {
      height: 40px;
      width: 40px;
    }
  }
`;

export default function ScrollBtn() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const debouncedScroll = debounce(scrollToTop, 500);

  useEffect(() => {
    const handleScrollUp = () => {
      setShowScrollBtn(window.scrollY > scrollPositionYThreshold);
    };

    window.addEventListener("scroll", handleScrollUp);

    return () => window.removeEventListener("scroll", handleScrollUp);
  }, []);

  if (!showScrollBtn) {
    return null;
  }

  return (
    <ScrollButton onClick={debouncedScroll} aria-label="Scroll to top">
      <IconImage src={UpArrow} alt="Scroll to top" />
    </ScrollButton>
  );
}
