import React from 'react'
import logo from '../../img/logo.svg'
import Router from '../../router/Root'
import './App.css'

const defaultUserLogged = {logged: false}
export const UserContext = React.createContext(defaultUserLogged)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <UserContext.Provider value={defaultUserLogged}>
        <Router />
      </UserContext.Provider>
    </div>
  )
}

export default App
