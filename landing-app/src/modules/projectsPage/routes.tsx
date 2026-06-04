import type { AppRouteObject } from "../../types/routerTypes";
import { Layout } from "../../shared/Layout";
import { ProjectPage } from "./ProjectPage";

export const PROJECTS = "/projects";

export const projectsRoutes: AppRouteObject[] = [
  {
    path: PROJECTS,
    name: "Project",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProjectPage />,
      },
    ],
  },
];
