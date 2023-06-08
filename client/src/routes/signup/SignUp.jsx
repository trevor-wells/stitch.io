import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import useUserStore from "../../hooks/userStore"

export default function SignUp() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [avatarUrl, setAvatarUrl] = useState("")

  const {user, setUser} = useUserStore()

  useEffect(() => {
    if (user)
    navigate("/")
  }, [user])

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
    <div className = "outlet">
        <form className = "bg-[--color3] w-[30vw] h-[50vh] flex items-center flex-wrap justify-center shadow-sm rounded-md" onSubmit={handleSubmit}>
            <input
                className = "w-[25vw] h-[6vh] rounded-sm"
                type="text"
                id="username"
                placeholder="Username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className = "w-[25vw] h-[6vh] rounded-sm"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
            />
            <input
                className = "w-[25vw] h-[6vh] rounded-sm"
                type="password"
                id="password_confirmation"
                placeholder="Password Confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="current-password"
            />
            <input
                className = "w-[25vw] h-[6vh] rounded-sm"
                type="text"
                id="avatarUrl"
                placeholder="Avatar URL"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
            />
            <button className="btn btn-primary rounded-full text-white py-2 px-4 bg-[--color2] mb-4" type="submit">Sign Up</button>
            <p>
                Already have an account? &nbsp;
                <Link to="/login"><button>Log In</button></Link>
            </p>
        </form>
    </div>
  )
}