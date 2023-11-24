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
  if (!isVisible) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  );
}
