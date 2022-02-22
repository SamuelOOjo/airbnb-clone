import { render, screen, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import Discover from "./Discover";

afterEach(() => {
  cleanup();
});

describe("Discover", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Discover />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render discover component text", () => {
    const discover = {
      title: "Trips",
    };
    render(<Discover title={discover.title} />);
    const discoverElement = screen.getByTestId("discover_test");
    expect(discoverElement).toBeInTheDocument;
    expect(discoverElement).toHaveTextContent("Trips");
  });

  it("should render discover img src", () => {
    const discover = {
      src: "https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=720",
    };
    render(<Discover src={discover.src} />);
    const discover_img = screen.getByRole("img");
    expect(discover_img).toHaveAttribute(
      "src",
      "https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=720"
    );
  });
});
