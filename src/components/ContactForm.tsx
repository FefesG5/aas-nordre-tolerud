import { useState } from "react";

function ContactForm() {
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

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  }

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
          value={form.name}
          required
          placeholder="Name"
          onChange={handleChange}
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
          value={form.email}
          required
          placeholder="Email"
          onChange={handleChange}
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
          value={form.message}
          required
          minLength={2}
          maxLength={200}
          placeholder="Message"
          onChange={handleChange}
        ></input>
      </div>
    </form>
  );
}

export default ContactForm;
