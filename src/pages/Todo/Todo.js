import React, {useState} from 'react'
import faker from 'faker'
import useUser from '../../hooks/useUser'
import {NewTask} from './components/NewTask'
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

  const handleLogout = () => setUser({logged: false})

  return (
    <div>
      <h1>Home</h1>
      <NewTask createTask={createTask} />
      <ListTasks tasks={tasks} markToDone={markToDone} removeTask={removeTask} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Todo
