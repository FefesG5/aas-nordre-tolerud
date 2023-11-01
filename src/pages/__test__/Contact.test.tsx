import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "../Contact";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import i18n from "../../i18n";

describe("Contact", () => {
  it("should render 'Contact Us' heading", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Contact />
        </BrowserRouter>
      </I18nextProvider>
    );
    const headingElement = screen.getByText(/contact us/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("should render an image", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Contact />
        </BrowserRouter>
      </I18nextProvider>
    );
    const imageElement = screen.getByAltText(/Ginger House Back View/i);
    expect(imageElement).toBeInTheDocument();
  });
});
