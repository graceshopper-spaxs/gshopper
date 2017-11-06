const Sequelize = require('sequelize')
const db = require('../db')

const Ingredient = db.define('ingredient', { 
    name:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    calories: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    caloriesFromFat: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    totalFat: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    sodium: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    totalCarbohydrates: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    sugars: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    protein: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    inventory: {
        type: Sequelize.INTEGER,
        allowNull: false 
    },
    servingSize: {
        type: Sequelize.INTEGER,
        allowNull: false 
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    category: {
        type: Sequelize.STRING,        
    }
} 
)

module.exports = Ingredient;