import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { RoutesNav } from "../../src/router/RoutesNav";

describe("Pruebas en <AppRouter />", () => {
  test("debe de mostrar el login si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };

    const router = createMemoryRouter(RoutesNav, {
      initialEntries: ["/marvel", "/login"],
      initialIndex: 1,
    });

    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    );

    expect(screen.getAllByText("Login")).toBeTruthy();
  });

  test("debe de mostrar el componente de MArvel si esta autenticado", () => {
    const contextValue = {
        logged: true,
      };
  
      const router = createMemoryRouter(RoutesNav, {
        initialEntries: ["/marvel"],
        initialIndex: 1,
      });
  
      render(
        <AuthContext.Provider value={contextValue}>
          <RouterProvider router={router} />
        </AuthContext.Provider>
      );
  
      expect(screen.getByText("Marvel")).toBeTruthy();
  });
});
