const express = require('express');
const { route } = require('.');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');


//Get all flights 
router.get('/', flightsCtrl.index);

//Get new flight 
router.get('/new', flightsCtrl.new);

//Get flight by ID 
router.get('/:id', flightsCtrl.show);

//post all flights
router.post('/', flightsCtrl.create);


module.exports = router;