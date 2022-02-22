import { render, screen, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import SearchPage from "./SearchPage";

afterEach(() => {
  cleanup();
});

describe("SearchPage", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render searchpage component text", () => {
    render(<SearchPage />);
    const searchpageElement = screen.getByTestId("searchpage_test");
    expect(searchpageElement).toBeInTheDocument;
    expect(searchpageElement).toHaveTextContent("62 stays · 26 august to 30 august");
  });
});
