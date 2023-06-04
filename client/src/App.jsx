import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./routes/navbar/NavBar"
import Login from "./routes/login/LogIn"

export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/check_session").then((r) => {
      if (r.ok)
        r.json().then((user) => setUser(user))
    })
  }, [])

  if (!user) return <Login onLogin={setUser} />;

  return (
      <div>
        <NavBar />
        <Outlet />
      </div>
  )
}
