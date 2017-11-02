const router = require('express').Router()
const chalk = require('chalk')
const User = require('../db/models/user')
module.exports = router

router.post('/login', (req, res, next) => {
  User.findOne({where: {email: req.body.email}})
  .then(user => {
    if (!user) {
      res.status(401).send('User not found')
    } else if (!user.correctPassword(req.body.password)) {
      res.status(401).send('Incorrect password')
    } else {
        req.login(user, err => (err ? next(err) : res.json(user)))
      }
    })
    .catch(next)
})

router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => (err ? next(err) : res.json(user)))
    })
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists')
      } else {
        next(err)
      }
    })
})

router.post('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  console.log('1----1', req.session);
  req.session.cookie.maxAge = 1;
  console.log('2----2', req.session);
  res.json(req.user)
})

router.use('/google', require('./google'))
