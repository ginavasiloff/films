import * as dotenv from 'dotenv'

dotenv.config()

const movieDbApiUrl = process.env.TMDB_API_URL
const token = process.env.TMDB_API_TOKEN
const defaultOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
}

export const fetchMovieSearch = async (query: string) => {
  const url = `${movieDbApiUrl}/search/movie?include_adult=true&query=${query}`
  const data = await fetch(url, defaultOptions)
  const result = await data.json()
  return result
}
