import * as React from "react"
import "../styles/global.scss"
import LoginButton from "../components/LoginButton"

export default function Home() {
  return (
    <div>
      <div className="landing">
        <h1>Movie Club</h1>
        <LoginButton />
      </div>
    </div>
  )
}