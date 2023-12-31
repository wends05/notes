import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Start from './Start'
import ErrorPage from './pages/ErrorPage'
import Home from "./pages/Home"
import Settings from './pages/Settings'
import About from './pages/About'
import Calendar from './pages/Calendar'


const BrowserRoutes = createBrowserRouter([
  {
    path: "/*",
    element: <ErrorPage />
  },{
    path: "/",
    element: <Start />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/settings",
    element: <Settings />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/calendar",
    element: <Calendar />,
    errorElement: <ErrorPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={BrowserRoutes} />
  </React.StrictMode>,
)
