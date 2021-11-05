const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');


const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);


//MidDlewares
app.use(morgan('dev'));
app.use(express.json());

//Routers
app.use('/api/tasks', require('./routes/task.routes'));
app.use('/api/methods', require('./routes/methods.routes'));
app.use('/cargando', require('./routes/cargando.routes'));



//StaticFiles
app.use(express.static(path.join(__dirname, 'public')));



//Starting Server
app.listen(app.get('port'), ()=> {
	console.log(`Server Iniciado en Puerto: ${app.get('port')}`);
});
