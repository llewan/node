var mongoose = require('mongoose');

module.exports = mongoose.model('Advice', {
	title: String,
	description: String
})