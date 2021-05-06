import React from 'react'
import {render, fireEvent, waitFor} from '@testing-library/react'
import faker from 'faker'
import {UserProvider} from '../../context/User'
import Login from './Login'

test('renders a form with user, password, and a submit button', async () => {
  const {getByLabelText, getByText} = render(
    <UserProvider>
      <Login />
    </UserProvider>,
  )

  const fakeUser = {
    password: faker.internet.password(),
    user: faker.internet.email(),
  }

  const userInput = getByLabelText(/user/i)
  const passwordInput = getByLabelText(/password/i)
  const submitButton = getByText(/submit/i).parentNode

  fireEvent.change(userInput, {target: {value: fakeUser.user}})
  fireEvent.change(passwordInput, {target: {value: fakeUser.password}})

  fireEvent.click(submitButton)

  await waitFor(() => {
    expect(submitButton).toBeDisabled()
  })
})
