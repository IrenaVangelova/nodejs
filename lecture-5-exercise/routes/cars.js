var express = require('express');
var router = express.Router();

const cars = [
  {
    car_name: 'Mercedes',
    model_name: 'A 220 Sedan',
    price: '$33,950'
  },
  {
    car_name: 'Volkswagen',
    model_name: 'Arteon',
    price: '$36,995'
  },
  {
    car_name: 'Audi',
    model_name: 'A7 Sportback',
    price: '$69,200'
  }
];

router.get('/', (req, res) => {
        res.render('cars/index', { cars });
      })
      .get('/create', (req, res) => {
        res.render('cars/create');
      })
      .post('/create', (req, res) => {
        cars.push(req.body);

        res.redirect('/cars');
      });

module.exports = router;

