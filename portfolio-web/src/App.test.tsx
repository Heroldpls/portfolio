import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import PortfolioModel from "./PortfolioModel";

const model: PortfolioModel = {
  projectIds: "000",
};

test("renders learn react link", () => {
  render(<App model={model} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
