const express = require('express');
const router = express.Router();

let obj = null;

const CompSimple = require('../models/compsimple');

router.get('/', async (req, res) => {
	const methods2 = await CompSimple.findById("Comparacion Simple");
	res.send('exito')
	obj = Object.values(methods2)
	console.log(obj[3].porcDeFallo);
});

















router.get('/:id', async (req,res) => {
	const task = await Task.findById(req.params.id);
	res.json(task);
});

router.post('/', async(req, res) => {
	const { choisee, timebtwn } = req.body;
	const task = new Task({choisee, timebtwn });
	console.log(task);
	await task.save();
	res.json({status: "data save"});
});


router.put('/:id', async(req, res) => {
	const{choisee, timebtwn} = req.body;
	const newTask = {choisee, timebtwn};
	await Task.findByIdAndUpdate(req.params.id, newTask);
	res.json({status: 'Task Update'});
});

router.delete ('/:id', async (req,res) => {
	await Task.findByIdAndRemove(req.params.id);
	console.log('Task removed');
});

module.exports = router;