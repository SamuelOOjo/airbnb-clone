import { render, screen, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import Info from "./Info";

afterEach(() => {
  cleanup();
});

describe("Info", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Info />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render info component text", () => {
    const info = {
      subtitle_1: "Support",
    };
    render(<Info subtitle_1={info.subtitle_1} />);
    const infoElement = screen.getByTestId("info_test");
    expect(infoElement).toBeInTheDocument;
    expect(infoElement).toHaveTextContent("Support");
  });
});
