import { render, screen, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import Footer from "./Footer";

afterEach(() => {
  cleanup();
});

describe("Footer", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render footer component text", () => {
    render(<Footer />);
    const footerElement = screen.getByTestId("footer__contacttest");
    expect(footerElement).toBeInTheDocument;
    expect(footerElement).toHaveTextContent("© 2022 Airbnb Clone, Inc.· Privacy· Terms· Sitemap");
  });
});
