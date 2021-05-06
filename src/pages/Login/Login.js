import React, {useState} from 'react'
import {Button, Grid, TextField} from '@material-ui/core'
import faker from 'faker'
import useUser from '../../hooks/useUser'
import {postLogin} from '../../services/auth'
import {checkValidToken} from '../../utils/token'

const Login = () => {
  const {setUser} = useUser()
  const [isDisabled, setIsDisabled] = useState(false)

  const handleLogin = async (formData) => {
    try {
      const {jwt_token, jwt_token_expiry} = await postLogin(formData)
      const isValidToken = checkValidToken({jwt_token, jwt_token_expiry})

      if (isValidToken) {
        setUser({jwt_token, jwt_token_expiry, logged: true})
      } else {
        setUser({logged: false})
      }
    } catch (error) {
      setIsDisabled(false)
      throw new Error('Login error')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const {password, user} = event.target.elements
    setIsDisabled(true)
    await handleLogin({password: password.value, user: user.value})
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
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              id="password"
              defaultValue={faker.internet.password()}
              label="Password"
              name="password"
              type="password"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Button color="primary" disabled={isDisabled} type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default Login
