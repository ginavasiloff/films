describe('/', () => {
  test('it hello world', async () => {
    const res = await fetch(`http://localhost:4442/`)
    const result = await res.json()
    console.log(result)
    expect(result.message).toBe('Hello World!')
  })
})
