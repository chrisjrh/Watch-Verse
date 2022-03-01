const express = require('express')
const db = require('../db/watchlist')
const checkJwt = require('../auth0')

const router = express.Router()

module.exports = router

router.get('/', checkJwt, (req, res) => {
  const id = 'auth0|567'
  db.getWatchlist(id)
    .then(results => {
      return res.json(results)
    })
    .catch(e => console.log(e))
})

router.post('/marvel', checkJwt, (req, res) => {
  const { marvelId } = req.body
  const id = 'auth0|567'
  db.addMarvel(id, marvelId)
    .then(results => {
      return res.json(results)
    })
    .catch(e => console.log(e))
})

router.post('/starwars', checkJwt, (req, res) => {
  const { starwarsId } = req.body
  const id = 'auth0|567'
  db.addStarwars(id, starwarsId)
    .then(results => {
      return res.json(results)
    })
    .catch(e => console.log(e))
})
