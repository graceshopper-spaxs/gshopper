const router = require('express').Router()
const {Ingredient} = require('../db/models')
module.exports = router



router.get('/', (req, res, next) => {
    Ingredient.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id','name', 'calories', 'price', 'image', 'servingSize']
    })
      .then(ingredients => res.json(ingredients))
      .catch(next)
  })


router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Ingredient.findById(id)
  .then(Ingredient => res.json(Ingredient))
  .catch(next)
})