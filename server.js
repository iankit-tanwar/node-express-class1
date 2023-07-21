//console.log("hello");

//1  imprt area

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hello', (req, res) => {
  res.send('good World!')
})
app.get('/a',(req,res)=>{
    res.send('hello from a')
})

app.get('/b',(req, res)=>{
    res.send('helo from b')
})

app.listen(port)