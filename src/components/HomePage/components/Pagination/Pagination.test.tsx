import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Show } from "../../../../api/tvMaze/types";
import HomePageContext from "../../context/HomePageContext";
import Pagination from "./Pagination";

const providerMock = {
  searchShow: jest.fn(),
  activePage: 1,
  handlePageChange: jest.fn(),
  loading: false,
  searchActive: false,
  shows: [
    {
      id: 1,
      name: "Test show",
      premiered: "10-10-2020",
      language: "English",
      rating: {
        average: "2.5",
      },
      type: "Scripted",
    } as Show,
  ],
};

beforeEach(() => {
  cleanup();
  providerMock.searchShow.mockClear();
  providerMock.handlePageChange.mockClear();
});

test("it renders", () => {
  render(
    <HomePageContext.Provider value={{ ...providerMock }}>
      <Pagination />
    </HomePageContext.Provider>,
    {
      wrapper: BrowserRouter,
    }
  );

  const navigationElement = screen.getByText(1);

  expect(navigationElement).toBeInTheDocument();
});

test("handlepagechange called", () => {
  render(
    <HomePageContext.Provider value={{ ...providerMock }}>
      <Pagination />
    </HomePageContext.Provider>,
    {
      wrapper: BrowserRouter,
    }
  );

  const navigationElement = screen.getByText(5);

  fireEvent.click(navigationElement);

  expect(providerMock.handlePageChange).toHaveBeenCalled();
});
