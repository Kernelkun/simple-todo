import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Login} from '../pages/Login'
import {Error} from '../pages/Error'

const LoggedOut = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  </Router>
)

export default LoggedOut
