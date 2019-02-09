const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const urlParts = url.parse(req.url, true)
  const name = urlParts.query.name

  if (name) {
    console.log('Name: ' + name)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Hello ' + name + '!' }))
  } else {
    console.log('No name => return HTML')
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('hello.html', (err, htmlContent) => {
      res.end(htmlContent)
    })
  }
})

server.listen(1337, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:1337/')
})
