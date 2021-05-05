import {serverLogin, serverLogout, serverRefresh} from '../serverMock/auth'
import {deleteCookie, setCookie} from '../utils/cookies'
import {cleanTasks} from './tasks'

export const callToLoginEndpoint = (formData) => {
  const response = serverLogin(formData)

  if (response) {
    const {cookie, ...rest} = response

    setCookie('refresh-token', cookie)

    return Promise.resolve(rest)
  }

  return Promise.reject('Unauthorized')
}

export const callToLogoutEndpoint = () => {
  cleanTasks()
  serverLogout()
  deleteCookie('refresh-token')
}

export const refreshEndpoint = (cookie) => {
  const response = serverRefresh(cookie)

  if (response) {
    const {cookie, ...rest} = response

    setCookie('refresh-token', cookie)

    return rest
  }
  return null
}
