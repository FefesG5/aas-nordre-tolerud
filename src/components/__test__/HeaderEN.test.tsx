jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: "3rdParty",
    init: () => {},
  },
}));

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

describe("Header - English", () => {
  beforeEach(() => {
    jest.resetModules();
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  it("renders the site title name 'Aas Nordre Tolerud' ", () => {
    const siteTitleElement = screen.getByText(/Aas Nordre Tolerud/i);
    expect(siteTitleElement).toBeInTheDocument();
  });

  it("renders the translated site title 'About' navigation in English", () => {
    const siteTitleElement = screen.getByRole("link", { name: /About/i });
    expect(siteTitleElement).toBeInTheDocument();
  });

  it("renders the translated site title 'Menu' navigation in English", () => {
    const siteTitleElement = screen.getByText(/Menu/i);
    expect(siteTitleElement).toBeInTheDocument();
  });

  it("renders the translated site title 'Contact' navigation in English", () => {
    const siteTitleElement = screen.getByText(/Contact/i);
    expect(siteTitleElement).toBeInTheDocument();
  });
});
