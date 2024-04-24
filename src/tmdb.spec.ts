import {
  fetchIndividualDetails,
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovieSearch,
} from './tmdb'

const mockFetchResponse = (mockJson: object): void => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockJson),
    }),
  ) as jest.Mock
}

afterAll(() => {
  jest.restoreAllMocks()
})

describe('fetchMovieSearch', () => {
  test('it uses the query string to get', async () => {
    mockFetchResponse({ results: [] })
    const query = 'test'
    await fetchMovieSearch(query)
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(query),
      expect.objectContaining({ method: 'GET' }),
    )
  })
})

describe('fetchMovieDetails', () => {
  test('it uses a movie id to get from the movie api', async () => {
    const movieId = '0'
    mockFetchResponse({
      id: movieId,
      releaseDate: '1978-03-05',
      title: 'Test Test Test',
    })
    await fetchMovieDetails(movieId)
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(movieId),
      expect.objectContaining({ method: 'GET' }),
    )
  })
})

describe('fetchMovieCredits', () => {
  test('it uses a movie id to get from the movie api', async () => {
    const movieId = '0'
    mockFetchResponse({
      id: movieId,
      cast: [],
    })
    await fetchMovieCredits(movieId)
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(movieId),
      expect.objectContaining({ method: 'GET' }),
    )
  })
})

describe('fetchIndividualDetails', () => {
  test('it uses a person id to get from the movie api', async () => {
    const personId = '0'
    mockFetchResponse({
      id: personId,
      name: 'Test Cast',
      birthday: '1983-11-24',
      profileId: '1234.jpg',
    })
    await fetchIndividualDetails(personId)
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(personId),
      expect.objectContaining({ method: 'GET' }),
    )
  })
})
