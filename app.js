const express = require('express')
const app = express()
const port = 3000


//route

app.get('/', (req, res) => {
    res.send('Home page')
  })

  app.get('/about', (req, res) => {
    res.send('About Page')
  })

  app.get('/contact', (req, res) => {
    res.send('Contact Page')
  })

  app.get('/contact1234', (req, res) => {
    res.send('ye 123 hai bhoi')
  })

// Server Create

app.listen(port, () => {
    console.log(`Server is running localhost : ${port}`)

  })