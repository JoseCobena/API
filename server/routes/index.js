const express = require('express');
const db = require('../db');
const router = express.Router();
router.get('/vista1', async(req, res, next) => {
	try{
		let results1 = await db.vista1.all();
		res.json(results1);
	}catch(e){
		console.log(e);
		res.sendStatus(500);
	}
});
router.get('/vista1/:nombreUsuario', async(req, res, next) => {
	try{
		let results1 = await db.vista1.one(req.params.nombreUsuario);
		res.json(results1);
	}catch(e){
		console.log(e);
		res.sendStatus(500);
	}
});
router.get('/vista2', async(req, res, next) => {
	try{
		let results2 = await db.vista2.all();
		res.json(results2);
	}catch(e){
		console.log(e);
		res.sendStatus(500);
	}
});
router.get('/vista2/:nombreCancion', async(req, res, next) => {
	try{
		let results2 = await db.vista2.one(req.params.nombreCancion);
		res.json(results2);
	}catch(e){
		console.log(e);
		res.sendStatus(500);
	}
});
router.get('/vista3', async(req, res, next) => {
	try{
		let results3 = await db.vista3.all();
		res.json(results3);
	}catch(e){
		console.log(e);
		res.sendStatus(500);
	}
});
router.get('/vista3/:nombreUsuario', async(req, res, next) => {
	try{
		let results3 = await db.vista3.one(req.params.nombreUsuario);
		res.json(results3);
	}catch(e){
		console.log(e);
		res.sendStatus(500);
	}
});module.exports = router;
