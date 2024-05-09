import * as express from 'express'
import * as dotenv from 'dotenv'
import * as cors from 'cors'
import { fetchMovieSearch } from './the-movie-db'
import { getCastAges } from './cast-ages'

dotenv.config()

const app = express()
app.use(cors())
const port = process.env.PORT

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.json({ message: 'Hello World!' })
})

app.get('/movies/search', async (req, res) => {
  const query = req.query?.q.toString()
  const result = await fetchMovieSearch(query)
  res.send(result)
})

app.get('/movies/cast-ages/:id', async (req, res) => {
  const result = await getCastAges(req.params.id)
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
