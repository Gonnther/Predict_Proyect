const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
	res.sendFile(__dirname + "/cargando.html");
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