import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { LogIn } from "react-feather"

export default function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <div className="auth-section">
      <button className="login-btn" onClick={loginWithRedirect}><LogIn />&nbsp;log in</button>
    </div>
  )
}