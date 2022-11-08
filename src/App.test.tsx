import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("The app renders", async () => {
  // ARRANGE
  render(<App />);

  const HeaderElement = screen.getByText("TVMaze");
  // ASSERT
  expect(HeaderElement).toBeInTheDocument();
});
