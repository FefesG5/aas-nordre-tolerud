import gingerHouseBack from "../images/GingerHouseBack.jpg";
import "../styles/contact.css";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <h2>Contact Us</h2>
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
