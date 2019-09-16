const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send(200).json({
        message: 'Handling Get requests to /products'
    })
})
router.post('/', (req, res, next) => {
    res.send(200).json({
        message: 'Handling Get requests to /products'
    })
})

module.exports = router