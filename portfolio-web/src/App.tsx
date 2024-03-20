import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavbarPresenter from "./presenters/navbarPresenter";
import { RouterProvider } from "react-router-dom";
import makeRouter from "./makeRouter";
import PortfolioModel from "./PortfolioModel";

interface AppProps {
  model: PortfolioModel;
}

function App(props: AppProps) {
  return (
    <div className="App">
      <NavbarPresenter />
      <RouterProvider router={makeRouter(props.model)} />
    </div>
  );
}

export default App;
