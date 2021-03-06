import React, {useState} from 'react'

const defaultUser = {
  jwt_token: null,
  jwt_token_expiry: null,
  logged: false,
}

const UserContext = React.createContext(defaultUser)

export const UserProvider = ({children, user}) => {
  const [currentUser, setCurrentUser] = useState(user || defaultUser)

  const setUser = (values) => {
    setCurrentUser({...currentUser, ...values})
  }

  return <UserContext.Provider value={{user: currentUser, setUser}}>{children}</UserContext.Provider>
}

export default UserContext
