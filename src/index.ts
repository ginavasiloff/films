import * as express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.json({ message: 'Hello World!' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
