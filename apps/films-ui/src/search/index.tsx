import { useState } from 'react'
import { search } from 'data/movies-api'

import { SearchForm } from './form'
import { MovieDetails } from 'src/data/movie-types'
import { Results } from './results'

export const Search = () => {
  const [results, setResults] = useState<MovieDetails[]>([])

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const test = e.currentTarget.elements.namedItem('movie-search') as
      | HTMLInputElement
      | undefined
    const searchVal = test ? test.value : ''
    const res = (await search(searchVal)) as MovieDetails[]
    setResults(res)
  }

  return (
    <section>
      <SearchForm handleSearch={handleSearch} />
      <Results results={results} />
    </section>
  )
}
