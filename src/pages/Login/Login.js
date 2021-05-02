import React from 'react'
import useUser from '../../hooks/useUser'

const Login = () => {
  const {setUser} = useUser()

  const handleLogin = () => setUser({logged: true})

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
