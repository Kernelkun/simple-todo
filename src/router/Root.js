import React, {useContext} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {UserContext} from '../components/App/App'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'

const Root = () => {
  const {logged} = useContext(UserContext)

  return (
    <Router>
      {logged && <LoggedIn />}
      {!logged && <LoggedOut />}
    </Router>
  )
}

export default Root
