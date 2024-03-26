const jwt = require('../utils/jwt.utils')

const config = require('config')
const errors = require('../consts/errors')

const middleware = require('./middleware')

const User = require('../controllers/User.controller')


const auth = middleware((req, res) => {   
    const token = req.headers.authorization.split(' ')[1]
    if(!token) { return res.status(401).json(errors.notAuth.answer) }

    try { 
        const _id = jwt.verifeLoginToken(token)
        req.user = { _id }
    } 
    catch(error) { throw errors.notAuth }
})

const isUser = middleware(async (req, res) => { req.user = await User.get(req.user._id) })


module.exports = { auth, isUser }
