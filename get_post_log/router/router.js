  
const express = require('express')
const router = express.Router()
const logTimeMiddleware = require('../middlewares/logTimeMiddleware')


router.get('/', logTimeMiddleware, (req, res) => {
    res.status(200).send({msg: 'GET request received'})
})

router.post('/', logTimeMiddleware, (req, res) => {
    res.status(200).send({msg: 'POST request received'})
})


module.exports = router