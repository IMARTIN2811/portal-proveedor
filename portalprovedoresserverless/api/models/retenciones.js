const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const retenciones = mongoose.model('retenciones', new Schema(
{
 retencion_id: String,
 tipo_retencion: String,
 denominacion: String,
 retencion:String
}))

module.exports = retenciones