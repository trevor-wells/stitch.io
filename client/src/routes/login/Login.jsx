import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from "./LoginForm"
import SignUpForm from "./SignupForm"
import useUserStore from "../../hooks/userStore"

export default function Login() {
  const navigate = useNavigate()
  const [showLogin, setShowLogin] = useState(true);

  const {user} = useUserStore()

  useEffect(() => {
    if (user)
    navigate("/")
  }, [user])

  return (
    <div id ="login-screen">
      {showLogin ? 
        <>
          <LoginForm />
          <p>
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
          </p>
        </>
      :
        <>
          <SignUpForm />
          <p>
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>Log In</button>
          </p>
        </>
      }
    </div>
  )
}