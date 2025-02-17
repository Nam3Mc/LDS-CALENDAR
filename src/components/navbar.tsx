import { useState } from "react"
import LoggedOutBar from "./loggedoutbar"

export default function Header() {
  const [isLogged, setIsLogged] = useState(false)
  const [navbar, setNavBar] = useState(LoggedOutBar)

  

  return (
    <div>
      {navbar}
    </div>
  )
}
