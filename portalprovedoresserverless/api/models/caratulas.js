const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const caratulas = mongoose.model('caratulas', new Schema(
{
 caratula_id: ObjectId,
 caratula: Binary
}))

module.exports = caratulas