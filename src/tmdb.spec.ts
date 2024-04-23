import { fetchMovieSearch } from './tmdb'

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ test: 100 }),
    }),
  ) as jest.Mock
})

afterAll(() => {
  jest.restoreAllMocks()
})

describe('fetchMovieSearch', () => {
  test('it uses the query string to get', async () => {
    const query = 'test'
    await fetchMovieSearch(query)
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(query),
      expect.objectContaining({ method: 'GET' }),
    )
  })
})
