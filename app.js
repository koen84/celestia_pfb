// init express
const express = require('express');
const app = express();

// pug for view
app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

// start webserver
const server = app.listen(3000, () => {
  console.log(`Express running on PORT ${server.address().port}`);
});

// routing root
app.get('/', (req, res) => {
  res.render('index', {title: "Koen PFB"});
});


// send tx
const cosmJS = require("@cosmjs/stargate")
//const sendTX = require("./public/js/SendPFB.js")
