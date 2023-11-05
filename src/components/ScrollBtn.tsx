import UpArrow from "../images/UpArrow.png";
import "../styles/scrollBtn.css";

interface ScrollBtnProps {
  onClick: () => void;
  show: boolean;
}

export default function ScrollBtn({ onClick, show }: ScrollBtnProps) {
  if (!show) {
    return null;
  }
  return (
    <img
      src={UpArrow}
      width={50}
      height={50}
      alt=""
      onClick={onClick}
      className="icon-position icon-style"
    />
  );
}
