import React, { useState, useContext } from "react"
import AuthForm from "./AuthForm.js"
import { UserContext } from "../context/UserProvider.js"

const initInputs = { username: "", password: "" }

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const { signup, login } = useContext(UserContext)

  function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }
  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
  }
  function handleLogin(e){
    e.preventDefault()
    login(inputs)
  }
  function toggleForm(){
    setToggle(prevToggle => !prevToggle)
  }
  
  return(
    <div>
      {!toggle ?
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Signup"
            errMsg={} />
            <p >{}</p>
        </>
        :
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={} />
            <p >{}</p>
        </>}
    </div>
  )
}