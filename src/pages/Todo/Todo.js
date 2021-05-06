import React from 'react'
import {Grid} from '@material-ui/core'
import {TasksProvider} from '../../context/Tasks'
import useUser from '../../hooks/useUser'
import {postLogout} from '../../services/auth'
import {TaskForm} from './components/TaskForm'
import {ListTasks} from './components/ListTasks'

const Todo = () => {
  const {setUser} = useUser()

  const handleLogout = () => {
    postLogout()
    setUser({jwt_token: null, jwt_token_expiry: null, logged: false})
  }

  return (
    <div>
      <TasksProvider>
        <Grid alignItems="center" container justify="center" spacing={2}>
          <Grid item>
            <h1>Home</h1>
          </Grid>
          <Grid item>
            <button onClick={handleLogout}>Logout</button>
          </Grid>
        </Grid>
        <TaskForm />
        <ListTasks />
      </TasksProvider>
    </div>
  )
}

export default Todo
