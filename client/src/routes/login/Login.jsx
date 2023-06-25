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
      <form className = "shadow-lg bg-[--color3] w-[30vw] h-[35vh] rounded-md mb-[7vh]" onSubmit={handleSubmit}>
        <h1 className = "text-[1.7vw] mb-[2vh] mt-[2vh] ml-[1.6vw] block text-left font-semibold pr-[5vw]">Login to your stitch.io account</h1>
          <label className = " ml-[1.6vw] text-[2vh]" htmlFor="username">Username or email</label>
          <input
            className = "ml-[1.6vw] mb-[3vh] w-[26vw] h-[4vh] rounded-sm pl-[1vh]"
            type="text"
            id="username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <label className = "ml-[1.6vw] text=[2vh]" htmlFor="password">Password</label>
          <input
            className = "ml-[1.6vw] mb-[2vh] w-[26vw] h-[4vh] rounded-sm pl-[1vh]"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <p className = "flex items-center">
            <button type="submit" className="px-[2vh] py-[1vh] ml-[1.6vw] rounded-sm bg-[--color2]">Login</button>
            <p className="text-[1.5vh]">&nbsp;&nbsp;&nbsp; Or  &nbsp;&nbsp;<Link className="text-[1.5vh] underline" to="/signup">Create account</Link> &nbsp; • &nbsp; <Link className="text-[1.5vh] underline" to="/recover">Forgot password</Link></p>
          </p>
      </form>
    </div>
  )
}