import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { useTranslation } from "react-i18next";

interface Translations {
  "Aas Nordre Tolerud": string;
  About: string;
  Menu: string;
  Contact: string;
  EN: string;
  NO: string;
}

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

// describe("Header - Norwegian", () => {
//   beforeEach(() => {
//     jest.resetModules();
//     useTranslation().i18n.changeLanguage("no");
//     render(
//       <BrowserRouter>
//         <Header />
//       </BrowserRouter>
//     );
//   });

//   it("renders the site title name 'Aas Nordre Tolerud' ", () => {
//     const siteTitleElement = screen.getByText(/Aas Nordre Tolerud/i);
//     expect(siteTitleElement).toBeInTheDocument();
//   });

//   it("renders the translated site title 'About' navigation in Norwegian", () => {
//     const siteTitleElement = screen.getByText(/Om oss/i);
//     expect(siteTitleElement).toBeInTheDocument();
//   });

//   it("renders the translated site title 'Menu' navigation in Norwegian", () => {
//     const siteTitleElement = screen.getByText(/Meny/i);
//     expect(siteTitleElement).toBeInTheDocument();
//   });

//   it("renders the translated site title 'Contact' navigation in Norwegian", () => {
//     const siteTitleElement = screen.getByText(/Kontakt/i);
//     expect(siteTitleElement).toBeInTheDocument();
//   });
// });
