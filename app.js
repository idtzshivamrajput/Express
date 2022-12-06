const express = require('express')
const FrontController =require('./controllers/FrontController')
const app = express()
const port = 3000

//setup ejs
app.set('view engine','ejs')

//route karta hai pages ko

app.get("/",FrontController.home) //[pathselkect karo]
app.get("/about",FrontController.about)
app.get("/contact",FrontController.contact)
app.get("/blog",FrontController.blog)
app.get("/login",FrontController.login)


// static file paths for using css and other..
app.use(express.static('public'))

// Server Create

app.listen(port, () => {
    console.log(`Server is running localhost : ${port}`)

  })