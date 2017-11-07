const router = require('express').Router()
const {Ingredient, Review} = require('../db/models')
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