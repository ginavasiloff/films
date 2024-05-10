import { List } from 'components/list'
import { MovieDetails } from 'src/data/movie-types'

const getYear = (str: string) => {
  const date = new Date(str)
  return date.getFullYear().toString()
}
const getUrl = (fileName: string) => {
  const baseUrl = import.meta.env.VITE_MOVIE_DB_IMAGES_URL
  const imgSize = 'w92'
  return `${baseUrl}/${imgSize}/${fileName}`
}

export const Results = ({ results }: { results: MovieDetails[] }) => {
  const items = results.map(i => ({
    id: i.id,
    title: i.title,
    subtitle: getYear(i.releaseDate),
    imgUrl: i.posterPath ? getUrl(i.posterPath) : undefined,
  }))
  return <List items={items} />
}
