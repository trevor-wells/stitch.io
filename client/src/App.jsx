import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import useUserStore from './hooks/userStore'

export default function App() {

  const {setUser} = useUserStore()

  useEffect(() => {
    fetch("/api/check_session")
    .then(response => {
      if (response.ok)
        return response.json()
      })
    .then(user => setUser(user))}, [])

  return (
      <div>
        <NavBar />
        <Outlet />
      </div>
  )
}
