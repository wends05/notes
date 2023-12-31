import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Start from './Start'
import ErrorPage from './pages/ErrorPage'
import Main from './pages/main'

const BrowserRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Start />,
    errorElement: <ErrorPage />
  },
  {
    path: '/main',
    element: <Main />,
    errorElement: <ErrorPage />
    
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={BrowserRoutes} />
  </React.StrictMode>,
)
