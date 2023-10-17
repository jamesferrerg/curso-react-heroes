import { render, screen } from "@testing-library/react";
import { HeroPage } from "../../../src/heroes/pages/HeroPage";
import { MemoryRouter, Router } from "react-router-dom";

const heroId = "dc-wonder";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: heroId,
  }),
}));
describe("Prueba en <HeroPage />", () => {
  test("debe de retornar un heroe", () => {
    render(
      <MemoryRouter>
        <HeroPage />
      </MemoryRouter>
    );

    const heroName = screen.getByText("Wonder Woman");

    expect(heroName).toBeTruthy();
  });
});
