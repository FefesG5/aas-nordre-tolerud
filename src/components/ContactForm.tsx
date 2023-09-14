import { useState } from "react";
import { useTranslation } from "react-i18next";

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
      <label htmlFor="name" className="contact-form-label">
        {t("name")}:{" "}
      </label>
      <div>
        <input
          className="contact-form-input"
          type="text"
          id="name"
          name="name"
          value={form.name}
          required
          placeholder={t("name")}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="email" className="contact-form-label">
          {t("email")}:{" "}
        </label>
        <input
          className="contact-form-input"
          type="email"
          id="email"
          name="email"
          value={form.email}
          required
          placeholder={t("email")}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="message" className="contact-form-label">
          {t("message")}:{" "}
        </label>
        <input
          className="contact-form-input"
          type="text"
          id="message"
          name="message"
          value={form.message}
          required
          minLength={2}
          maxLength={200}
          placeholder={t("message")}
          onChange={handleChange}
        ></input>
      </div>
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
