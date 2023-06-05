import { useState } from "react"
import useUserStore from "../../hooks/userStore"

export default function SignUpForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [avatarUrl, setAvatarUrl] = useState("")

  const {user, setUser} = useUserStore()

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/api/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        avatar_url: avatarUrl
      })
    })
    .then((r) => {
      if (r.ok)
        r.json().then((user) => setUser(user))
    })
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="imageUrl">Profile Image</label>
        <input
          type="text"
          id="avatarUrl"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />
        <button type="submit">Sign Up</button>
    </form>
  )
}

