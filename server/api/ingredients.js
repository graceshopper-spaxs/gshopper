const router = require('express').Router()
const { Ingredient } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Ingredient.findAll()
    .then(ingredients => res.json(ingredients))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Ingredient.findById(id)
    .then(ingredient => res.json(ingredient))
    .catch(next)
})

router.post('/', (req, res, next) => {
  if (req.user.userType === 'admin') {
    Ingredient.create(req.body)
      .then(ingredient => res.json(ingredient))
      .catch(next)
  } else {
    res.send('Unauthorized Request')
  }
})

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  if (req.user.userType === 'admin') {
    Ingredient.findById(id)
      .then(ingredient => ingredient.update(req.body))
      .then(updatedIngredient => res.json(updatedIngredient))
      .catch(next)
  } else {
    res.send('Unauthorized Request')
  }
})
