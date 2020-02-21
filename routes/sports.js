let express = require('express');
let router = express.Router();
let sportsCtrl = require('../controllers/sports');

router.get('/', sportsCtrl.index)

module.exports = router