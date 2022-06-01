const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const sociedades = mongoose.model('sociedades', new Schema(
{
 sociedad_id: String,
 sociedad_id: String,
 nombre_emp: String
}))

module.exports = sociedades