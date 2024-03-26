const {Router} = require('express')

const trappiner = require('../utils/trappiner.utils')
const consts = require('../consts/consts')
const errors = require('../consts/errors')

const Product = require('../controllers/Product.constoller')

const router = Router()

router.post('/categories', trappiner(async (req, res) => {  
    const categories = consts.categories.map(({id, title, desc}) => ({ id, title, desc }))

    res.status(200).json(categories)
})) 

router.post('/products', trappiner(async (req, res) => {
    const { categoryId } = req.body

    const category = consts.categories.filter((item) => (item.id === categoryId))
    if(category.length <= 0) { throw errors.notFind }
       
    const products = category[0].products

    res.status(200).json(products)
})) 

router.post('/create', trappiner(async (req, res) => {
    const { type, title, desc, data } = req.body

    const product = await Product.create(type, title, desc, data)

    res.status(201).json(product)
})) 

router.post('/list', trappiner(async (req, res) => {
    const { type } = req.body

    const list = await Product.list(type)

    res.status(200).json(list)
})) 

router.post('/get', trappiner(async (req, res) => {
    const { id } = req.body

    const product = await Product.get(id)

    res.status(200).json(product)
})) 



module.exports = router