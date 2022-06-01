const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const proveedores = mongoose.model('proveedores', new Schema(
{ 
    id: String,
    nombre: String,
    nombreComercial: String,
    rfc: String,
    email: String,
    direccion: String,
    distrito: String,
    codigoPostal: Number,
    pais: String,
    telefono: Number,
    movil: Number,
    email: String,
    ramo: String,
    direccionEstandar: String,
    direccionFiscal: String,
    direccionCorrespondencia: String,
    caratula: String,
    bancoId: String,
    bancoPais: String,
    bancoNombre: String,
    Clabe: String,
    Swift: String
}))

module.exports = proveedores