import { render, screen, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import Background from "./Background";

afterEach(() => {
  cleanup();
});

describe("Background", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Background />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render background content", () => {
    render(<Background />);
    const backgroundElement = screen.getByTestId("background_test");
    expect(backgroundElement).toBeInTheDocument();
    expect(backgroundElement).toHaveTextContent(
      "Not sure where to go? Perfect.I'm flexible"
    );
  });

  it("should have img src and alt", () => {
    render(<Background />);
    const background_img = screen.getByRole("img");
    expect(background_img).toHaveAttribute(
      "src",
      "https://a0.muscache.com/im/pictures/53e51dcb-8fad-4ce8-b61c-8a7a369267bf.jpg?im_w=2560"
    );
    expect(background_img).toHaveAttribute("alt", "");
  });
});
