import React, {useState} from 'react'
import {Button, Grid, TextField} from '@material-ui/core'
import useUser from '../../hooks/useUser'
import {callToLoginEndpoint} from '../../services/auth'

const Login = () => {
  const {setUser} = useUser()
  const [formData, setFormData] = useState({user: '', password: ''})

  const handleLogin = () => {
    const {logged} = callToLoginEndpoint({formData})
    setUser({logged})
  }

  const handleOnChange = (event) => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogin()
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Grid container direction="column" justify="center" spacing={2}>
          <Grid item>
            <TextField id="user" label="User" name="user" variant="outlined" onChange={handleOnChange} />
          </Grid>
          <Grid item>
            <TextField id="password" label="Password" name="password" variant="outlined" onChange={handleOnChange} />
          </Grid>
          <Grid item>
            <Button color="primary" type="submit" variant="contained">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default Login
