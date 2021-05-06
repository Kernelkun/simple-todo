import React from 'react'
import {useLocation} from 'react-router-dom'

const Error = () => {
  const location = useLocation()

  return (
    <div>
      <h1>Error page</h1>
      <h2>
        No match for <code>{location.pathname}</code>
      </h2>
    </div>
  )
}

export default Error
