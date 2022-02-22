import { render, screen, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import Destinations from "./Destinations";

afterEach(() => {
  cleanup();
});

describe("Destinations", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Destinations />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render destinations content", () => {
    render(<Destinations />);
    const destinationinfoElement = screen.getByTestId("destinations_test");
    expect(destinationinfoElement).toBeInTheDocument();
    expect(destinationinfoElement).toHaveTextContent(
      "Inspiration for future getaways"
    );
  });
});
