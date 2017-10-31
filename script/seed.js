/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {User, Ingredient} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  
  const ingredients = await Promise.all([
    Ingredient.create({name: 'foodone', calories: 100,calories_From_Fat: 50, total_Fat: 5, sodium: 50, total_Carbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png'}),
    Ingredient.create({name: 'foodtwo', calories: 100,calories_From_Fat: 50, total_Fat: 5, sodium: 50, total_Carbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png'}),
    Ingredient.create({name: 'foodthree', calories: 100,calories_From_Fat: 50, total_Fat: 5, sodium: 50, total_Carbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png'}),
    Ingredient.create({name: 'foodfour', calories: 100,calories_From_Fat: 50, total_Fat: 5, sodium: 50, total_Carbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png'}),
    Ingredient.create({name: 'food5', calories: 100,calories_From_Fat: 50, total_Fat: 5, sodium: 50, total_Carbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png'}),
    Ingredient.create({name: 'food6', calories: 100,calories_From_Fat: 50, total_Fat: 5, sodium: 50, total_Carbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png'}),
    Ingredient.create({name: 'food7', calories: 100,calories_From_Fat: 50, total_Fat: 5, sodium: 50, total_Carbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png'}),
    Ingredient.create({name: 'food8', calories: 100,calories_From_Fat: 50, total_Fat: 5, sodium: 50, total_Carbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png'}),
    Ingredient.create({name: 'food9', calories: 100,calories_From_Fat: 50, total_Fat: 5, sodium: 50, total_Carbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png'}),
    Ingredient.create({name: 'food100000', calories: 100,calories_From_Fat: 50, total_Fat: 5, sodium: 50, total_Carbohydrates: 20, sugars: 7, protein: 15, price: 8,inventory: 100, servingSize: 5, image: 'http://www.pngmart.com/files/3/Potato-PNG-Clipart.png'})
  ])
  
  console.log(`seeded ${users.length} users,  seeded ${ingredients.length} ingredients`)
  console.log(`seeded successfully`)

}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
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

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
