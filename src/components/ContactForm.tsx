import { useState } from "react";
import { useTranslation } from "react-i18next";

import InputField from "./InputField";

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
    hideConfirmationModal();
  }

  function hideConfirmationModal() {
    setConfirmModal(false);
  }

  function updateFormData(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
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
        <button type="submit">{t("send")}</button>
        {confirmModal && (
          <div className="modal">
            <div className="modal-content">
              <p>{t("confirmDecision")}</p>
              <button onClick={() => setConfirmModal(false)}>
                {t("cancel")}
              </button>
              <button onClick={() => submitContactDetails()}>
                {t("send")}
              </button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
