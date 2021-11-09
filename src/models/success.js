const mongoose = require('mongoose');
const { Schema } = mongoose;
const successSchema = new Schema ({
	acierto: { type: String},
	fallo: { type: String}
});
module.exports = mongoose.model('Success', successSchema);
