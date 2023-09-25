import { useState } from "react";
import { useTranslation } from "react-i18next";

import InputField from "./InputField";

function ContactForm() {
  const { t } = useTranslation();

  const [confirmModal, setConfirmModal] = useState(false);

  interface FormType {
    name: string;
    email: string;
    message: string;
  }

  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setConfirmModal(true);
  }

  function sendData() {
    setConfirmModal(false);
    console.log("Sending data...", form);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id="name"
        type="text"
        name="name"
        value={form.name}
        placeholder={t("name")}
        onChange={handleChange}
      />

      <InputField
        id="email"
        type="email"
        name="email"
        value={form.email}
        placeholder={t("email")}
        onChange={handleChange}
      />

      <InputField
        id="message"
        type="text"
        name="message"
        value={form.message}
        minLength={2}
        maxLength={200}
        placeholder={t("message")}
        onChange={handleChange}
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
              <button onClick={() => sendData()}>{t("send")}</button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
