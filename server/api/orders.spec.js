
const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const { Order, User } = require('../db/models/')

describe('Order routes', () => {
    beforeEach(() => {
        return db.sync({ force: true })
    })

    describe('/api/orders/', () => {

        beforeEach(() => {
            return User.create({
                email: 'Simon@gmail.com'
            }).then(res => {
                return Order.create({ userId: 1, orderPrice: 15, orderAmount: 30 })
            })
        })

        it('GET /order/', () => {
            return request(app)
                .get('/api/orders')
                .expect(200)
                .then(res => {
                    expect(res.body.length).to.be.equal(1)
                })
        })

    })
}) 
