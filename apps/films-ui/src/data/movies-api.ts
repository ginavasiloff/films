const baseUrl = import.meta.env.VITE_FILMS_API_URL

export const search = async (searchVal: string): Promise<unknown> => {
  const res = await fetch(`${baseUrl}/movies/search?q=${searchVal}`, {
    method: 'GET',
  })
  const data = await res.json()
  return data
}
