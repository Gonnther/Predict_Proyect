
const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema ({
	choisee: { type: String, required: true},
	timebtwn: { type: String}

});

module.exports = mongoose.model('Task', taskSchema);
