const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://IbrahimDb:25Mongodb@cluster0-om2z6.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.post('/api/products', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'objet créé !'
    });
});

app.use('/api/products', (req, res, next) => {
    const products = [
        {
            _id: 'oeihfzeoi',
            name: 'Mon premier produit',
            description: 'les infos de mon premier produit',
            price: 4900,
            inStock: 1,

        },
        {
            _id: 'oeihfzeomoihi',
            name:  'Deuxième objet',
            description: 'les infos de mon deuxieme',
            price:  5000,
            inStock: 0,
        }
    ];
    res.status(200).json(products);
});

module.exports = app;