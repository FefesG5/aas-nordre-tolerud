import { useEffect, useState } from "react";
import UpArrow from "../images/UpArrow.png";
import "../styles/scrollBtn.css";

export default function ScrollBtn() {
  const [showScrollBtn, setshowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScrollUp = () => {
      setshowScrollBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScrollUp);

    return () => window.removeEventListener("scroll", handleScrollUp);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showScrollBtn) {
    return null;
  }

  return (
    <img
      src={UpArrow}
      width={50}
      height={50}
      alt="Scroll to top"
      onClick={scrollToTop}
      className="icon-position icon-style"
    />
  );
}
