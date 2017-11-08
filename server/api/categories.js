const router = require('express').Router()
const { Category, Ingredient } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Category.findAll()
    .then(categories => res.json(categories))
    .catch(next)
})


router.post('/', (req, res, next) => {
  if (req.user && req.user.userType === "admin") {
    Category.create(req.body)
      .then(category => res.json(category))
      .catch(next)
  } else res.send("UNAUTHORIZED REQUEST")
})

router.delete('/:categoryId', (req, res, next) => {
  if (req.user && req.user.userType === "admin") {
    Category.findById(parseInt(req.params.categoryId))
      .then(category => category.destroy())
      .then(category => res.json(category))
      .catch(next)
  } else res.send("UNAUTHORIZED REQUEST")
})

router.put('/assign', (req, res, next) => {
  if (req.user && req.user.userType === "admin") {
    Category.findById(req.body.categoryId)
      .then(category => {
        return Ingredient.findById(req.body.ingredientId)
          .then(ingredient => {
            return category.addIngredient(ingredient)
          })
      })
      .then(res.send('Association successful'))
      .catch(next)
  } else res.send("UNAUTHORIZED REQUEST")
})

router.put('/unassign', (req, res, next) => {
  if (req.user && req.user.userType === "admin") {
    Category.findById(req.body.categoryId)
      .then(category => {
        return Ingredient.findById(req.body.ingredientId)
          .then(ingredient => {
            return category.removeIngredient(ingredient)
          })
      })
      .then(res.send('Association successful'))
      .catch(next)
  } else res.send("UNAUTHORIZED REQUEST")
})
