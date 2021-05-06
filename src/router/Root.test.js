import React from 'react'
import {render, fireEvent, waitFor} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import {UserProvider} from '../context/User'
import {buildUser} from '../utils/tests'
import Root from './Root'

test('root renders login page, go through the login process, and render home page ', async () => {
  const history = createMemoryHistory({initialEntries: ['/']})

  const {getByRole, getByLabelText, getByText} = render(
    <UserProvider>
      <Router history={history}>
        <Root />
      </Router>
    </UserProvider>,
  )
  const userInput = getByLabelText(/user/i)
  const passwordInput = getByLabelText(/password/i)
  const submitButton = getByText(/submit/i).parentNode

  const fakeUser = buildUser()

  expect(getByRole('heading')).toHaveTextContent(/login/i)

  fireEvent.change(userInput, {target: {value: fakeUser.user}})
  fireEvent.change(passwordInput, {target: {value: fakeUser.password}})
  fireEvent.click(submitButton)

  await waitFor(() => {
    expect(getByRole('heading')).toHaveTextContent(/home/i)
  })
})
