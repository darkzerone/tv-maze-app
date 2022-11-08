import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ShowCastMember } from "../../../../api/tvMaze/types";
import CastMember from "./CastMember";

const propMock = {
  character: {
    id: 1,
    name: "TestCharacter",
  },
  person: {
    id: 1,
    name: "TestPerson",
  },
} as ShowCastMember;

beforeEach(() => {
  cleanup();
});

test("it renders", () => {
  render(<CastMember castMember={{ ...propMock }} />, {
    wrapper: BrowserRouter,
  });

  const nameElement = screen.getByText("TestPerson as TestCharacter");

  expect(nameElement).toBeInTheDocument();
});
