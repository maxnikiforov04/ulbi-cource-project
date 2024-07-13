import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import type { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}
export const RouthPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouthPath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RouthPath.about,
    element: <AboutPage />,
  },
};
