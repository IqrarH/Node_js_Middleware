const express = require('express')
const router = express.Router()
const static = require('../middlewares/staticServingMiddleware')

router.get('/file/:fileName', static, (req, res) => {
})

module.exports = router