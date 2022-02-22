import { render, screen, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import DestinationInfo from "./DestinationInfo";

afterEach(() => {
  cleanup();
});

describe("DestinationInfo", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DestinationInfo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render background content", () => {
    render(<DestinationInfo />);
    const destinationinfoElement = screen.getByTestId("destinationInfo_test");
    expect(destinationinfoElement).toBeInTheDocument();
    expect(destinationinfoElement).toHaveTextContent(
      "Location"
    );
  });
});
