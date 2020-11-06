const express = require('express');

const CarsController = require('./controllers/CarController');

const routes = express.Router();

const carsController = new CarsController();

routes.get('/Cars', carsController.index);
routes.get('/Carss/:id', carsController.show);
routes.post('/Cars', carsController.create);
routes.delete('/Cars/:id', carsController.delete);

module.exports = routes;
