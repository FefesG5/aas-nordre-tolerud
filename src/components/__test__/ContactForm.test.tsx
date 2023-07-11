import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "../ContactForm";

describe("ContactForm", () => {
  it("should render 'Name' label", () => {
    render(<ContactForm />);
    const labelElement = screen.getByLabelText(/name:/i);
    expect(labelElement).toBeInTheDocument();
  });
  it("should render 'Email' label", () => {
    render(<ContactForm />);
    const labelElement = screen.getByLabelText(/email:/i);
    expect(labelElement).toBeInTheDocument();
  });
  it("should render 'Message' label", () => {
    render(<ContactForm />);
    const labelElement = screen.getByLabelText(/message:/i);
    expect(labelElement).toBeInTheDocument();
  });
});
