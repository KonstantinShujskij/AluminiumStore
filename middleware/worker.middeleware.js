const errors = require('../consts/errors')

const Worker = require('../models/Worker.model')


const isWorker = async (req, res, next) => {
    if(req.method === 'OPTIONS') { return next() }

    try {
        const worker = await Worker.findOne({ _id: req.worker._id })
        if(!worker) { return res.status(401).json(errors.notAuth.answer) }
        req.worker = worker

        next()
    } catch(error) {
        return res.status(500).json(errors.unknown.answer)
    }
}


module.exports = {
    isWorker,
}
    