const express = require('express');

const { routes } = require('./routes');

const router = express.Router();

// router.use(function timeLog (req, res, next) {
//   console.log('/api route hit at time: ', Date.now())
//   next()
// });

router.get('/', function (req, res) {
  res.send('Backend is up!')
});

routes(router);

Object.assign(module.exports, {
  router,
});
