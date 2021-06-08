const users = {name: 'iqrar', email: 'iqrar@gmail.com'}

function userContextMiddleware(req, res, next){
    req.body = users
    next()
}

module.exports = userContextMiddleware