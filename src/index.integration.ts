import * as dotenv from 'dotenv'

dotenv.config()

const baseUrl = `http://localhost:${process.env.PORT}`

describe('/', () => {
  test('it returns hello world', async () => {
    const res = await fetch(`${baseUrl}/`)
    const result = await res.json()
    expect(result.message).toBe('Hello World!')
  })
})
