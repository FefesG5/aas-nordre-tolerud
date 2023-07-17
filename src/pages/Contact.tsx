import gingerHouseBack from "../images/GingerHouseBack.jpg";
import "../styles/contact.css";
import ContactForm from "../components/ContactForm";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("contactUs")}</h2>
      <div className="contact-container">
        <img
          className="contact-image"
          src={gingerHouseBack}
          alt="Ginger House Back View"
        />
      </div>
      <ContactForm />
    </>
  );
}

export default Contact;
