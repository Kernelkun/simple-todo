export function setCookie(name, value) {
  document.cookie = name + '=' + value + '; Path=/;'
}

export function deleteCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}
