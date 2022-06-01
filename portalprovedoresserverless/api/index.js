const express    = require('express')
const mongoose   = require('mongoose')
const cors       = require('cors')

const proveedores = require('./routes/proveedores')
const mercancias = require('./routes/mercancia')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})

app.use('/api/proveedores',proveedores)
app.use('/api/mercancia',mercancias)

module.exports = app
