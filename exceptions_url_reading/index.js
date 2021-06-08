const { EROFS } = require('constants');
const express = require('express')
const path = require('path');
const app = express()
const router = express.Router()
const fs = require('fs');
const moment = require('moment');
const { nextTick } = require('process');


router.get('/', (req, res, next) => {
    try{
        throw "Exception Thrown "
    }
    catch(e){
        next(e)
    }
})

router.get('/another', (req, res, next) => {
    try{
        throw new Error("Error Occured")
    }
    catch(e){
        next(e)
    }
})
router.get('/api/logs', (req,res,next)=>{
    const logs = './logs/';
    const fs = require('fs');

    fs.readdir(logs, (err, files) => {
    files.forEach(file => {
        console.log(file);
         });
    });
    next()
})


app.use('/', router)

app.use((error, req, res, next)=>{

    var fileName = "ErrorLogs"
    fileName.trim()
    fileName+='.log'
    
    fs.appendFileSync('./logs/'+fileName, error)
    res.status(500).send('Error detected')
})
app.listen(3000)