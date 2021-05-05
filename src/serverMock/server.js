import faker from 'faker'

let jwt_token,
  jwt_token_expiry,
  refreshToken = null

export const serverLogin = () => {
  // formData is not used because it's a mock function.
  //
  // The server must return a refresh token in a cookie with this security config:
  // - httpOnly:        This flag makes it impossible for a browser to read any cookies, which is required in order
  //                    to safely use server-side sessions with cookies.
  //
  // - SameSite=strict: The attribute of the Set-Cookie HTTP response header allows you to declare if your
  //                    cookie should be restricted to a first-party or same-site context.
  //
  // - secure=true:     This flag is to ensure cookies can only be set over an encrypted connection.
  //
  // This article points out the security issue on store the jwt_token in the local/session storage. This
  // method is weak to a XSS attack: https://www.rdegges.com/2018/please-stop-using-local-storage/
  //
  // This article talk about the refresh token flow. This one is better than the previous in order that our API
  // it wont be made browser dependent and our client prone to CSRF:
  // https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/
  //
  // The server must return a jwt token, jwt expiry time, and a cookie; but, I'm going to fake the cookie
  // making it on the browser. This is no equal to the actual flow, because we need the server to make the
  // cookie, and specially, we need it to make the cookie with the httpOnly config. This attribute make the
  // cookie inaccessible from the script.

  jwt_token = faker.lorem.sentence()
  jwt_token_expiry = new Date().getTime() + 5 * 60000
  refreshToken = faker.lorem.sentence()

  localStorage.setItem('refreshToken', `refresh-token=${refreshToken}`)
  localStorage.setItem('jwt_token', jwt_token)
  localStorage.setItem('jwt_token_expiry', jwt_token_expiry)

  return {
    cookie: refreshToken,
    jwt_token,
    jwt_token_expiry,
  }
}

export const serverLogout = () => {
  jwt_token = null
  jwt_token_expiry = null
  refreshToken = null

  localStorage.setItem('refreshToken', null)
  localStorage.setItem('jwt_token', null)
  localStorage.setItem('jwt_token_expiry', null)
}

export const serverRefresh = (cookie) => {
  refreshToken = localStorage.getItem('refreshToken')

  if (cookie === refreshToken) {
    return serverLogin()
  }
}
