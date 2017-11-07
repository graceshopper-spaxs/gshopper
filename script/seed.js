const db = require('../server/db')
const {User, Ingredient, Order, OrderIngredient, Review} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')


  const users = await Promise.all([
    User.create({firstName: 'sisi', lastName: 'qin', email: 'sisi@email.com', password: '123', address: '1234 dog st', userType: 'admin', payment: '1234567812345678'}),
    User.create({firstName: 'phil', lastName: 'qin', email: 'phil@email.com', password: '123', address: '1234 dog st', userType: 'admin', payment: '1234567812345678'}),
    User.create({firstName: 'arthur', lastName: 'qin', email: 'athur@email.com', password: '123', address: '1234 dog st', userType: 'admin', payment: '1234567812345678'}),
    User.create({firstName: 'sam', lastName: 'qin', email: 'sam@email.com', password: '123', address: '1234 dog st', userType: 'admin', payment: '1234567812345678'}),
    User.create({firstName: 'simon', lastName: 'qin', email: 'simon@email.com', password: '123', address: '1234 dog st', userType: 'admin', payment: '1234567812345678'}),
    User.create({firstName: 'dog', lastName: 'qin', email: 'dog@email.com', password: '123', address: '1234 dog st', userType: 'admin', payment: '1234567812345678'}),
    User.create({firstName: 'cat', lastName: 'qin', email: 'cat@email.com', password: '123', address: '1234 dog st', userType: 'admin', payment: '1234567812345678'}),
  ])

  
  const ingredients = await Promise.all([
    Ingredient.create({name: 'foodone', calories: 100,caloriesFromFat: 50, totalFat: 5, sodium: 50, totalCarbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png', category: "vegetables"} ),
    Ingredient.create({name: 'foodtwo', calories: 100,caloriesFromFat: 50, totalFat: 5, sodium: 50, totalCarbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png', category: "vegetables"}),
    Ingredient.create({name: 'foodthree', calories: 100,caloriesFromFat: 50, totalFat: 5, sodium: 50, totalCarbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png', category: "vegetables"}),
    Ingredient.create({name: 'foodfour', calories: 100,caloriesFromFat: 50, totalFat: 5, sodium: 50, totalCarbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png', category: "vegetables"}),
    Ingredient.create({name: 'food5', calories: 100,caloriesFromFat: 50, totalFat: 5, sodium: 50, totalCarbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png', category: "vegetables"}),
    Ingredient.create({name: 'food6', calories: 100,caloriesFromFat: 50, totalFat: 5, sodium: 50, totalCarbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png', category: "vegetables"}),
    Ingredient.create({name: 'food7', calories: 100,caloriesFromFat: 50, totalFat: 5, sodium: 50, totalCarbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png', category: "vegetables"}),
    Ingredient.create({name: 'food8', calories: 100,caloriesFromFat: 50, totalFat: 5, sodium: 50, totalCarbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png', category: "vegetables"}),
    Ingredient.create({name: 'food9', calories: 100,caloriesFromFat: 50, totalFat: 5, sodium: 50, totalCarbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png', category: "vegetables"}),
    Ingredient.create({name: 'food100000', calories: 100,caloriesFromFat: 50, totalFat: 5, sodium: 50, totalCarbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png', category: "vegetables"})
  ])
  
  const orders = await Promise.all([
    Order.create({orderTime: Date.now(), userId: 1, orderPrice: 50, orderAmount: 3}),
    Order.create({orderTime: Date.now(), userId: 2, orderPrice: 50, orderAmount: 5}),
    Order.create({orderTime: Date.now(), userId: 3, orderPrice: 50, orderAmount: 34}),
    Order.create({orderTime: Date.now(), userId: 4, orderPrice: 50, orderAmount: 5}),
    Order.create({orderTime: Date.now(), userId: 5, orderPrice: 50, orderAmount: 60})
  ])

  const orderingredient = await Promise.all([
    OrderIngredient.create({id: 1, quantity: 2, orderId: 1, ingredientId: 1}),
    OrderIngredient.create({id: 2, quantity: 3, orderId: 1, ingredientId: 2}),
    OrderIngredient.create({id: 3, quantity: 4, orderId: 2, ingredientId: 3}),
    OrderIngredient.create({id: 4, quantity: 2, orderId: 2, ingredientId: 4}),
    OrderIngredient.create({id: 5, quantity: 3, orderId: 3, ingredientId: 5}),
    OrderIngredient.create({id: 6, quantity: 3, orderId: 4, ingredientId: 5}),
    OrderIngredient.create({id: 7, quantity: 3, orderId: 5, ingredientId: 5})
  ])  



  const reviews = await Promise.all([
    Review.create({like: true, userId: 1})
    .then(review => review.setIngredients(1)),
    Review.create({like: false, userId: 1})
    .then(review => review.setIngredients(2)),
    Review.create({like: false, userId: 1})
    .then(review => review.setIngredients(2)),
    Review.create({like: true, userId: 1})
    .then(review => review.setIngredients(3)),
    Review.create({like: true, userId: 2})
    .then(review => review.setIngredients(1)),
    Review.create({like: true, userId: 3})
    .then(review => review.setIngredients(4)),
    Review.create({like: false, userId: 3})
    .then(review => review.setIngredients(6)),
    Review.create({like: true, userId: 4})
    .then(review => review.setIngredients(1)),
  ]) 

// checkout seeding
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${ingredients.length} ingredients`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded ${reviews.length} reviews`)
  console.log(`seeded successfully`)
}


seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })


console.log('seeding...')
