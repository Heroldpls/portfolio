import { RouterProvider, createHashRouter, Navigate } from "react-router-dom";

import RecipesPresenter from "./presenters/recipesPresenter.jsx";
import PortfolioModel from "./PortfolioModel.js";

function makeRouter(model: PortfolioModel) {
  return createHashRouter([
    {
      path: "*",
      element: <Navigate to="/home" />,
    },
    {
      path: "/projects",
      element: <ProjectsPresenter model={model} />,
    },
    {
      path: "/cv",
      element: <CVPresenter model={model} />,
    },
  ]);
}

export default makeRouter;
