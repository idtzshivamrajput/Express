const express = require('express')
const FrontController =require('./controllers/FrontController')
const app = express()
const port = 3000

//setup ejs
app.set('view engine','ejs')

//route

app.get("/",FrontController.home) //[pathselkect karo]
app.get("/about",FrontController.about)
app.get("/teams",FrontController.teams)



// Server Create

app.listen(port, () => {
    console.log(`Server is running localhost : ${port}`)

  })