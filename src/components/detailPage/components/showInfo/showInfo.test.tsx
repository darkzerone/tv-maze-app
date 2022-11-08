import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ShowDetail } from "../../../../api/tvMaze/types";
import ShowInfo from "./showInfo";

const propMock = {
  id: 1,
  name: "Test show",
  premiered: "10-10-2020",
  language: "English",
  network: {
    name: "testNetwork",
    country: {
      name: "testCountry",
    },
  },
  rating: {
    average: "2.5",
  },
  type: "Scripted",
  summary: "<p>testSummary</p>",
  _embedded: {
    cast: [
      {
        character: {
          id: 1,
          name: "TestCharacter",
        },
        person: {
          id: 1,
          name: "TestPerson",
        },
      },
    ],
  },
} as ShowDetail;

beforeEach(() => {
  cleanup();
});

test("it renders", () => {
  render(<ShowInfo show={{ ...propMock }} />, {
    wrapper: BrowserRouter,
  });

  const showNameElement = screen.getByText("Test show");

  expect(showNameElement).toBeInTheDocument();
});
