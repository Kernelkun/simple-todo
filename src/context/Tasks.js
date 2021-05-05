import React, {useState} from 'react'
import faker from 'faker'
import {getTasks, saveTasks} from '../services/tasks'

const TaskContext = React.createContext()

const defaultTask = getTasks() || []

export const TasksProvider = ({children, tasks}) => {
  const [currentTasks, setCurrentTasks] = useState(tasks || defaultTask)

  const createTask = (title) => {
    const newTask = {_id: faker.datatype.uuid(), done: false, title}

    setCurrentTasks([...currentTasks, newTask])
    saveTasks([...currentTasks, newTask])
  }

  const markToDone = (_id) => {
    const mapped = currentTasks.map((task) => {
      return task._id === _id ? {...task, done: !task.done} : {...task}
    })

    setCurrentTasks(mapped)
    saveTasks(mapped)
  }

  const removeTask = (_id) => {
    const mapped = currentTasks.filter((task) => {
      return task._id !== _id
    })

    setCurrentTasks(mapped)
    saveTasks(mapped)
  }

  const updateTask = (taskUpdated) => {
    const mapped = currentTasks.map((task) => {
      return task._id === taskUpdated._id ? {...task, ...taskUpdated} : {...task}
    })

    setCurrentTasks(mapped)
    saveTasks(mapped)
  }

  return (
    <TaskContext.Provider value={{tasks: currentTasks, createTask, markToDone, removeTask, updateTask}}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext
