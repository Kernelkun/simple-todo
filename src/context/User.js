import React, {useState} from 'react'

const UserContext = React.createContext()

const defaultUser = {
  logged: false,
}

export const UserProvider = ({children, user}) => {
  const [currentUser, setCurrentUser] = useState(user || defaultUser)

  const setUser = (values) => {
    setCurrentUser({...currentUser, ...values})
  }

  return <UserContext.Provider value={{user: currentUser, setUser}}>{children}</UserContext.Provider>
}

export default UserContext
