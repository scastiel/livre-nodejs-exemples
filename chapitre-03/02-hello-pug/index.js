const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.set('views', __dirname)

app.get('/', (req, res) => {
  res.render('express02', {
    title: 'Hello',
    names: ['Pierre', 'Paul', 'Jacques']
  })
})

app.get('/hello/:name', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ message: 'Hello ' + req.params.name + '!' }))
})

app.listen(8080)
