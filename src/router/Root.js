import React, {useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import useUser from '../hooks/useUser'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'
import {getCookie} from '../utils/cookies'
import {refreshEndpoint} from '../services/auth'

const Root = () => {
  const {
    user: {jwt_token, logged},
    setUser,
  } = useUser()
  const refreshTokenCookie = getCookie()

  useEffect(() => {
    if (refreshTokenCookie.length > 0 && !jwt_token) {
      const response = refreshEndpoint(refreshTokenCookie)

      setUser({...response, logged: true})
    }
  }, [jwt_token, logged, refreshTokenCookie, setUser])

  return (
    <Router>
      {logged && <LoggedIn />}
      {!logged && !refreshTokenCookie && <LoggedOut />}
    </Router>
  )
}

export default Root
