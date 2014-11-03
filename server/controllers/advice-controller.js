var Advice = require('../models/advice');

module.exports.create = function(req, res) {
	console.log(req.body);
	var advice = new Advice(req.body);
	advice.save(function(err, result){
		res.json(result);
	});
}

module.exports.list = function(req, res) {
	Advice.find({}, function (err, results) {
		res.json(results);
	})
}