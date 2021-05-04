import {serverLogin, serverLogout} from '../serverMock/server'
import {deleteCookie, setCookie} from '../utils/cookies'

export const callToLoginEndpoint = (formData) => {
  const {cookie, ...response} = serverLogin(formData)

  setCookie('refresh-token', cookie)

  return Promise.resolve(response)
}

export const callToLogoutEndpoint = () => {
  serverLogout()
  deleteCookie('refresh-token')
}
