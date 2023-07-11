import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "../Contact";

describe("Contact", () => {
  it("should render 'Contact Us' heading", () => {
    render(<Contact />);
    const headingElement = screen.getByText(/contact us/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("should render an image", () => {
    render(<Contact />);
    const imageElement = screen.getByAltText(/Ginger House Back View/i);
    expect(imageElement).toBeInTheDocument();
  });
});
