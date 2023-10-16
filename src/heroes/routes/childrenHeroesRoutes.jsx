import { Navigate } from "react-router-dom";
import { LoginPage } from "../../auth";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const childrenHeroesRoutes = [
  {
    path: "marvel",
    element: <MarvelPage />,
  },
  {
    path: "dc",
    element: <DcPage />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
  {
    path: "hero/:id",
    element: <HeroPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "/*",
    element: <Navigate to={"/marvel"} />,
  },
];
