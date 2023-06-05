import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./routes/navbar/NavBar"
import Footer from "./routes/footer/Footer"
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
        <Footer />
      </div>
  )
}
