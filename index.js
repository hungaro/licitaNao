const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, '/dist/licitaNao')))
  .set('views', path.join(__dirname, 'index.html'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('/dist/licitaNao'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))