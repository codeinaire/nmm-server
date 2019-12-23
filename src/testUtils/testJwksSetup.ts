import createJWKSMock from 'mock-jwks'
import { mockCustomEvent } from './testMocks'

export const TOKEN_ISSUER = 'https://test-app.com/'
export const jwksMock = createJWKSMock(TOKEN_ISSUER)

export async function setUpAuthToken(scope: string) {
  await jwksMock.start()

  const accessToken = jwksMock.token({
    aud: ['https://test-app.com/test/'],
    iss: TOKEN_ISSUER,
    sub: 'testuserid',
    scope
  })
  return mockCustomEvent({
    authorization: `Bearer ${accessToken}`
  })
}
