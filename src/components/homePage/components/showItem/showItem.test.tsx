import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Show } from "../../../../api/tvMaze/types";
import ShowItem from "./showItem";

const showMock = {
  id: 1,
  name: "Test show",
  premiered: "10-10-2020",
  language: "English",
  rating: {
    average: "2.5",
  },
  type: "Scripted",
} as Show;

beforeEach(() => {
  cleanup();
});

test("it renders", () => {
  render(<ShowItem show={showMock} />, {
    wrapper: BrowserRouter,
  });

  const ShowItemElement = screen.getByText("Test show");

  expect(ShowItemElement).toBeInTheDocument();
});
