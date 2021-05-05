export const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || null

export const saveTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks))

export const cleanTasks = () => localStorage.removeItem('tasks')
