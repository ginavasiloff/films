import styles from './form.module.css'

type SearchFormProps = {
  handleSearch: React.FormEventHandler<HTMLFormElement>
}

export const SearchForm = ({ handleSearch }: SearchFormProps) => {
  return (
    <search>
      <form onSubmit={handleSearch} className={styles.form}>
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
