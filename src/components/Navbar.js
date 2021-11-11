import React from "react"
import { Link } from "react-router-dom"

export default function Navbar(){
  return(
    <div>
      <Link to="/profile">Profile</Link>
      <Link to="/public">Public</Link>
      <button>Logout</button>
    </div>
  )
}