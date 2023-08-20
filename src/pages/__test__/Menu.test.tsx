import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Menu from "../Menu";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

describe("Menu", () => {
  it("should render 'Featured Cuisine' title", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Menu />
      </I18nextProvider>
    );
    const featuredTitle = screen.getByText(/featured cuisine/i);
    expect(featuredTitle).toBeInTheDocument();
  });

  it("should render 'Mediterranean Theme Cuisine' title", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Menu />
      </I18nextProvider>
    );
    const mediterraneanTitle = screen.getByText(/mediterranean theme cuisine/i);
    expect(mediterraneanTitle).toBeInTheDocument();
  });
});
