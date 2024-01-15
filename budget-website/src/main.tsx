import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import ErrorPage from "./pages/ErrorPage";

import Start from "./Start";
import Home from "./pages/Home";
import Settings from "./pages/Settings/Settings";
import About from "./pages/About";
import Tracker from "./pages/Tracker/Tracker";
import Outline from "./pages/categories/Outline";
import Category from "./pages/categories/Category";
import { getName, getItems } from "./utils/localStorageHandler";
import Loading from "./loading";
import ConfirmReset from "./pages/Settings/ConfirmReset";

const Root = () => {
  const loc = useLocation()

  return loc.pathname == "/" ? (
    <Start />
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const BrowserRoutes = createBrowserRouter(
  [
    {
      path: "/capycopy",
      element: <Root />,
      errorElement: <ErrorPage />,
      action: getName,
      children:
      [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "tracker",
          element: <Tracker />,
          loader: getItems
        },
        {
          path: "category",
          element: <Outline />,
          children: [
            {
              path: ":category",
              element: <Category />,
              loader: getItems,
              errorElement: <ErrorPage />
            }
          ]
        }
      ]
    },
    {
      path: "/capycopy/loading",
      element: <Loading/>,
      action: getName
    },
    {
      path: "/capycopy/confirmReset",
      element: <ConfirmReset />
    },
    {
      path: "/capycopy/",
      element: <Start />
    }
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
    },
  }
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)

root.render(
  <React.StrictMode>
    <RouterProvider router={BrowserRoutes} />
  </React.StrictMode>
);
