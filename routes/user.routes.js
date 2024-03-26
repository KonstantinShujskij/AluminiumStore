const {Router} = require('express')

const trappiner = require('../utils/trappiner.utils')
const { auth, isUser } = require('../middleware/auth.middleware')

const jwt = require('../utils/jwt.utils')

const User = require('../controllers/User.controller')
const userFormat = require('../format/user.format')


const router = Router()

router.post('/signup', trappiner(async (req, res) => {
    const { email, password } = req.body

    console.log(email, password);

    const user = await User.signup(email, password)
    const token = jwt.loginToken(user._id)

    res.status(201).json(token)
})) 

router.post('/login', trappiner(async (req, res) => {
    const { email, password } = req.body

    const user = await User.verify(email, password)
    const token = jwt.loginToken(user._id)

    res.status(200).json(token)
})) 

router.post('/load', auth, isUser, trappiner(async (req, res) => {
    res.status(200).json(userFormat.account(req.user))
})) 

module.exports = router