const express = require('express')
const cors = require('cors')
require('dotenv').config()


const port = process.env.PORT || 3000

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api', require('./routes'));


app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`)
})

module.exports = app
