const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log("hello")
  res.send('Hello World')
})


app.get('/ahad', (req, res) => {
  console.log("hello ahad")
  res.send('Hello ahad')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})