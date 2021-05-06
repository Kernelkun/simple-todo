import faker from 'faker'

export const buildUser = () => ({
  password: faker.internet.password(),
  user: faker.internet.email(),
})

export const buildLoginResponse = () => ({
  jwt_token: faker.lorem.sentence(),
  jwt_token_expiry: new Date().getTime() + 5 * 60000,
})
