const express = require('express')
const router = express.Router()
const userContext = require('../middlewares/userContextMiddleware')

router.get('/show', userContext, (req, res) => {
    const user = req.body
    res.status(200).send(user)
    res.end()
})

module.exports = router