const router = require('express').Router()
const {Ingredient} = require('../db/models')
module.exports = router



router.get('/', (req, res, next) => {
    Ingredient.findAll()
      .then(ingredients => res.json(ingredients))
      .catch(next)
  })


router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Ingredient.findById(id)
  .then(Ingredient => res.json(Ingredient))
  .catch(next)
})
