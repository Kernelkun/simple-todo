import React, {useState} from 'react'
import faker from 'faker'

const TaskContext = React.createContext()

const defaultTask = []

export const TasksProvider = ({children, tasks}) => {
  const [currentTasks, setCurrentTasks] = useState(tasks || defaultTask)

  const createTask = (title) => {
    const newTask = {_id: faker.datatype.uuid(), done: false, title}

    setCurrentTasks([...currentTasks, newTask])
  }

  const markToDone = (_id) => {
    const mapped = currentTasks.map((task) => {
      return task._id === _id ? {...task, done: !task.done} : {...task}
    })

    setCurrentTasks(mapped)
  }

  const removeTask = (_id) => {
    const mapped = currentTasks.filter((task) => {
      return task._id !== _id
    })

    setCurrentTasks(mapped)
  }

  const updateTask = (taskUpdated) => {
    const mapped = currentTasks.map((task) => {
      return task._id === taskUpdated._id ? {...task, ...taskUpdated} : {...task}
    })

    setCurrentTasks(mapped)
  }

  return (
    <TaskContext.Provider value={{tasks: currentTasks, createTask, markToDone, removeTask, updateTask}}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext
