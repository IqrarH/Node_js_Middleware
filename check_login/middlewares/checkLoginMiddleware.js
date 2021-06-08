const jsonwebtoken = require('jsonwebtoken');

function checkLoginMiddleware(req, res, next){
    try{
        const {token} = req.body
        jsonwebtoken.verify(token, 'shhhhh')
        next()
    }
    catch(e){
        res.status(403).send({msg: 'User not logged In'})
    }
}

module.exports = checkLoginMiddleware