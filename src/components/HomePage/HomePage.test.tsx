import "@testing-library/jest-dom";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Show } from "../../api/tvMaze/types";
import HomePageContext from "./context/HomePageContext";
import HomePage from "./HomePage";

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
  jest.useFakeTimers();
  providerMock.searchShow.mockClear();
  providerMock.handlePageChange.mockClear();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

test("it renders", () => {
  render(
    <HomePageContext.Provider value={{ ...providerMock }}>
      <HomePage />
    </HomePageContext.Provider>,
    {
      wrapper: BrowserRouter,
    }
  );

  const ShowElement = screen.getByText("Test show");

  expect(ShowElement).toBeInTheDocument();
});

test("the spinner renders", () => {
  render(
    <HomePageContext.Provider value={{ ...providerMock, loading: true }}>
      <HomePage />
    </HomePageContext.Provider>,
    {
      wrapper: BrowserRouter,
    }
  );

  const SpinnerElement = screen.getByText(
    "Loading data, this can take a while..."
  );

  expect(SpinnerElement).toBeInTheDocument();
});

test("handlepagechange called", () => {
  render(
    <HomePageContext.Provider value={{ ...providerMock }}>
      <HomePage />
    </HomePageContext.Provider>,
    {
      wrapper: BrowserRouter,
    }
  );

  const navigationElement = screen.getByText(5);

  fireEvent.click(navigationElement);

  expect(providerMock.handlePageChange).toHaveBeenCalled();
});

test("searchShow called", async () => {
  render(
    <HomePageContext.Provider value={{ ...providerMock }}>
      <HomePage />
    </HomePageContext.Provider>,
    {
      wrapper: BrowserRouter,
    }
  );

  const searchBarElement = screen.getByPlaceholderText(
    "Start typing to search for a show.."
  );

  fireEvent.change(searchBarElement, { target: { value: "a" } });

  jest.runOnlyPendingTimers();

  await waitFor(() => expect(providerMock.searchShow).toHaveBeenCalled());
});
