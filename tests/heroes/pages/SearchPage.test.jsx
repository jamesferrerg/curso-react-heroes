import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en <SearchPage />", () => {
  beforeEach(() => jest.clearAllMocks());

  test("debe de mostrarse correctamente con valores por defecto", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar a Flash y el input con el valor del queryString", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=flash"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    const img = screen.getByRole("img");
    const noneStyle = screen.getByTestId("display-none");

    expect(input.value).toBe("flash");
    expect(img.src).toContain("/assets/heroes/dc-flash.jpg");
    expect(noneStyle.style.display).toBe("none");
  });

  test("debe de mostrar un error si no se encuentra el hero (flash123)", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=flash123"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const emptyStyle = screen.getByTestId("display-none");

    expect(emptyStyle.style.display).toBeFalsy();
  });

  test("debe de llamar al navigate a la pantalla nueva", () => {
    const inputValue = "superman";

    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, {
      target: { name: "searchText", value: inputValue },
    });

    const form = screen.getByLabelText("form");
    fireEvent.submit(form);

    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
    //screen.debug()
  });
});
