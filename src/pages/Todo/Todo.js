import React, {useState} from 'react'
import faker from 'faker'
import useUser from '../../hooks/useUser'
import {TaskForm} from './components/TaskForm'
import {ListTasks} from './components/ListTasks'

const Todo = () => {
  const [tasks, setTasks] = useState([])
  const {setUser} = useUser()

  const createTask = (title) => {
    const newTask = {_id: faker.datatype.uuid(), done: false, title}

    setTasks([...tasks, newTask])
  }

  const markToDone = (_id) => {
    const mapped = tasks.map((task) => {
      return task._id === _id ? {...task, done: !task.done} : {...task}
    })

    setTasks(mapped)
  }

  const removeTask = (_id) => {
    const mapped = tasks.filter((task) => {
      return task._id !== _id
    })

    setTasks(mapped)
  }

  const updateTask = (taskUpdated) => {
    console.log('taskUpdated:', taskUpdated)
    const mapped = tasks.map((task) => {
      return task._id === taskUpdated._id ? {...task, ...taskUpdated} : {...task}
    })

    setTasks(mapped)
  }

  const handleLogout = () => setUser({logged: false})

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
      <TaskForm onSubmit={createTask} />
      <ListTasks tasks={tasks} markToDone={markToDone} removeTask={removeTask} updateTask={updateTask} />
    </div>
  )
}

export default Todo
