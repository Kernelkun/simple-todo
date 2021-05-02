import React from 'react'
import useUser from '../../hooks/useUser'

const Todo = () => {
  const {setUser} = useUser()

  const handleLogout = () => setUser({logged: false})

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Todo
