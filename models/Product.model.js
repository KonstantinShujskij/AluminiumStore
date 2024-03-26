const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    type: {type: String},
    title: {type: String},
    desc: {type: String},
    data: {type: Object}
})

module.exports = model('Product', schema)
