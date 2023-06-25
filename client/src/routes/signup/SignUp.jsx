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
        <form className = "shadow-lg bg-[--color3] w-[30vw] h-[52vh] rounded-md mb-[7vh]" onSubmit={handleSubmit}>
          <h1 className = "text-[1.7vw] mb-[2vh] mt-[2vh] ml-[1.6vw] block text-left font-semibold pr-[5vw]">Create an account on stitch.io</h1>
          <label className = " ml-[1.6vw] text-[2vh]">Username</label>
          <input
              className="ml-[1.6vw] mb-[2vh] w-[26vw] h-[4vh] rounded-sm pl-[1vh]"
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
          />
          <label className="ml-[1.6vw] text-[2vh]">Password</label>
          <input
              className = "ml-[1.6vw] mb-[2vh] w-[26vw] h-[4vh] rounded-sm pl-[1vh]"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
          />
          <label className="ml-[1.6vw] text-[2vh]">Repeat password</label>
          <input
              className = "ml-[1.6vw] mb-[2vh] w-[26vw] h-[4vh] rounded-sm pl-[1vh]"
              type="password"
              id="password_confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              autoComplete="current-password"
          />
          <label className="ml-[1.6vw] text-[2vh]">Email address</label>
          <input
              className = "ml-[1.6vw] mb-[2vh] w-[26vw] h-[4vh] rounded-sm pl-[1vh]"
              type="text"
              id="email"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
          />
          <p className = "flex items-center">
            <button className="px-[2vh] py-[1vh] ml-[1.6vw] rounded-sm bg-[--color2]" type="submit">Sign Up</button>
            <p className = "text-[1.5vh]"> &nbsp;&nbsp; Already have an account? &nbsp;<Link className = "underline text-[1.5vh]" to="/login">Log In</Link></p>
          </p>
        </form>
    </div>
  )
}