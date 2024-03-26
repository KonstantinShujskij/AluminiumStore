const bcrypt = require('bcrypt')

const User = require('../models/User.model')

const errors = require('../consts/errors')


async function signup(email, password) {
    const candidate = await User.findOne({ email })

    console.log(candidate);
    if(candidate) { throw errors.isExist }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({ email, password: hashedPassword })
    await user.save()

    return user
}

async function verify(email, password) {
    const user = await User.findOne({ email })
    if(!user) { throw errors.notAccess }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) { throw errors.notAuth }

    return user
}

async function get(_id) {
    const user = await User.findOne({ _id })
    if(!user) { throw errors.notFind }

    return user
}


module.exports = { 
    signup,
    verify,

    get
}