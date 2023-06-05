import { useState } from "react"
import useUserStore from "../../hooks/userStore"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {user, setUser} = useUserStore()

  function handleSubmit(event) {
    event.preventDefault()
    fetch("/api/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ username, password })
    })
    .then(response => {
      if (response.ok)
        response.json()
        .then((user) => setUser(user))
    })
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            id="username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Login</button>
    </form>
  )
}
