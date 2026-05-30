import type { AppRouteObject } from "../../types/routerTypes";
import { Layout } from "../../shared/Layout";
import { TeamSection } from "./TeamSection";

export const ABOUT = "/about";

export const aboutRoutes: AppRouteObject[] = [
  {
    path:ABOUT,
    name: "About Us",
    sidebar: false,
    element: <Layout />,  
    children: [
      {
        index: true,
        element: <TeamSection />,
      },
    ],
  },
];
