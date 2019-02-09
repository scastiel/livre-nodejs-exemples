const express = require('express')
const fs = require('fs')

const app = express()

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  fs.readFile('express01.html', (err, data) => {
    res.end(data)
  })
})

app.get('/hello/:name', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ message: 'Hello ' + req.params.name + '!' }))
})

app.listen(8080)
