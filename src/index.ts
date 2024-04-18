import * as express from 'express'

const app = express()
const port = 4442
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.json({ message: 'Hello World!' }).send()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
