import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

interface Translations {
  "Aas Nordre Tolerud": string;
  About: string;
  Menu: string;
  Contact: string;
  EN: string;
  NO: string;
}

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: keyof Translations) => {
      const translations = {
        "Aas Nordre Tolerud": "Your translated site title",
        About: "Your translated About",
        Menu: "Your translated Menu",
        Contact: "Your translated Contact",
        EN: "Your translated EN",
        NO: "Your translated NO",
      };
      return translations[key] || key;
    },
    i18n: { language: "en" },
  }),
}));

describe("Header", () => {
  it("renders the translated site title", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const siteTitleElement = screen.getByText(/Aas Nordre Tolerud/i);
    expect(siteTitleElement).toBeInTheDocument();
  });
});
