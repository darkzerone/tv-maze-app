import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Spinner from "./Spinner";

beforeEach(() => {
  cleanup();
});

test("it renders", () => {
  render(<Spinner />, {
    wrapper: BrowserRouter,
  });

  const SpinnerTextElement = screen.getByText(
    "Loading data, this can take a while..."
  );

  expect(SpinnerTextElement).toBeInTheDocument();
});
