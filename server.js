const express = require('express')
const next = require('next')
const path = require('path')

require('dotenv').config()

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const server = express()

server.get('/game', (req, res) => {
  server.use(express.static('canon-jump'))
  res.sendFile(path.join(__dirname, 'canon-jump' , 'index.html'))
})

app.prepare()
.then(() => {

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})