import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import App from './App'
import Shop from './routes/shop/Shop'
import './index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route
    id="root"
    element={<App />}
    // errorElement={<ErrorScreen />}
  >
    <Route
      id="shop"
      path="/"
      element={<Shop />}
    />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
