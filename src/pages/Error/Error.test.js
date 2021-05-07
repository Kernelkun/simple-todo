import React from 'react'
import {Router} from 'react-router-dom'
import {render} from '@testing-library/react'
import {UserProvider} from '../../context/User'
import Error from './Error'
import {createMemoryHistory} from 'history'

test('should load error page with location', () => {
  const history = createMemoryHistory()
  history.push('/fake/url')

  const {getByText} = render(
    <UserProvider>
      <Router history={history}>
        <Error />
      </Router>
    </UserProvider>,
  )

  const header = getByText(/error page/i)
  const noMatch = getByText(/no match for/i)
  const location = getByText(/\/fake\/url/i)

  expect(header).not.toBeNull()
  expect(noMatch).not.toBeNull()
  expect(location).not.toBeNull()
})
