const express = require('express');
const body_parser = require('body-parser');

const app = express();

// import middleware


// import controller
const prayController = require('./controller/PrayController');




app.use(body_parser.json());

app.get('/', (req, res) => {
    console.log(req.body)
    res.json({message : 'Selamat Datang di pray-as-a-service server! Silahkan minta doamu di sini', respond : 200});
});

app.get('/pray', prayController.get);






module.exports = app;