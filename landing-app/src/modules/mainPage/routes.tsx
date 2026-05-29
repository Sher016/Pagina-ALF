import type { AppRouteObject } from "../../types/routerTypes";
import { Layout } from "../../shared/Layout";
import { HomePage } from "./HomePage";

export const mainPageRoutes: AppRouteObject[] = [
  {
    path: "/",
    name: "Home",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];
