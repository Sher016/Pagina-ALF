import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { AppRouteObject } from "../../types/routerTypes";
import { AuthGuard } from "./guards";
import { mainPageRoutes } from "../../modules/mainPage/routes";
import { contactRoutes } from "../../modules/contacPage/routes";
import { aboutRoutes } from "../../modules/teamPage/routes";

function protectRoutes(
  elementsToProtect: AppRouteObject[],
  loaderFactory?: (roles?: string[]) => any
): AppRouteObject[] {
  return elementsToProtect.map((element) => {
    element.element = <AuthGuard>{element.element}</AuthGuard>;
    if (element.children) {
      element.children = protectRoutes(element.children, loaderFactory);
    }
    return element;
  });
}

const appRoutes: AppRouteObject[] = [
  ...mainPageRoutes,
  ...contactRoutes,
  ...aboutRoutes,
  // ...protectRoutes(otherModuleRoutes, protectedRouteLoader),
];

export function RootRouter() {
  const router = createBrowserRouter(appRoutes);
  return <RouterProvider router={router} />;
}
