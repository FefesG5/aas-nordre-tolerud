import { useState } from "react";
import { useTranslation } from "react-i18next";

import InputField from "./InputField";
import ConfirmationModal from "./ConfirmationModal";

interface FormType {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const { t } = useTranslation();

  const [confirmModal, setConfirmModal] = useState(false);

  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
    message: "",
  });

  function handleFormSubmission(event: React.FormEvent) {
    event.preventDefault();
    showConfirmationModal();
  }

  function showConfirmationModal() {
    setConfirmModal(true);
  }

  function submitContactDetails() {
    const { name, email, message } = form;
    console.log("Sending data...", { name, email, message });

    setForm({
      name: "",
      email: "",
      message: "",
    });

    hideConfirmationModal();
  }

  function hideConfirmationModal() {
    setConfirmModal(false);
  }

  function updateFormData({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) {
    setForm((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleFormSubmission}>
      <InputField
        id="name"
        type="text"
        name="name"
        value={form.name}
        placeholder={t("name")}
        onChange={updateFormData}
      />

      <InputField
        id="email"
        type="email"
        name="email"
        value={form.email}
        placeholder={t("email")}
        onChange={updateFormData}
      />

      <InputField
        id="message"
        type="text"
        name="message"
        value={form.message}
        minLength={2}
        maxLength={200}
        placeholder={t("message")}
        onChange={updateFormData}
      />

      <div>
        <button className="submit-btn" type="submit">
          {t("send")}
        </button>
        <ConfirmationModal
          isVisible={confirmModal}
          onCancel={() => setConfirmModal(false)}
          onConfirm={submitContactDetails}
          message={t("confirmDecision")}
        />
      </div>
    </form>
  );
}
