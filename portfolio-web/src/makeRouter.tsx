import { RouterProvider, createHashRouter, Navigate } from "react-router-dom";

import HomePresenter from "./presenters/homePresenter";
import PortfolioModel from "./PortfolioModel.js";
import ProjectsPresenter from "./presenters/projectsPresenter";

function makeRouter(model: PortfolioModel) {
  return createHashRouter([
    {
      path: "*",
      element: <Navigate to="/home" />,
    },
    {
      path: "/home",
      element: <HomePresenter model={model} />,
    },
    {
      path: "/projects",
      element: <ProjectsPresenter model={model} />,
    },
  ]);
}

export default makeRouter;
