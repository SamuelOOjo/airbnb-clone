import { render, screen, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import Home from "./Home";

afterEach(() => {
  cleanup();
});

describe("Home", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render home component text", () => {
    render(<Home />);
    const homeElement = screen.getByTestId("home_test");
    expect(homeElement).toBeInTheDocument;
    expect(homeElement).toHaveTextContent("Discover Airbnb Experiences");
  });
});
