const router = require('express').Router()
const {Ingredient, Review} = require('../db/models')

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

router.get('/:id/review', (req, res, next) => {
  const id = req.params.id;
  Ingredient.findById(id)
  .then(ingredient => ingredient.getReviews())
  .then(review => res.json(review))
  .catch(next)
})

router.post('/:id/addreview', (req, res, next) => {
  const ingredientId = req.params.id;
  const like = req.body.like;
  const userId = req.body.userId;
  Review.create({like, userId})
   .then(review => review.setIngredients(ingredientId))
   .then(newReview => newReview[0][0].dataValues.reviewId)
   .then(id => {
      console.log("11111", id)
      return Review.findById(id)
     .then(res =>  res.dataValues)
     .then(review => res.json(review))
   })

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

