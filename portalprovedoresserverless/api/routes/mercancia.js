const express = require('express')
const mercancias = require('../models/mercancia');
const router = express.Router()

router.post('/new',(req,res)=>{
    mercancias.create(req.body).then(data=>res.status(201).send(data))
})
    
router.get('/all',(req,res)=>{
    mercancias.find().exec().then(data=>res.status(200).send(data))
})

router.get('/:id',(req,res)=>{
    mercancias.findById(req.params.id).exec().then(data=>res.status(200).send(data))
})

router.put('/edit/:id',(req,res)=>{
    mercancias.findOneAndUpdate(req.params.id,req.body).then(()=>res.sendStatus(204))
})

router.delete('/delete/:id',(req,res)=>{
    mercancias.findOneAndDelete(req.params.id).exec().then(()=> res.sendStatus(204))
})

module.exports = router