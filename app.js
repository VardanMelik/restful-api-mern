const express = require('express')
const app = express()

const productsRoutes = require('./api/routes/products')

app.use('/products', productsRoutes)

/*app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    })
})*/

module.exports = app