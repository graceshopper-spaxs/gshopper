const router = require('express').Router()
const {Category} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Category.findAll()
      .then(categories => res.json(categories))
      .catch(next)
})


router.post('/', (req, res, next) => {
  if(req.user.userType === "admin"){
    console.log(req.body)
    Category.create(req.body)
    .then(category => res.json(category))
    .catch(next)
  } else res.send("UNAUTHORIZED REQUEST")
})

router.delete('/:categoryId', (req, res, next) => {
  if(req.user.userType === "admin"){
    console.log(req.params.categoryId)
    Category.findById(parseInt(req.params.categoryId))
    .then(category => category.destroy())
    .then(category => res.json(category))
    .catch(next)
  } else res.send("UNAUTHORIZED REQUEST")
})