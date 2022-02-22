import { render, screen, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import Cards from "./Cards";

afterEach(() => {
  cleanup();
});

describe("Cards", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Cards />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render home component text", () => {
    render(<Cards />);
    const cardsElement = screen.getByTestId("cards_test");
    expect(cardsElement).toBeInTheDocument;
    expect(cardsElement).toHaveTextContent("Mont-Tremblant");
  });
});
