import { useTranslation } from "react-i18next";
import "../styles/confirmationModal.css";

interface ConfirmModalProps {
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

export default function ConfirmationModal({
  isVisible,
  onConfirm,
  onCancel,
  message,
}: ConfirmModalProps) {
  const { t } = useTranslation();
  if (!isVisible) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <p className="modal-message">{message}</p>
        <button className="btn-text" onClick={onCancel}>
          {t("cancel")}
        </button>
        <button className="btn-text" onClick={onConfirm}>
          {t("confirm")}
        </button>
      </div>
    </div>
  );
}
