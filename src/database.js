//conect to Data base
require('dotenv').config();

const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;
mongoose.connect(URI)
	.then(db => console.log('DB is conected'))
	.catch(err => console.error('err to conect DB'));

module.exports = mongoose