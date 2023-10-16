import { HeroesRoutes, childrenHeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoute } from "./PublicRoute";

export const RoutesNav = [
  {
    path: "login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRouter>
        <HeroesRoutes />
      </PrivateRouter>
    ),
    children: childrenHeroesRoutes,
  },
];
