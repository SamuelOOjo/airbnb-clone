import { render, screen, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import Giftcard from "./Giftcard";

afterEach(() => {
  cleanup();
});

describe("Giftcard", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Giftcard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render giftcard component text", () => {
    render(<Giftcard />);
    const giftcardElement = screen.getByTestId("giftcard_test");
    expect(giftcardElement).toBeInTheDocument;
    expect(giftcardElement).toHaveTextContent("Shop Airbnb gift cards");
  });
});
