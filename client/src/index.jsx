import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import App from './App'
import Login from './routes/login/LogIn'
import Shop from './routes/shop/Shop'
import Library from './routes/library/Library'
import Profile from './routes/profile/Profile'
import About from './routes/about/About'
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
    <Route
      id="login"
      path="/login"
      element={<Login />}
    />
    <Route
      id="profile"
      path="/profile"
      element={<Profile />}
    />
    <Route
      id="library"
      path="/library"
      element={<Library />}
    />
    <Route
      id="about"
      path="/about"
      element={<About />}
    />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
