import { useTranslation } from "react-i18next";

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
        <button onClick={onCancel}>{t("cancel")}</button>
        <button onClick={onConfirm}>{t("confirm")}</button>
      </div>
    </div>
  );
}
