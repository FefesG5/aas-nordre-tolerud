import { useEffect, useState } from "react";
import UpArrow from "../images/icons/UpArrow.png";
import { debounce } from "../utils/debounce";
import "../styles/scrollBtn.css";

const scrollPositionYThreshold = 400;

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
    <button
      onClick={debouncedScroll}
      className="icon-position icon-style"
      aria-label="Scroll to top"
    >
      <img
        src={UpArrow}
        width={50}
        height={50}
        alt="Scroll to top"
        className="icon-position icon-style"
      />
    </button>
  );
}
