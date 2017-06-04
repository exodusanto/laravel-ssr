const express = require('express')
const path = require('path')
const http = require('http')
global.NODE_ENV = process.env.NODE_ENV || 'production'

const PORT = 8080
const isDev = NODE_ENV === 'development';
const app = express()
const router = require('./routers/router')

// app.set('views', path.join(__dirname, 'server/views'))
// app.set('view engine', 'pug')

// static assets served by express.static() for production
app.use(express.static(path.join(__dirname, 'public')))

app.use(router)


app.listen(PORT, function () {
    console.log('App (production) is now running on  http://localhost:'+ PORT +'!')
})