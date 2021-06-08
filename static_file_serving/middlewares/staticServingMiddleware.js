const express = require('express');
const path = require('path');
const fs = require('fs');

function staticServingMiddleware(req, res, next){
    const {fileName} = req.params
    console.log(path.join(process.cwd()+'/files/'+fileName))
    if(fs.existsSync(path.join(process.cwd()+'/files/'+fileName))){
        res.sendFile(path.join(process.cwd()+'/files/'+fileName))
        next()
    }
    else{
        res.status(404).send({msg: 'File does not exist!!'})
        res.end()
    }
}
module.exports = staticServingMiddleware