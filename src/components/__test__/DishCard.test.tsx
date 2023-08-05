import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DishCard from "../DishCard";
import sampleDish from "../../images/SampleDish.jpg";

const MockDishCard = () => {
  return (
    <DishCard
      image={sampleDish}
      title="Sample Dish Title"
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
});
