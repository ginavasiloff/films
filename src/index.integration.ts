describe('/', () => {
  test('it hello world', async () => {
    const res = await fetch(`http://localhost:${process.env.PORT}/`)
    const result = await res.json()
    expect(result.message).toBe('Hello World!')
  })
})
