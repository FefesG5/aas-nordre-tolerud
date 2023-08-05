import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "../ContactForm";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

describe("ContactForm", () => {
  it("should render 'Name' label", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ContactForm />
      </I18nextProvider>
    );
    const labelElement = screen.getByLabelText(/name:/i);
    expect(labelElement).toBeInTheDocument();
  });
  it("should render 'Email' label", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ContactForm />
      </I18nextProvider>
    );
    const labelElement = screen.getByLabelText(/email:/i);
    expect(labelElement).toBeInTheDocument();
  });
  it("should render 'Message' label", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ContactForm />
      </I18nextProvider>
    );
    const labelElement = screen.getByLabelText(/message:/i);
    expect(labelElement).toBeInTheDocument();
  });
});
