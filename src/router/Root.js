import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'

const Root = () => {
  const logged = false

  return (
    <Router>
      {logged && <LoggedIn />}
      {!logged && <LoggedOut />}
    </Router>
  )
}

export default Root
