import React, {useState} from 'react'
import {Button, Grid, TextField} from '@material-ui/core'
import faker from 'faker'
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
            <TextField
              id="user"
              defaultValue={faker.internet.email()}
              label="User"
              name="user"
              onChange={handleOnChange}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              id="password"
              defaultValue={faker.internet.password()}
              label="Password"
              name="password"
              onChange={handleOnChange}
              type="password"
              variant="outlined"
            />
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
