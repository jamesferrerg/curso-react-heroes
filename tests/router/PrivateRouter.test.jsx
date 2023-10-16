import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { PrivateRouter } from "../../src/router/PrivateRouter";

describe("Preubas en el <PrivateRoute />", () => {
  test("debe de mostrar el children si esta autenticado", () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: "abc",
        name: "Jhon Doe",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/search?q=flash"]}>
          <PrivateRouter>
            <h1>Ruta privada</h1>
          </PrivateRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta privada")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      "/search?q=flash"
    );
  });
});
