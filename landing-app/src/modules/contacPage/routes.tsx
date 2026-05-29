import type { AppRouteObject } from "../../types/routerTypes";
import { Layout } from "../../shared/Layout";
import ContactPage from "./ContactPage";

export const CONTACT = "/contact";

export const contactRoutes: AppRouteObject[] = [
  {
    path: CONTACT,
    name: "Contactos",
    sidebar: false,
    element: <Layout />,  
    children: [
      {
        index: true,
        element: <ContactPage />,
      },
    ],
  },
];
