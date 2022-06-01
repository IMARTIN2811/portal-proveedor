const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const pagos = mongoose.model('pagos', new Schema(
{
 proveedor_id: String,
 caratula_id: String,
 id: String,
 pais: String,
 calve_banco:String,
 clabe:String,
 cuenta_banco: String,
 swift: String
}))

module.exports = pagos