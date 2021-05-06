import React from 'react'
import {render, fireEvent, waitFor} from '@testing-library/react'
import {UserProvider} from '../../context/User'
import {postLogin as mockLogin} from '../../services/auth'
import {buildLoginResponse, buildUser} from '../../utils/tests'
import Login from './Login'

jest.mock('../../services/auth')

afterEach(() => {
  jest.clearAllMocks()
})

export const buildLoginForm = () => {
  const {getByLabelText, getByText} = render(
    <UserProvider>
      <Login />
    </UserProvider>,
  )
  const fakeUser = buildUser()
  const fakeResponse = buildLoginResponse()

  mockLogin.mockResolvedValue(fakeResponse)

  const userInput = getByLabelText(/user/i)
  const passwordInput = getByLabelText(/password/i)
  const submitButton = getByText(/submit/i).parentNode

  return {
    fakeUser,
    passwordInput,
    submitButton,
    userInput,
  }
}

test('renders a form with user, password, and a submit button', async () => {
  const {fakeUser, passwordInput, submitButton, userInput} = buildLoginForm()

  fireEvent.change(userInput, {target: {value: fakeUser.user}})
  fireEvent.change(passwordInput, {target: {value: fakeUser.password}})

  fireEvent.click(submitButton)

  await waitFor(() => {
    expect(submitButton).toBeDisabled()
  })

  expect(mockLogin).toHaveBeenCalledTimes(1)
  expect(mockLogin).toHaveBeenCalledWith(fakeUser)
})
