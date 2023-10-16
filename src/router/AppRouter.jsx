import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RoutesNav } from "./RoutesNav";

const router = createBrowserRouter(RoutesNav);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
