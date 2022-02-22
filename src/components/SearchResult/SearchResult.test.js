import { render, screen, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import SearchResult from "./SearchResult";

afterEach(() => {
  cleanup();
});

describe("SearchResult", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchResult />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render searchresult component text", () => {
    const searchResult = {
      title: "Support",
    };
    render(<SearchResult title={searchResult.title} />);
    const infoElement = screen.getByTestId("searchResult_test");
    expect(infoElement).toBeInTheDocument;
    expect(infoElement).toHaveTextContent("Support");
  });
});
