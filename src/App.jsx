import React, { Component } from 'react'
import UserInput from './UserInput'
import Output from './Output'
import { useState } from 'react'

const App = () => {
  const [username, setusername] = useState("rahmat")

  const changeEvent = (e) => {
    setusername (e.target.value)
  }
  return (
    <div className=' w-screen h-screen flex justify-center items-center flex-wrap bg-gradient-to-r from-green-400 to-blue-700'>
      <UserInput username = {changeEvent}/>
      <Output username = {username}/>
    </div>
  )
}
export default App
