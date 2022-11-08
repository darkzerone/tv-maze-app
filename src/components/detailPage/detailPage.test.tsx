import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import {
  BrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import { ShowDetail } from "../../api/tvMaze/types";
import DetailPageContext from "./context/dpc";
import DetailPage from "./dp";

const providerMock = {
  getShowById: jest.fn(),
  loading: false,
  show: {
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
  } as ShowDetail,
};

beforeEach(() => {
  cleanup();
  providerMock.getShowById.mockClear();
});

test("it renders", () => {
  render(
    <DetailPageContext.Provider value={{ ...providerMock }}>
      <DetailPage />
    </DetailPageContext.Provider>,
    {
      wrapper: BrowserRouter,
    }
  );

  const ShowInfoElement = screen.getByText("Test show");

  expect(ShowInfoElement).toBeInTheDocument();
});

test("the spinner renders", () => {
  render(
    <DetailPageContext.Provider value={{ ...providerMock, loading: true }}>
      <DetailPage />
    </DetailPageContext.Provider>,
    {
      wrapper: BrowserRouter,
    }
  );

  const SpinnerElement = screen.getByText(
    "Loading data, this can take a while..."
  );

  expect(SpinnerElement).toBeInTheDocument();
});

test("getShowById called", () => {
  const routes = [
    {
      path: "/show/:id",
      element: <DetailPage />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/show/123"],
    initialIndex: 0,
  });

  render(
    <DetailPageContext.Provider value={{ ...providerMock }}>
      <RouterProvider router={router} />
    </DetailPageContext.Provider>
  );

  expect(providerMock.getShowById).toHaveBeenCalled();
});
