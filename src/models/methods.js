const mongoose = require('mongoose');
const { Schema } = mongoose;

const methodsSchema = new Schema ({
	_id: {type: String, required: true}
	// choisee: { type: String, required: true},
	// timebtwn: { type: String, required: true}

});

module.exports = mongoose.model('Methods', methodsSchema);