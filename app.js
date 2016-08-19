'use strict';

const express = require('express')

// Constants
const PORT = 8080

// App
const app = express()
app.get('/', function (req, res) {
  let datenow = new Date()
  datenow = `${datenow.toLocaleDateString()} ${datenow.toLocaleTimeString()}`
  console.log(datenow, 'Hello world')
  res.send('Hello world\n v1.6')
})

app.listen(PORT)
console.log('Running on http://localhost:' + PORT)
