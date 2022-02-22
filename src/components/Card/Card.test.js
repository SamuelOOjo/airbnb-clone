import { render, screen, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import Card from "./Card";

afterEach(() => {
  cleanup();
});

describe("Card", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render card component text", () => {
    const card = {
      title: "Bancroft",
    };
    render(<Card title={card.title} />);
    const cardElement = screen.getByTestId("card_test");
    expect(cardElement).toBeInTheDocument;
    expect(cardElement).toHaveTextContent("Bancroft");
  });

  it("should render card img src", () => {
    const card = {
      src: "https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=720",
    };
    render(<Card src={card.src} />);
    const card_img = screen.getByRole("img");
    expect(card_img).toHaveAttribute(
      "src",
      "https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=720"
    );
  });
});
