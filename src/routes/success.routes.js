const express = require('express');
const router = express.Router();

const Success = require('../models/success');

router.get('/', async (req, res) => {
	const success = await Success.find();
	res.json(success);
});

router.get('/:id', async (req,res) => {
	const success = await Success.findById(req.params.id);
	res.json(success);
});

router.post('/', async(req, res) => {
	const { acierto, fallo } = req.body;
	const success = new Success({acierto, fallo });
	console.log(success);
	await success.save();
	var taskId = (String(success._id));
	// res.json({status: "data save"});
	res.json(taskId);
});


router.put('/:id', async(req, res) => {
	const{ acierto, fallo } = req.body;
	const newSuccess = { acierto, fallo };
	await Success.findByIdAndUpdate(req.params.id, newSuccess);
	res.json({status: 'Success Update'});
});


router.delete ('/:id', async (req,res) => {
	await Success.findByIdAndRemove(req.params.id);
	console.log('Success removed');
});

module.exports = router;