const fs = require ("fs");
const path = require("path");
const express = require("express");
const { allowedNodeEnvironmentFlags } = require("process");
const app = express(); 

// Settings
app.set('port', process.env.PORT || 3000); //asignamos el puerto

app.get('/phones', (req, res) => {
    fs.readFile('./phones.json', (err,json) => 
      res.json(JSON.parse(json)));
    });

// Static files
app.use(express.static(path.join(__dirname,'public')));

//Starting the server
app.listen(app.get('port'),()=> {
  console.log(`Server on port ${app.get('port')}`); 
});
