const bcrypt = require('bcrypt')

const Product = require('../models/Product.model')

const errors = require('../consts/errors')


async function create(type, title, desc, data) {
    const product = new Product({type, title, desc, data})
    await product.save()

    return product
}

async function list(type) {
    const products = await Product.find({ type })

    return products
}

async function find(option) {
    const product = await Product.findOne(option)
    if(!product) { throw errors.notFind }

    return product
}

async function get(_id) { return await find({ _id }) }


module.exports = { 
    create,
    list,
    get
}