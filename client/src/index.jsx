import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import App from './App'
import SignUp from './routes/signup/SignUp'
import LogIn from './routes/login/Login'
import Store from './routes/store/Store'
import StoreGame from './routes/store/game/StoreGame'
import Library from './routes/library/Library'
import Profile from './routes/profile/Profile'
import Home from './routes/home/Home'
import Friends from './routes/friends/Friends'
import './index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route
    id="root"
    element={<App />}
  >
    <Route
      id="home"
      path="/"
      element={<Home />}
    />
    <Route
      id="store"
      path="/store"
      element={<Store />}
    />
    <Route
      id="storegame"
      path="/store/:id"
      element={<StoreGame />}
    />
    <Route
      id="library"
      path="/library"
      element={<Library />}
    />
    <Route
      id="signup"
      path="/signup"
      element={<SignUp />}
    />
    <Route
      id="login"
      path="/login"
      element={<LogIn />}
    />
    <Route
      id="profile"
      path="/profile"
      element={<Profile />}
    />
    <Route
      id="friends"
      path="/friends"
      element={<Friends />}
    />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
