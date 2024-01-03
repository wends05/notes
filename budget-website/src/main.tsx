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

import Start from "./Start";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Tracker from "./pages/Tracker";
import Outline from "./pages/categories/Outline";
import Category from "./pages/categories/Category";

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
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
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
        },
        {
          path: "category",
          element: <Outline />,
          children: [
            {
              path: ":category",
              element: <Category />,
              errorElement: <ErrorPage />
            }
          ]
        }
      ]
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
