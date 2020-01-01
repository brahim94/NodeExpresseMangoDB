const express = requires('express');

const app = express();

app.use((req, res, next) => {
    console.log('requéte reçue !');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({ message: 'Votre requéte a bien été reçu !'});
});
    next();

app.use((req, res, next) => {
    console.log('Réponse envoyée avec succès !');
});

module.exports = app;