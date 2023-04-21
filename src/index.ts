import express from 'express'
import { body, headers } from './eventsRequest'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.get('/events', (req, res) => {
  fetch('https://api.meetup.com/gql', {
    method: 'POST',
    headers,
    body,
  })
    .then((response) => {
      return response.json()
    })
    .then((events) => {
      res.status(200)
      res.send(events)
    })
    .catch((err) => {
      res.status(400)
      res.send('Something went wrong')
    })
})

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})
