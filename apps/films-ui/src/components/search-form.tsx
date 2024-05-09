import styles from './search-form.module.css'

const baseUrl = import.meta.env.VITE_FILMS_API_URL

const search = async (searchVal: string): Promise<unknown> => {
  const res = await fetch(`${baseUrl}/movies/search?q=${searchVal}`, {
    method: 'GET',
  })
  const data = await res.json()
  return data
}

const onSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
  e.preventDefault()
  const test = e.currentTarget.elements.namedItem('movie-search') as
    | HTMLInputElement
    | undefined
  const searchVal = test ? test.value : ''
  const res = await search(searchVal)
  return res
}

export const SearchForm = () => {
  return (
    <search>
      <form onSubmit={onSubmit}>
        <label htmlFor="movie-search" className={styles.hidden}>
          Find a Movie
        </label>
        <input
          type="search"
          name="movie-search"
          placeholder="search for film"
        />
        <button type="submit">Search</button>
      </form>
    </search>
  )
}
