import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Todo} from '../pages/Todo'
import {Error} from '../pages/Error'

const LoggedIn = () => (
  <Router>
    <Switch>
      <Route key="todo" exact path="/">
        <Todo />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  </Router>
)

export default LoggedIn
