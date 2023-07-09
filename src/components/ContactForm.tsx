import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <form>
      <label htmlFor="name" className="contact-form-label">
        Name:{" "}
      </label>
      <div>
        <input
          className="contact-form-input"
          type="text"
          id="name"
          name="name"
          value={name}
          required
          placeholder="Name"
        ></input>
      </div>
      <div>
        <label htmlFor="email" className="contact-form-label">
          Email:{" "}
        </label>
        <input
          className="contact-form-input"
          type="email"
          id="email"
          name="email"
          value={email}
          required
          placeholder="Email"
        ></input>
      </div>
      <div>
        <label htmlFor="message" className="contact-form-label">
          Message:{" "}
        </label>
        <input
          className="contact-form-input"
          type="text"
          id="message"
          name="message"
          value={message}
          required
          minLength={2}
          maxLength={200}
          placeholder="Message"
        ></input>
      </div>
    </form>
  );
}

export default ContactForm;
