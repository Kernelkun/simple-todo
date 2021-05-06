export const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || null

export const updateTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks))

export const cleanTasks = () => localStorage.removeItem('tasks')
