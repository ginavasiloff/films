import styles from './search-form.module.css'

type SearchFormProps = React.PropsWithChildren & {
  search: React.FormEventHandler<HTMLFormElement>
}

export const SearchForm = (props: SearchFormProps) => {
  return (
    <search>
      <form onSubmit={props.search}>
        <label htmlFor="movie-search" className={styles.hidden}>
          Find a Movie
        </label>
        <input
          data-testId="search-input"
          type="search"
          name="movie-search"
          placeholder="search for film"
        />
        <button data-testId="submit-button" type="submit">
          Search
        </button>
      </form>
    </search>
  )
}
