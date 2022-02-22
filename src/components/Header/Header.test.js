import { render, screen, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import Header from "./Header";

afterEach(() => {
  cleanup();
});

describe("Header", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render giftcard component text", () => {
    render(<Header />);
    const headerElement = screen.getByTestId("header_test");
    expect(headerElement).toBeInTheDocument;
    expect(headerElement).toHaveTextContent("Places to stay");
  });
});
