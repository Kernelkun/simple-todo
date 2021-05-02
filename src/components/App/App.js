import React from 'react'
import {UserProvider} from '../../context/User'
import logo from '../../img/logo.svg'
import Router from '../../router/Root'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <UserProvider>
        <Router />
      </UserProvider>
    </div>
  )
}

export default App
