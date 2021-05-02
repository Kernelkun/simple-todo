import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import useUser from '../hooks/useUser'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'

const Root = () => {
  const {
    user: {logged},
  } = useUser()

  return (
    <Router>
      {logged && <LoggedIn />}
      {!logged && <LoggedOut />}
    </Router>
  )
}

export default Root
