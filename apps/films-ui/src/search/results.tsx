import { List } from 'components/list'
import { MovieDetails } from 'src/data/movie-types'

export const Results = ({ results }: { results: MovieDetails[] }) => {
  const getYear = (str: string) => {
    const date = new Date(str)
    return date.getFullYear().toString()
  }

  return (
    <List
      items={results.map(i => ({
        id: i.id,
        title: i.title,
        subtitle: getYear(i.releaseDate),
      }))}
    />
  )
}
