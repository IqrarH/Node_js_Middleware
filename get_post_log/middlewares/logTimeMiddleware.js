const moment = require('moment');

function logTimeMiddleware(req, res, next){
    console.log('Request Method: ' + req.method)
    console.log('Request Method: ' + req.url)
    console.log('Time: ' + moment().format())
    next()
}

module.exports = logTimeMiddleware