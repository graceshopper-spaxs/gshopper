const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
    like: {
         type: Sequelize.BOOLEAN,
         allowNull: false,
         defaultValue: true
    }
})
module.exports = Review;
