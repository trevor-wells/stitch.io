import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import useUserStore from "../../hooks/userStore"

export default function Login() {
  const navigate = useNavigate()
  const {user, setUser} = useUserStore()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (user)
    navigate("/")
  }, [user])

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
    <div className = "outlet">
      <form className = "bg-[--color3] w-[30vw] h-[50vh] flex items-center flex-wrap justify-center shadow-sm rounded-md" onSubmit={handleSubmit}>
          <input
            className = "w-[26vw] h-[6vh] rounded-sm"
            placeholder = "Username"
            type="text"
            id="username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <input
            className = "w-[26vw] h-[6vh] rounded-sm"
            placeholder = "Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        <button type="submit" className="btn btn-primary rounded-full text-white py-2 px-4 bg-[--color2] mb-4">Login</button>
        <p>
            Don't have an account? &nbsp;
            <Link to="/signup"><button>Sign Up</button></Link>
        </p>
      </form>
    </div>
  )
}