const proxy = require('express-http-proxy');
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .use('/api', proxy('127.0.0.1:3000'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
