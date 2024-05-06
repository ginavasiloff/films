type SearchFormProps = React.PropsWithChildren & {
  search: (searchStr: string) => void
}

export const SearchForm = (props: SearchFormProps) => {
  const search: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    const target = e.target
  }
  return (
    <search>
      <form onSubmit={search}>
        <label htmlFor="movie">Find a Movie</label>
        <input type="search" id="movie" name="movie-search" />
        <button type="submit">Search</button>
      </form>
    </search>
  )
}
