import "../styles/contact.css";
import ContactForm from "../components/ContactForm";
import ScrollBtn from "../components/ScrollBtn";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("contactUs")}</h2>
      <div className="contact-container"></div>
      <ContactForm />
      <ScrollBtn />
    </>
  );
}
