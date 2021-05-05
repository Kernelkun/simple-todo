export const checkValidToken = ({jwt_token, jwt_token_expiry}) => {
  const tokenIsOnDate = jwt_token_expiry - new Date().getTime() > 0

  return jwt_token.length > 0 && tokenIsOnDate
}
