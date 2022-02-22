import { render, screen, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import Discovers from "./Discovers";

afterEach(() => {
  cleanup();
});

describe("Discovers", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Discovers />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render discovers component text", () => {
    render(<Discovers />);
    const discoverElement = screen.getByTestId("discovers_test");
    expect(discoverElement).toBeInTheDocument;
    expect(discoverElement).toHaveTextContent("Discover Airbnb Experiences");
  });
});
