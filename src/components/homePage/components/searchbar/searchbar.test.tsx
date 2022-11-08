import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./searchbar";

beforeEach(() => {
  cleanup();
});

test("it renders", () => {
  render(<SearchBar />, {
    wrapper: BrowserRouter,
  });

  const SearchElement = screen.getByPlaceholderText(
    "Start typing to search for a show.."
  );

  expect(SearchElement).toBeInTheDocument();
});
