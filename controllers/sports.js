const Sport = require('../models/sports');

function index(req, res){
    res.render('../views/sports/index', {sports: Sport.getAllSports()})
}

module.exports = {
    index
}