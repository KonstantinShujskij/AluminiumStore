const errors = require('../consts/errors')

const Moderator = require('../models/Moderator.model')


const isModerator = async (req, res, next) => {
    if(req.method === 'OPTIONS') { return next() }

    try {
        const moderator = await Moderator.findOne({ _id: req.worker._id })
        if(!moderator) { return res.status(401).json(errors.notAuth.answer) }
        req.moderator = moderator

        next()
    } catch(error) {
        return res.status(500).json(errors.unknown.answer)
    }
}


module.exports = {
    isModerator,
}
    