const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mercancias = mongoose.model('mercancias', new Schema(
{
    pedido: Number,
    nom_comercial: String,
    sociedad: Number,
    fecha_doc: Date,
    entrada_merc: Number,
    posicion: Number,
    material: String,
    texto: String,
    cantidad: Number,
    moneda: String,
    monto_total: Number,
    referencia: String,
    check: Number
}))

module.exports = mercancias