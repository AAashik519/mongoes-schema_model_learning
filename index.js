const express = require('express')
const mongoose = require('mongoose');
const morgan =require('morgan')

const router = require('./route')

 
const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
 


app.use('/contacts',router)


const port = 8080
app.get('/', (req, res) => {
  res.send('Hello World!')
})
mongoose
      .connect(`mongodb+srv://admin:admin@cluster0.faozt.mongodb.net/contact?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})

      .then( () =>{
        app.listen(port, () => {
          console.log(`Example app listening at http://localhost:${port}
server connection  successfully`)
        })
      })
      .catch(e =>{
        console.log(e);
      }) 
 
 

 