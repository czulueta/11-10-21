import React, { useContext } from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar.js"
import Auth from "./components/Auth.js"
import Profile from "./components/Profile.js"
import Public from "./components/Public.js"
import { UserContext } from "../context/UserProvider.js"

export default function App(){
  const { token, logout } = useContext(UserContext)
  return(
    <div>
      <Navbar logout={logout}/>
      <Switch>
        <Route
          path="/"
          render={() => token ? <Redirect path="/profile"/> : <Auth />} />
        <Route
          path="/"
          render={() => <Profile />} />
        <Route
          path="/"
          render={() => <Public />} />
      </Switch>
    </div>
  )
}