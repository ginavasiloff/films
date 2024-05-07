type SearchFormProps = React.PropsWithChildren & {
  search: React.FormEventHandler<HTMLFormElement>
}

export const SearchForm = (props: SearchFormProps) => {
  return (
    <form onSubmit={props.search}>
      <label htmlFor="movie">Find a Movie</label>
      <input
        data-testId="search-input"
        type="search"
        id="movie"
        name="movie-search"
      />
      <button data-testId="submit-button" type="submit">
        Search
      </button>
    </form>
  )
}
