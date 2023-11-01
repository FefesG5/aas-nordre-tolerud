import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DishCard from "../DishCard";
import Panzanella from "../../images/Panzanella.jpg";

const MockDishCard = () => {
  return (
    <DishCard
      imageSrc={Panzanella}
      dishName="Sample Dish Title"
      description="Sample dish Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, labore?"
    />
  );
};

describe("DishCard", () => {
  it("should render an image with a title", () => {
    render(<MockDishCard />);
    const titleElement = screen.getByText(/Sample Dish Title/i);
    expect(titleElement).toBeInTheDocument();
  });
  it("should render an image with a description", () => {
    render(<MockDishCard />);
    const descriptionElement = screen.getByText(
      /Sample dish Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, labore?/i
    );
    expect(descriptionElement).toBeInTheDocument();
  });
  it("is should render an image Sample Dish", () => {
    render(<MockDishCard />);
    const imageElement = screen.getByAltText(/Sample Dish Title/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", Panzanella);
  });
});
