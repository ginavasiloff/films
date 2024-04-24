import {
  fetchIndividualDetails,
  fetchMovieCredits,
  fetchMovieDetails,
} from './tmdb'
import { MovieCastAges } from './types'
import { dateDifferenceInMonths } from './util/date'

export const getCastAges = async (movieId: string): Promise<MovieCastAges> => {
  const [movieDetails, movieCredits] = await Promise.all([
    fetchMovieDetails(movieId),
    fetchMovieCredits(movieId),
  ])
  const releaseDate = new Date(movieDetails.releaseDate)
  const castDetails = await Promise.all(
    movieCredits.cast.map(async p => {
      return await fetchIndividualDetails(p.id)
    }),
  )
  const castAges = castDetails.map(c => {
    const birthday = new Date(c.birthday)
    const ageAtRelease = dateDifferenceInMonths(birthday, releaseDate) / 12
    return {
      id: c.id,
      name: c.name,
      ageAtRelease,
      birthday: c.birthday,
      profileId: c.profileId,
    }
  })
  return { movieId, details: movieDetails, cast: castAges }
}
