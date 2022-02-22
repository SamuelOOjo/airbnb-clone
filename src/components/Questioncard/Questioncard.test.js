import { render, screen, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import Questioncard from "./Questioncard";

afterEach(() => {
  cleanup();
});

describe("Questioncard", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Questioncard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render questioncard component text", () => {
    render(<Questioncard />);
    const questioncardElement = screen.getByTestId("questioncard_test");
    expect(questioncardElement).toBeInTheDocument;
    expect(questioncardElement).toHaveTextContent("Questions about hosting?");
  });
});
