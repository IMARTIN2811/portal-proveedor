const express = require('express')
const proveedores = require('../models/proveedores')

const router = express.Router()

router.get('/',(req,res)=>{
    proveedores.find().exec().then(x=>res.status(200).send(x))
})

router.get('/:id',(req,res)=>{
    proveedores.findById(req.params.id).exec().then(x=>res.status(200).send(x))
})

router.post('/',(req,res)=>{
    proveedores.create(req.body).then(x=>res.status(201).send(x))
})

router.put('/:id',(req,res)=>{
    proveedores.findOneAndUpdate(req.params.id,req.body).then(()=>res.sendStatus(204))
})

router.delete('/:id',(req,res)=>{
    proveedores.findOneAndDelete(req.params.id).exec().then(()=>res.sendStatus(204))
})

module.exports= router