const logs = './logs/';
const fs = require('fs');

fs.readdir(logs, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});