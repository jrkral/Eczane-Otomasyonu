const express = require('express');
const mongoose = require('mongoose');

const pageRoute = require('./routes/pageRoute');
const medicineRoute = require('./routes/medicineRoute');

const app = express();

//connect db
mongoose.connect('mongodb://localhost/eczane').then(() => {
  console.log('DB Success');
});

//template engine
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));

app.use(express.json())  //req.body'den gelen verileri yakalamak için
app.use(express.urlencoded({ extended: true })) //req.body'den gelen verileri yakalamak için

app.use('/', pageRoute);
app.use('/ilaclar', medicineRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta başlatıldı.`);
});
