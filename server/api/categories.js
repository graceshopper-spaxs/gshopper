const router = require('express').Router()
const {Category} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  if(req.user.userType === "admin"){
    Category.findAll()
      .then(categories => res.json(categories))
      .catch(next)
  } else res.send("UNAUTHORIZED REQUEST")
})


router.post('/', (req, res, next) => {
  if(req.user.userType === "admin"){
    Category.create(req.body)
    .then(category => res.json(category))
    .catch(next)
  } else res.send("UNAUTHORIZED REQUEST")
})

router.delete('/:categoryId', (req, res, next) => {
  if(req.user.userType === "admin"){
    Category.findById(req.params.categoryId)
    .then(category => category.destroy())
    .then(res.send("Deletion successful"))
    .catch(next)
  } else res.send("UNAUTHORIZED REQUEST")
})