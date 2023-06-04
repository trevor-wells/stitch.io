import { useState } from "react"
import LoginForm from "./LoginForm"
import SignUpForm from "./SignupForm"

export default function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <h1>Steam Clone</h1>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </>
  )}