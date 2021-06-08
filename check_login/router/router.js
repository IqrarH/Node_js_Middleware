const express = require('express')
const router = express.Router()
const jsonwebtoken = require('jsonwebtoken')
const checkLogin = require('../middlewares/checkLoginMiddleware')


router.post('/login/:username', (req, res) => {
    const {username} = req.params
    var token = jsonwebtoken.sign({user: username}, 'shhhhh')
    res.status(200).send({token: token})
})

router.get('/info', checkLogin, (req, res) => {
    res.status(200).send("This information is showed only if user is logged in")
})

module.exports = router