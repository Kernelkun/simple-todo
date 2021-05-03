import React from 'react'
import {TasksProvider} from '../../context/Tasks'
import useUser from '../../hooks/useUser'
import {TaskForm} from './components/TaskForm'
import {ListTasks} from './components/ListTasks'

const Todo = () => {
  const {setUser} = useUser()

  const handleLogout = () => setUser({logged: false})

  return (
    <div>
      <TasksProvider>
        <h1>Home</h1>
        <button onClick={handleLogout}>Logout</button>
        <TaskForm />
        <ListTasks />
      </TasksProvider>
    </div>
  )
}

export default Todo
