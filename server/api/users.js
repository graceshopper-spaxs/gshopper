const router = require('express').Router()
const { User } = require('../db/models')

module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:userId', (req, res, next) => {
  // if (req.user.userType === 'admin') {
    User.findById(req.params.userId)
      .then(user => res.json(user))
      .catch(next)
  // } else {
  //   res.send('UNAUTHORIZED REQUEST')
  // }
})
