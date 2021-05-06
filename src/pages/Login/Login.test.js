import React from 'react'
import {render, fireEvent, waitFor} from '@testing-library/react'
import {UserProvider} from '../../context/User'
import {callToLoginEndpoint as mockLogin} from '../../services/auth'
import {buildLoginResponse, buildUser} from '../../utils/tests'
import Login from './Login'

jest.mock('../../services/auth')

test('renders a form with user, password, and a submit button', async () => {
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

  fireEvent.change(userInput, {target: {value: fakeUser.user}})
  fireEvent.change(passwordInput, {target: {value: fakeUser.password}})

  fireEvent.click(submitButton)

  await waitFor(() => {
    expect(submitButton).toBeDisabled()
  })

  expect(mockLogin).toHaveBeenCalledTimes(1)
  expect(mockLogin).toHaveBeenCalledWith({formData: fakeUser})
})
